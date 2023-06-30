class UserEntity{
  private _id: string;
  private _name!: string;
  private _email!: string;

  constructor(id: string, name: string, email: string){
      this._id = id;      
  }

  get id(){
    return this._id;
  }

  get name(){
    return this._name;
  }

  get email(){
    return this._email;
  }
}

export default UserEntity;