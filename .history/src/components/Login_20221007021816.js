import { Link } from 'preact-router/match';

export default function Signup() {
    return (
        <div class='cont'>
            <div class="login">
                <div class='login-form'>Login</div>
                <div class='fields'>
                    <p>Email</p>
                    <input required />
                </div>
                <div class='fields'>
                    <p>Password</p>
                    <input />
                </div>
                <button class='signup-btn'>Login</button>
                <Link class='links' href='/signup'><p class='have-acc'>Create an Account?</p></Link>
            </div>
        </div>
    )
}