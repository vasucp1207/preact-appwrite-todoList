import {  } from '../appwrite/appwrite'

import { Link } from "preact-router/match"

export default function Signup() {
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
                <button class='signup-btn'>SignUp</button>
                <Link href='/' class='links'>Have an Account!</Link>
            </div>
        </div>
    )
}