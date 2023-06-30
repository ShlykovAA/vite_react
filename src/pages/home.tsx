import { useEffect, useState } from "react";
import { useAppDispatch } from "../store-HomeWork/hooks";
import { fetchPosts, usePostsSelector } from "../store-HomeWork/slice/posts";
import { PostContainer } from "../components/postContainer";

export const Home = () => {
    const dispatch = useAppDispatch();
    const postsData = usePostsSelector();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    return (
        <div>
            <p>Posts</p>
            { postsData.data !== null ? postsData.data.posts.map((item: any)=> {
                return <PostContainer item={item} key={item.id}/>
            }) : null}
        </div>
    )
}