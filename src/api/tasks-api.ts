import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f99f2a4e-ec6a-4556-b10d-38019e7780d8z'
    }
});



export const tasksAPI = {
    getTasks(toDoId: string) {
        return instance.get(`${toDoId}/tasks`)
    },
    postTask(toDoId: string, title: string){
        return instance.post(`${toDoId}/tasks`, {title})
    },
    deleteTask(toDoId: string, taskId: string) {
        return instance.delete(`${toDoId}/tasks/${taskId}`)
    },
    updateTask(toDoId: string, taskId: string, title: string) {
        return instance.put(`${toDoId}/tasks/${taskId}`, {title})
    },
};


