import React, {useEffect, useState} from 'react';
import {tasksAPI} from '../api/tasks-api';

export default {
    title: 'Tasks-API',
};


export const GetTasks = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const id = 'f8003642-3556-40c0-b14a-e9f800a96fa7'
        tasksAPI.getTasks(id)
            .then((res) => {
                setState(res.data.items);
            });
    }, []);
    return <div>{JSON.stringify(state)}</div>
};
export const CreateTask = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const title = 'ReduxTask'
        const toDoId = 'f8003642-3556-40c0-b14a-e9f800a96fa7'
        tasksAPI.postTask(toDoId, title)
            .then((res) => {
                setState(res.data);
            });
    }, []);
    return <div>{JSON.stringify(state)}</div>
};

export const DeleteTask = () => {
    const [state, setState] = useState<any> (null)
    useEffect(()=>{
        const toDoId = '1dfb5d2e-f67d-4b79-9c8e-b4f35d934f9c'
        const taskId = '1ee78c37-8827-4a3b-b937-da5eb36322cc'
        tasksAPI.deleteTask(toDoId, taskId)
            .then((res) => {
                setState(res.data);
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any> (null)
    useEffect(()=>{
        const toDoId = '1dfb5d2e-f67d-4b79-9c8e-b4f35d934f9c'
        const taskId = '3c073655-a241-4109-b906-d0c2766852d7'
        const title = 'updatedTask'
        tasksAPI.updateTask(toDoId, taskId, title)
            .then((res) => {
                setState(res.data);
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
