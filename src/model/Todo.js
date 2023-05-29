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
 * @param {string} auth
 * @param {string} baseUrl
 * @param {Todo[]} todos
 * @param {string} new_title
 * @param {string} collectionID
 * @returns {Promise<Todo[]>}
 * */
export async function addTodo(auth, baseUrl, todos, new_title, collectionID) {

    let response = await fetch(`${baseUrl}/api/v1/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        body: JSON.stringify({
            title: new_title,
            body: "",
            completed: false,
            due_date: "",
            attachments: []
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();
    let resp2 = await fetch(`${baseUrl}/api/v1/collections/todos/${collectionID}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        body: JSON.stringify({
            todo_id: data.id
        })
    })


    return [...todos, new Todo(
        data.id,
        data.data.title,
        data.data.body,
        data.data.completed,
        "",
        data.data.due_date,
        data.data.attachments
    )];
}

/**
 * @param {string} auth
 * @param {string} baseUrl
 * @param {Todo[]} todos
 * @param {Todo} todo
 * @returns {Promise<Todo[]>}
 * */
export async function updateTodo(auth, baseUrl, todos, todo) {
    console.log("todo update", todo)
    const response = await fetch(`${baseUrl}/api/v1/todos/${todo.id}`, {
        "method": "PUT",
        "headers": {
          "Content-Type": "application/json",
          Authorization: `${auth}`,
        },
        "body": JSON.stringify({
            "title": todo.title,
            "body": todo.body,
            completed: todo.completed,
            "due_date": todo.duedate,
            "attachments": todo.attachments
          }),
    });
      console.log("updated todo", await response.json());


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
