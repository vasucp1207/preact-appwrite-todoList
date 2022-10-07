import { signal } from "@preact/signals";
import { database } from '../appwrite/appwrite'
import { useEffect } from 'preact/hooks';

const goals = signal([])
const completeGoal = signal('true')

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

    const doneGoal = (id) => {
        const promise = database.updateDocument("633f403dcda63e88b76c", "633f404ac991d157efa9", id, {
            done: 'true'
        })
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

    const undoGoal = (id) => {
        const promise = database.updateDocument("633f403dcda63e88b76c", "633f404ac991d157efa9", id, {
            done: 'false'
        })
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
                    {goal.done == 'true'? <strike class='strike'><p class='goal'>{goal.content}</p></strike>: <p class='goal'>{goal.content}</p>}
                    <div class='btn-cont'>
                        {goal.done == 'true' && <button class='goal-btn uncheck' onClick={() => undoGoal(goal.$id)}>⊘</button>}
                        {goal.done == 'false' && <button class='goal-btn' onClick={() => doneGoal(goal.$id)}>✔️</button>}
                        <button class='goal-btn' onClick={() => removeGoal(goal.$id)}>❌</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowTodo