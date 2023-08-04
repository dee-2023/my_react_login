import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginProfiles = [
    {
      id: 1,
      username: "admin",
      password: "passwd123",
      isAdmin: true,
    },
    {
      id: 2,
      username: "staff",
      password: "123456",
      isAdmin: false,
    },
    {
      id: 3,
      username: "vice",
      password: "abrakadabra",
      isAdmin: false,
    },
    {
      id: 4,
      username: "super",
      password: "69843",
      isAdmin: true,
    },
    {
      id: 5,
      username: "user",
      password: "123",
      isAdmin: false,
    },
  ];



const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();        // so the page will not be reloaded causing to lose our state

        const user = LoginProfiles.find(
            (profile) => profile.username === username && profile.password === password
            );
        
        if (user) {
            setIsLoggedIn(true);
            setIsAdmin(user.isAdmin);
            setError("");
        } else {
            setError("Failed Login.");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        setUsername("");
        setPassword("");
        setError("");
      };
 
      return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Success, {username}!</h2>
                    {isAdmin ? (
                        <div>
                        <p>"You are an admin" </p>
                        <p>Visit</p> <button className="link-btn" onClick={() => ('onlineshop')}>Manage Shop</button>
                        </div> 
                    ):( 
                        <div>
                            <p>"You are not an admin"</p>
                            <p>Visit<button className="link-btn" onClick={() => ('onlineshop')}>Online Shop</button></p>
                        </div>
                        )
                    }



                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div className='auth-form-container'>
                    <h3>Login here</h3>

                    {error && <p className="alert alert-danger">{error}</p>}

                    <form className="login-form" onSubmit={handleLogin}>
                        <label htmlFor="username">Username</label><br />
                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" required /><br />
                        <label htmlFor="password">Password</label><br />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" required/><br />
                        <button><b> Login </b></button>
                    </form><br />
                    <p> Don't have an account yet?</p>
                    <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Register here</button>
                    
                </div>
            )}
        </div>
    );
            };






        





export default Login