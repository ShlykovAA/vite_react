export interface ILoadable<T, Y> {
  loading: boolean;
  data: null | T;
  error: null | Y;
}

export interface IStore {
  profile: ILoadable<any,any>;
  userList: ILoadable<any,any>;
  user: ILoadable<any,any>;
}