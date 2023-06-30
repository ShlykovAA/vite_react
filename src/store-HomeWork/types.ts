export interface IStore {
    posts: IPosts<any, any>[];
    comments: IComments[];
}

export interface IPosts<A, B> {
    data: null | A;
    loading: boolean;
    error: null | B;
}

export interface IComments {
    postId: number;
    postComments: string;
    id: string;
}