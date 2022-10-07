import { Link } from 'preact-router/match';

export default function Signup() {
    return (
        <div class='cont'>
            <div class="login">
                <div class='login-form'>Login</div>
                <div class='fields'>
                    <p>Email</p>
                    <input type='text' placehoder='Enter your name' required />
                </div>
                <div class='fields'>
                    <p>Password</p>
                    <input type='number' placehoder='Enter your password' required />
                </div>
                <button class='signup-btn'>Login</button>
                <Link class='links' href='/signup'><p class='have-acc'>Create an Account?</p></Link>
            </div>
        </div>
    )
}