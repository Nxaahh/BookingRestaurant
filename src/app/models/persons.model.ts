export enum RoleType{
  USER = "U",
  ADMIN = "A"
}
export class Person {
  uid:String;
  nombre:String;
  apellido:String;
  email:String;
  role:RoleType;
  created_at:String;

  constructor(uid:String, nombre:String, apellido:String, email:String, role:RoleType, created_at:String) {
    this.uid = uid;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.role = role;
    this.created_at = created_at;

  }

}

