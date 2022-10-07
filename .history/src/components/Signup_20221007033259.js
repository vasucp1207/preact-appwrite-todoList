import { client, account, database } from '../appwrite/appwrite'
import { Link } from "preact-router/match"
import { v4 as uuid } from 'uuid';
import { signal } from "@preact/signals";

const name = signal("")

const setName = (e) => { name.value = e.target.value }

export default function Signup() {

    const signUp = (e) => {
        e.preventDefault()

        const promise = account.create(
            uuid(),
            user.name,
            user.email,
            user.password
        )

        promise.then(function (response) {
            console.log(response)  // Success
        }, function (error) {
            console.log(error)  // Failure
        })
        console.log(name)
        console.log(email)
        console.log(password)
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
                        value={name.value}
                        onInput={setName}
                    />
                </div>
                <div class='fields'>
                    <p>Email</p>
                    <input 
                        required 
                        type='email' 
                        placeholder='Enter your email'
                        {/* onInput={(e) => (email.value = e.target.value)} */}
                    />
                </div>
                <div class='fields'>
                    <p>Password</p>
                    <input 
                        required 
                        placeholder='Enter your password' />
                        {/* onInput={(e) => (password.value = e.target.value)} */}
                </div>
                <button class='signup-btn' onClick={signUp}>SignUp</button>
                <Link href='/' class='links'>Have an Account!</Link>
            </div>
        </div>
    )
}