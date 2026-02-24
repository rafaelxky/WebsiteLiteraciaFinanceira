import { useNavigate } from "react-router-dom";
import { securityService } from "../Dependencies";
import { useEffect } from "react";

export default function Logout({setLoggedIn}){
      const navigate = useNavigate();

  useEffect(() => {
    securityService.Logout();
    setLoggedIn(false);
    navigate("/login");
  }, [setLoggedIn, navigate]);

  return null;
}