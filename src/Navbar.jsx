import { useState, useEffect } from "react";
import { signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";  // ⬅️ para redirigir

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  // ⬅️ inicializar navegación

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        navigate("/restaurantes");  // ⬅️ redirige a restaurantes al iniciar sesión
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleGoogleLogin = () => {
    signInWithRedirect(auth, googleProvider);
  };

  const handleGitHubLogin = () => {
    signInWithRedirect(auth, githubProvider);
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      navigate("/");  // ⬅️ redirige a inicio al cerrar sesión
    });
  };

  return (
    <nav>
      <h1>Food Delivery</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : user ? (
        <div>
          <img src={user.photoURL || ""} alt="Perfil" />
          <p>Bienvenido, {user.displayName || "Usuario"}</p>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : (
        <div>
          <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
          <button onClick={handleGitHubLogin}>Iniciar sesión con GitHub</button>
          <p>Por favor, inicia sesión.</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
