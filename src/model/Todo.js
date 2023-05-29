export class Attachment {
    /**
     * @param {string} title
     * @param {string} url
     * */
    constructor(title, url){
        this.title = title;
        this.url = url;
    }
}

export class Todo {
    /**
   * @param {string} id
   * @param {string} title
   * @param {string} body
   * @param {boolean} completed
   * @param {string} collectionId
   * @param {Date} duedate
   * @param {Attachment[]} attachments
   */
    constructor(id, title, body, completed, collectionId, duedate, attachments) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.completed = completed;
        this.collectionId = collectionId;
        this.duedate = duedate;
        this.attachments = attachments;
    }
}

/**
 * @param {Todo[]} todos
 * @param {Todo} todo
 * @returns {Promise<Todo[]>}
 * */
export async function addTodo(todos, todo) {
    // TODO (API)


    return [...todos, todo];
}

/**
 * @param {Todo[]} todos
 * @param {Todo} todo
 * @returns {Promise<Todo[]>}
 * */
export async function updateTodo(todos, todo) {
    // TODO (API)


    return todos.map((item) => item.id === todo.id ? todo : item);
}

/**
 * @param {Todo[]} todos
 * @param {Todo} todo
 * @returns {Promise<Todo[]>}
 * */
export async function deleteTodoById(todos, todo) {
    // TODO (API)

    return todos.filter((item) => item.id !== todo.id);
}
