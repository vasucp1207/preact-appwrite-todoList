import { signal } from "@preact/signals";
import { database } from '../appwrite/appwrite'
import { v4 as uuid } from 'uuid';
import { useEffect } from 'preact/hooks';

const goals = signal([])

function ShowTodo(){

    useEffect(() => {
        const promise = database.listDocuments("633f403dcda63e88b76c", "633f404ac991d157efa9")
        promise.then(function (response) {
            console.log(response.do)  // Success
        }, function (error) {
            console.log(error)  // Failure
        })
    }, [])

    return(
        <div>

        </div>
    )
}

export default ShowTodo