// Layout.jsx
import { Outlet, useNavigate } from "react-router-dom";
// import { Footer } from "../components/Footer.jsx";
import NavBar from "../components/Navbar.jsx";
// import backgroundImage from "../assets/images/fondo_layout.webp";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import Swal from "sweetalert2";

export const LayoutBank = () => {
  const { checkTokenExpiration, isAuthenticated, sessionExpired, loading } =
    useAuth();
  const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated) {
			const intervalId = setInterval(() => {
				checkTokenExpiration();
			}, 600000);

			return () => clearInterval(intervalId);
		}

		return;
	}, [checkTokenExpiration, isAuthenticated]);

  useEffect(() => {
    if (!loading && !isAuthenticated && sessionExpired) {
      Swal.fire({
        title: "Su sesión ha expirado",
        text: "Por favor inicie sesión",
        icon: "error",
        customClass: {
          popup: "bg-dark-light text-light",
          title: "text-light font-bold text-lg",
          htmlContainer: "text-light text-sm",
          confirmButton:
            "bg-light-dark hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",
        },
        buttonsStyling: false,
      }).then(() => {
        navigate("/");
      });
    }
  }, [loading, isAuthenticated, sessionExpired, navigate]);

  if (loading) return null;

	return (
		<div>
			<div>
				<Outlet />
			</div>
			<NavBar />
		</div>
	);
};

export default LayoutBank