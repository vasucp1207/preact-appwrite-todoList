import { signal } from "@preact/signals";
import { database } from '../appwrite/appwrite'
import { v4 as uuid } from 'uuid';
import { useEffect } from 'preact/hooks';

const goals = signal([])

function ShowTodo(){

    useEffect(() => {
        goals.value = []
        const promise = database.listDocuments("633f403dcda63e88b76c", "633f404ac991d157efa9")
        promise.then(function (response) {
            goals.value = response.documents  // Success
        }, function (error) {
            console.log(error)  // Failure
        })
    }, [])

    console.log(goals.value)

    return(
        <div>
            {goals.value.map((goal) => (
                <p>{goal}</p>
            ))}
        </div>
    )
}

export default ShowTodo