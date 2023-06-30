import { Link } from "react-router-dom";

export default function Login(){

    const onSubmit = (ev) => {
        ev.preventDefault();

    };

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit = {onSubmit}>
                    <h1 className="title" style={{ color: '#1B9C85' }}>
                        Login in to your account
                    </h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block" style={{ background: '#E76161' }}>Login</button>
                    <p className="message">
                        Not Register? <Link to = '/signup'>Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}