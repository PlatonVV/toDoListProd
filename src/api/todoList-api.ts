import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f99f2a4e-ec6a-4556-b10d-38019e7780d8'
    }
});

export const todoListAPI = {
    getTodoList() {
        return instance.get<ToDoListType[]>('todo-lists')
    },
    postTodoList(title: string) {
        return instance.post<ResponseType<{item: ToDoListType}>>('todo-lists', {title})
    },
    deleteTodoList(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
            .then(res => res.data);
    },
    putTodoList(todoId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todoId}`, {todoId, title})
            .then(res => res.data);
    }
};

type ResponseType<T = {}> = {
    data: T
    messages: string[]
    resultCode: number
}

type ToDoListType = {
    addedDate: Date
    id: string
    order: number
    title: string
}