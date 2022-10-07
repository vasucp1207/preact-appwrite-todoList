import { signal } from "@preact/signals";
import { database } from '../appwrite/appwrite'
import { v4 as uuid } from 'uuid';
import { useEffect } from 'preact/hooks';

const goals = signal([])

function ShowTodo(){

    useEffect(() => {
        const getGoals = 
    }, [])

    return(
        <div>

        </div>
    )
}