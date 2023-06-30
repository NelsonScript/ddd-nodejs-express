declare class UserEntity {
    private _id;
    private _name;
    private _email;
    constructor(id: string, name: string, email: string);
    get id(): string;
    get name(): string;
    get email(): string;
}
export default UserEntity;
