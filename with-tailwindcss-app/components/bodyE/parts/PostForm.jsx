import React, {useState} from 'react';

import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'NewLicense', body: 'Лицензия не активирована'})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: 'NewLicense', body: 'Лицензия не активирована'})
    }

    return (
        <form>
            <MyButton onClick={addNewPost}>Добавить лицензию</MyButton>
        </form>
    );
};



export default PostForm;