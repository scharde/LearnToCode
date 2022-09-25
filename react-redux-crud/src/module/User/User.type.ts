export interface IUser {
  id: number;
  name: string;
  email: string;
}

export enum ApiStatus {
  "loading",
  "ideal",
  "success",
  "error",
}

export interface IUserState {
  list: IUser[];
  listStatus: ApiStatus;
  createUserFormStatus: ApiStatus;
  updateUserFormStatus: ApiStatus;
}

export interface IUserForm {
  name: string;
  email: string;
}

export interface IUpdateUserActionProps {
  id: number;
  data: IUserForm;
}
