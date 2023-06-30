import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../store-HomeWork/hooks";
import { addComment, useCommentsSelector } from "../../store-HomeWork/slice/comments";
import uniqid from "uniqid";
import styles from "./postContainer.module.scss"

interface IPostContainer {
    item: any;
}

export const PostContainer = ({ item }: IPostContainer) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState("")
    const commentsList = useCommentsSelector()

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onAdd = () => {
        dispatch(addComment({ postId: item.id, postComments: value, id: uniqid() }));
        setValue("");
    }

    return (
        <div className={styles["container"]} key={item.id}>
            <h3>{item.title}</h3>
            <div className={styles["tags"]}>
                {item.tags.map((tag: string)=> {
                    return <h4 className={styles["tag_h4"]} key={uniqid()}>{tag}</h4>
                })}
            </div>
            <p>{item.body}</p>
            <input type="text" value={value} onChange={onChange} />
            <button onClick={onAdd}>Add comment</button>
            { commentsList.map((comment) => {
                if (comment.postId === item.id) {
                    return <p key={uniqid()}>{comment.postComments}</p>
                }
            })}
        </div>
    )
}