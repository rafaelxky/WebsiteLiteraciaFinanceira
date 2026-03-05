import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Login.css";

export default function StatusPage() {

    const location = useLocation();
    const message = location.state?.message || "Unknown error";
    const nextPage = location.state?.nextPage || "/";

    const navigate = useNavigate();

    const goto = () => {
        navigate(nextPage);
    };

    return (
        <main className="login-page">
            <section className="login-card">
                {message}
                <button className="login-submit" onClick={goto}>
                    Continuar
                </button>
            </section>
        </main>
    );
}