import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.scss"
import { Link } from "react-router-dom";

const Login = () => {
    const {login} = useContext(AuthContext);
    const handleLogin = () => {
        login();
    };
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Socio Sphere.</h1>
                    <p>My name is Aditya Ajmera and this is my Social Media App, please login to acess your profile or register if you are a new user.</p>
                    <span>Don't have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

