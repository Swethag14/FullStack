import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submit(event) {
        event.preventDefault(); // Prevent the default form submission
        if (email && password) {
            window.alert(`Login successful.\nEmail: ${email}\nPassword: ${password}`);
        } else {
            window.alert("Please enter both email and password.");
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1>Login</h1>

                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />

                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />

                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}

export default Login;