// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v5.29.3
// source: user.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "user";

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  avatar: string;
  addresses: Address[];
}

/** CreateUser */
export interface CreateUserRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
}

export interface CreateUserResponse {
  status: number;
  error: string[];
  id: string;
}

/** FindOne */
export interface FindOneRequest {
  id: string;
}

export interface FindOneResponse {
  status: number;
  error: string[];
  data: UserData | undefined;
}

/** FindAll */
export interface FindAllRequest {
  page: number;
  limit: number;
}

export interface FindAllResponse {
  status: number;
  error: string[];
  data: UserData[];
  total: number;
}

/** Update user */
export interface UpdateUserRequest {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
}

export interface UpdateUserResponse {
  status: number;
  error: string[];
}

/** Delete user */
export interface DeleteUserRequest {
  id: string;
}

export interface DeleteUserResponse {
  status: number;
  error: string[];
}

export const USER_PACKAGE_NAME = "user";

export interface UserServiceClient {
  createUser(request: CreateUserRequest): Observable<CreateUserResponse>;

  findOne(request: FindOneRequest): Observable<FindOneResponse>;

  findAll(request: Observable<FindAllRequest>): Observable<FindAllResponse>;

  updateUser(request: UpdateUserRequest): Observable<UpdateUserResponse>;

  deleteUser(request: DeleteUserRequest): Observable<DeleteUserResponse>;
}

export interface UserServiceController {
  createUser(
    request: CreateUserRequest,
  ): Promise<CreateUserResponse> | Observable<CreateUserResponse> | CreateUserResponse;

  findOne(request: FindOneRequest): Promise<FindOneResponse> | Observable<FindOneResponse> | FindOneResponse;

  findAll(request: Observable<FindAllRequest>): Observable<FindAllResponse>;

  updateUser(
    request: UpdateUserRequest,
  ): Promise<UpdateUserResponse> | Observable<UpdateUserResponse> | UpdateUserResponse;

  deleteUser(
    request: DeleteUserRequest,
  ): Promise<DeleteUserResponse> | Observable<DeleteUserResponse> | DeleteUserResponse;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createUser", "findOne", "updateUser", "deleteUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = ["findAll"];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
