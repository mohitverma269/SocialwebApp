import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Splash() {

    const navigate = useNavigate();
  const { user, token } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (token && user) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    }, 2000); // 2 sec splash delay

    return () => clearTimeout(timer);
  }, [token, user, navigate]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (user) {
  //       navigate("/home");   // logged in → home
  //     } else {
  //       navigate("/login");  // not logged in → login
  //     }
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, [user, navigate]);


  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100">

      <div className="flex flex-col items-center">
        {/* App Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"        // <-- change to your logo path
          alt="App Logo"
          className="w-32 h-32 object-contain animate-bounce mb-6"
        />

        {/* App Name */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Social Media Web App
        </h1>

      </div>

    </div>
  );
}
