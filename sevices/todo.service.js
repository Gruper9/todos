

import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
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

_createTodos()

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
    return asyncStorageService.get(STORAGE_KEY, todoId)
}
function remove(todoId) {
    return asyncStorageService.remove(STORAGE_KEY, todoId)
}
function save(todo) {
    if (todo._id) {
        return asyncStorageService.put(STORAGE_KEY, todo)
    } else {
        return asyncStorageService.post(STORAGE_KEY, todo)
    }
}

function getEmptyTodo() {
    return {
        id: utilService.makeId(),
        subject,
        createdAt,
        isDone,
        owner: {
            id,
            fullname
        }
    }
}


function getDefaultFilter() {
    return { txt: '', status: '' }
}


function _createTodos() {
    let todos = storageService.loadFromStorage(STORAGE_KEY)
    if (!todos || !todos.length) {
        todos = [
            {
                id: utilService.makeId(),
                subject: "Task 1",
                createdAt: new Date(),
                isDone: false,
                owner: {
                    id: "OwnerID1",
                    fullname: "John Doe"
                }
            },
            {
                id: utilService.makeId(),
                subject: "Task 2",
                createdAt: new Date(),
                isDone: true,
                owner: {
                    id: "OwnerID2",
                    fullname: "Jane Doe"
                }
            },
            {
                id: utilService.makeId(),
                subject: "Meeting Preparation",
                createdAt: new Date(),
                isDone: false,
                owner: {
                    id: "OwnerID3",
                    fullname: "Alice Johnson"
                }
            },
            {
                id: utilService.makeId(),
                subject: "Project Deadline",
                createdAt: new Date(),
                isDone: false,
                owner: {
                    id: "OwnerID4",
                    fullname: "Bob Smith"
                }
            },
            {
                id: utilService.makeId(),
                subject: "Grocery Shopping",
                createdAt: new Date(),
                isDone: true,
                owner: {
                    id: "OwnerID5",
                    fullname: "Charlie Brown"
                }
            }
        ]
        storageService.saveToStorage(STORAGE_KEY, todos)
    }
}