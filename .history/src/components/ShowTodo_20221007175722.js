import { signal } from "@preact/signals";
import { database } from '../appwrite/appwrite'
import { useEffect } from 'preact/hooks';

const goals = signal([])
const completeGoal = signal('false')

function ShowTodo() {

    useEffect(() => {
        const promise = database.listDocuments("633f403dcda63e88b76c", "633f404ac991d157efa9")
        promise.then(function (response) {
            goals.value = response.documents  // Success
        }, function (error) {
            console.log(error)  // Failure
        })
    }, [])

    const removeGoal = (id) => {
        const promise = database.deleteDocument("633f403dcda63e88b76c", "633f404ac991d157efa9", id)
        promise.then(
            function (response) {
                console.log(response);
            },
            function (error) {
                console.log(error);
            }
        )
        window.location.reload()
    }

    console.log(!(completeGoal.value))

    return (
        <div>
            {goals.value.map((goal) => (
                <div class='goals-cont'>
                    {completeGoal.value == 'true'? <strike><p class='goal'>{goal.content}</p></strike>: <p class='goal'>{goal.content}</p>}
                    {/* {!completeGoal.value && <p class='goal'>{goal.content}</p>}
                    {completeGoal.value && <strike><p class='goal'>{goal.content}</p></strike>} */}
                    <button class='goal-btn' onClick={() => removeGoal(goal.$id)}>❌</button>
                </div>
            ))}
        </div>
    )
}

export default ShowTodo