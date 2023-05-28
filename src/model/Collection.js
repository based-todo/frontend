export class Collection {
    /**
   * @param {string} id
   * @param {string} title
   */
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}


/**
 * @param {Collection[]} collections
 * @param {Collection} collection
 */
export async function deleteCollection(collections, collection) {

    // TODO (API)
    
    return collections.filter((item) => item.id !== collection.id);
}

/**
 * @param {Collection[]} collections
 * @param {string} new_title
 * @returns {Promise<Collection[]>}
 * */
export async function addCollection(collections, new_title) {
        // TODO (API)
    
        const new_collection = new Collection(collections.length.toString(), new_title);
        return [...collections, new_collection];
}