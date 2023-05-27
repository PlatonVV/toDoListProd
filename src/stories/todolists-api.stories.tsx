import React, {useEffect, useState} from 'react';
import {todoListAPI} from '../api/todoList-api';

export default {
    title: 'ToDo-API'
};



export const GetTodolists = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        todoListAPI.getTodoList()
            .then((res) => {
                setState(res.data);
            });
    }, []);
    return <div>{JSON.stringify(state)}</div>;
};
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const title = 'postRequest';
        todoListAPI.postTodoList(title)
            .then((res) => {
                setState(res.data);
            });
    }, []);

    return <div>{JSON.stringify(state)}</div>;
};
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const todolistId = 'c8514d50-f487-425f-8376-a40f4f60587d';
        todoListAPI.deleteTodoList(todolistId)
            .then((res) => {
                setState(res.data);
            });
    }, []);

    return <div>{JSON.stringify(state)}</div>;
};
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        const todoId = 'c8514d50-f487-425f-8376-a40f4f60587d';
        const title = 'updateRequest';
        todoListAPI.putTodoList(todoId, title)
            .then((res) => {
                setState(res.data);
            });
    }, []);

    return <div>{JSON.stringify(state)}</div>;
};
