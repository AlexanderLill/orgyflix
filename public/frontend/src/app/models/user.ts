export class User {
    public username: string = '';
    public password: string = '';
    public firstname: string = '';
    public lastname: string = '';

    static fromObject(object: Object): User {
        let instance = Object.create(User.prototype);
        return Object.assign(instance, object);
    }
}
