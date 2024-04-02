import React from "react";
import styles from './Profile.module.css'
import Post from "./Post"
import MPFormik from "./MPFormik"

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }
    return (
        <div>
            <h2 className={styles.headTracking}>Hello! i'm Anna</h2>

            <div className={styles.posts}>
                <div> {postsElements}
                </div>
                {/* < MPFormik /> */}
            </div>

        </div>

    )
}

export default MyPosts;