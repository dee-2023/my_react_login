import React, { useState } from "react"


export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {   //every form needs handleSubmit
    e.preventDefault();        
    console.log(username);
    }

    return (
        <div className='auth-form-container'>
        <form className="register-form" onSubmit={handleSubmit}>
            <h3>Register</h3>
            <label htmlFor="name" > Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="fullname" /><br />
            <label htmlFor="username"> Create username </label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="username" /><br />
            <label htmlFor="password">Create Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" /><br />
            <button> Register </button>
        </form><br />
        <p> Already have an account?</p><button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login here</button>
        </div>

    
    )
}
export default Register