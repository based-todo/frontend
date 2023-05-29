export class Collection {
    /**
   * @param {string} id
   * @param {string} title
   * @param {string[]} todos
   */
    constructor(id, title, todos) {
        this.id = id;
        this.title = title;
        this.todos = todos;
    }
}


/**
 * @param {string} auth
 * @param {string} baseUrl
 * @param {Collection[]} collections
 * @param {Collection} collection
 */
export async function deleteCollection(auth, baseUrl, collections, collection) {

    let response = await fetch(`${baseUrl}/api/v1/collections/${collection.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return collections.filter((item) => item.id !== collection.id);
}

/**
 * @param {string} auth
 * @param {string} baseUrl
 * @param {Collection[]} collections
 * @param {string} new_title
 * @returns {Promise<Collection[]>}
 * */
export async function addCollection(auth, baseUrl, collections, new_title) {
    let response = await fetch(`${baseUrl}/api/v1/collections`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
        },
        body: JSON.stringify({
            name: new_title,
            description: ""
        })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();
    console.log(data);
    const new_collection = new Collection(data.id, new_title, []);
    return [...collections, new_collection];
}