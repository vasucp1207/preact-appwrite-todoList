import { Link } from "preact-router/match"

export default function Signup() {
    return (
        <div class='cont'>
            <div class="signup">
                <div class='signup-form'>SignUp</div>
                <div class='fields'>
                    <p>UserName</p>
                    <input req />
                </div>
                <div class='fields'>
                    <p>Email</p>
                    <input />
                </div>
                <div class='fields'>
                    <p>Password</p>
                    <input />
                </div>
                <button class='signup-btn'>SignUp</button>
                <Link href='/' class='links'>Have an Account!</Link>
            </div>
        </div>
    )
}