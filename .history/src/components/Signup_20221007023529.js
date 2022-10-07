import { client, account, database } from '../appwrite/appwrite'
import { Link } from "preact-router/match"
import { v4 as uuid } from 'uuid';

export default function Signup() {

    const signUp = (e) => {
        e.preventDefault()

        const promise = account.create(
            v4
        )
    }

    return (
        <div class='cont'>
            <div class="signup">
                <div class='signup-form'>SignUp</div>
                <div class='fields'>
                    <p>UserName</p>
                    <input required type='text' placeholder='Enter your name' />
                </div>
                <div class='fields'>
                    <p>Email</p>
                    <input required type='email' placeholder='Enter your email' />
                </div>
                <div class='fields'>
                    <p>Password</p>
                    <input required placeholder='Enter your password' />
                </div>
                <button class='signup-btn' onClick={signUp}>SignUp</button>
                <Link href='/' class='links'>Have an Account!</Link>
            </div>
        </div>
    )
}