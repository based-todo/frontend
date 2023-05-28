export class Todo {
    /**
   * @param {string} id
   * @param {string} title
   * @param {string} body
   * @param {boolean} completed
   * @param {string} collectionId
   * @param {string} duedate
   */
    constructor(id, title, body, completed, collectionId, duedate) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.completed = completed;
        this.collectionId = collectionId;
        this.duedate = duedate;
    }
}