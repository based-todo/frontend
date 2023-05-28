export class User {
    /**
   * @param {string} id
   * @param {string} uname
   * @param {string} email
   * @param {string} passhash
   */
    constructor(id, uname ,email, passhash) {
        this.id = id;
        this.uname = uname;
        this.email = email;
        this.passahsh = passhash;
    }
}