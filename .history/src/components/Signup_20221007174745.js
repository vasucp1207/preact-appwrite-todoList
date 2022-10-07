import { account } from '../appwrite/appwrite'
import { v4 as uuid } from 'uuid';
import { signal } from "@preact/signals";
import { route } from 'preact-router';
import { Link } from 'preact-router/match';

const name = signal("")
const email = signal("")
const password = signal("")

const setName = (e) => {
    name.value = e.target.value
}

const setEmail = (e) => {
    email.value = e.target.value
}

const setPassword = (e) => {
    password.value = e.target.value
}

export default function Signup() {

    const signUp = (e) => {
        e.preventDefault()

        const promise = account.create(
            uuid(),
            email.value,
            password.value,
            name.value,
        )

        promise.then(function (response) {
            console.log(response)  // Success
            route('/todo', true)
        }, function (error) {
            console.log(error)  // Failure
        })
    }

    return (
        <div class='cont'>
            <div class="signup">
                <div class='signup-form'>SignUp</div>
                <div class='fields'>
                    <p>User Name</p>
                    <input 
                        required 
                        type='text' 
                        placeholder='Enter your name'
                        onInput={setName}
                    />
                </div>
                <div class='fields'>
                    <p>Email</p>
                    <input 
                        required  
                        type='email'
                        placeholder='Enter your email'
                        onInput={setEmail}
                    />
                </div>
                <div class='fields'>
                    <p>Password</p>
                    <input 
                        required 
                        placeholder='Enter your password'
                        onInput={setPassword}
                    />
                </div>
                <button class='signup-btn' onClick={signUp}>SignUp</button>
                <Link href='/' class='links'>Have an Account!</Link>
            </div>
        </div>
    )
}