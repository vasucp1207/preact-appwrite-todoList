import { client, account, database } from '../appwrite/appwrite'
import { Link } from "preact-router/match"
import { v4 as uuid } from 'uuid';
import { signal } from "@preact/signals";

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
            name.value,
            email.value,
            password.value
        )

        promise.then(function (response) {
            console.log(response)  // Success
        }, function (error) {
            console.log(error)  // Failure
        })
        console.log(name.value)
        console.log(email.value)
        console.log(password.value)
    }

    return (
        <div class='cont'>
            <div class="signup">
                <div class='signup-form'>SignUp</div>
                <div class='fields'>
                    <p>UserName</p>
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