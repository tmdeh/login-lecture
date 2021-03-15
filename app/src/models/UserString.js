"use strict"

class UserString {
    static #users = {
        id:["tmdeh"],
        psword: ["1234","3216"],
        name: ["유승도 "]
    };
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}
module.exports = UserString;