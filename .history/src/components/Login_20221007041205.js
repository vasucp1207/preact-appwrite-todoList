import { client, account, database } from '../appwrite/appwrite'
import { v4 as uuid } from 'uuid';
import { signal } from "@preact/signals";
import { route } from 'preact-router';
import { Link } from 'preact-router/match';

export default function Signup() {
    return (
        <div class='cont'>
            <div class="login">
                <div class='login-form'>Login</div>
                <div class='fields'>
                    <p>Email</p>
                    <input 
                        type='email' placeholder='Enter your email' required />
                </div>
                <div class='fields'>
                    <p>Password</p>
                    <input placeholder='Enter your password' required />
                </div>
                <button class='signup-btn'>Login</button>
                <Link class='links' href='/signup'><p class='have-acc'>Create an Account?</p></Link>
            </div>
        </div>
    )
}