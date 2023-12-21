

import {storageService} from './async-storage.service.js'
import {utilService} from './util.service.js'
import { asyncStorageService } from './async-storage.service.js'

const STORAGE_KEY = 'todoDB'

export const todoService = {
    query,
    getById,
    save,
    remove,
    getDefaultFilter,
    getEmptyTodo
}


function query(filterBy) {
    return asyncStorageService.query(STORAGE_KEY)
    .then(todos => {
        if (filterBy.txt) {
            const regExp = new RegExp(filterBy.txt, 'i')
            todos = todos.filter(todo => regExp.test(todo.subject))
        }    
        return todos
    })
}
function getById(todoId) {
    return storageService.get(STORAGE_KEY, todoId)
}
function remove(todoId) {
    return storageService.remove(STORAGE_KEY, todoId)
}
function save(todo) {
    if (todo._id) {
        return storageService.put(STORAGE_KEY, todo)
    } else {
        return storageService.post(STORAGE_KEY, todo)
    }
}

function getEmptyTodo() {
    return { 
        id:utilService.makeId(),
        subject,
        createdAt,
        isDone,
        owner:{
            id,
            fullname
        } 
    }
}


function getDefaultFilter() {
    return { txt: '' ,status:''}
}