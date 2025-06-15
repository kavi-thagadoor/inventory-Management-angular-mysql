export interface User{
  username: string;
  password: string;
}

export enum UserAccess {
    ADMIN = 1,
    Staff = 2
};

export enum Status {
  Success = 1,
  Failed = 2,
  Pending = 3,
  InProgress = 4,
  Cancelled = 5,
  Completed = 6,
  DataRequired = 7,
  AccessDenied = 8,
  NotFound = 9,
  Invalid = 10,
  Error = 11,
  Unauthorized = 12,
  BadRequest = 13
}


export interface secureAction {
    Encrypt: 1,
    Decrypt: 2
};

export interface Product {
  id: number,
  name: string,
  product_code: string,
  quantity: number
  price: number,
  description:string,
  created_by:number,
  updated_by:number
}

export interface UserResponse {
id: number,
username:string,
userType: number,
created_at:Date,
updated_at:Date
}
