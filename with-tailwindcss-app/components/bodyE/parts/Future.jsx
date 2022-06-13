import React, {useEffect, useState} from 'react';
import PostList from "./PostList";
import PostForm from "./PostForm";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useActions} from "../../../hooks/useActions";


function Future() {

    const licenseData = useTypedSelector(state => state.licenses)
    const { getLicensesData } = useActions()

    useEffect(() => {
        getLicensesData()
    }, [])
    // const [title,setTitle]=useState( '')
    // const [bodyE,setBody]=useState('')

    // const addNewPost = () => {
    //      const newPost = {
    //          id:Date.now(),
    //          title:"NewLicense",
    //          bodyE:"Лицензия не активирована"
    //      }
    //     // create(newPost)
    //      setPosts([...posts, newPost])
    // }
    const createPost = (newPost) => {
      //  setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        //setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div>
            <header className="mx-20 bg-white shadow">
                <div className="flex justify-between max-w-7xl mx-auto py-8 px-3 sm:px-3 lg:px-8">
                    <h1 className=" text-3xl font-bold text-gray-900">Project</h1>
                    <div>
                        Общее количество лицензий:
                        <div className="text-2xl">{licenseData.licenses_data.length}</div>
                    </div>
                    <div>
                        <PostForm create={createPost}/>
                        {/*<MyButton onClick={addNewPost}>Добавить</MyButton>*/}
                    </div>
                </div>
            </header>
            <div className=" shadow mx-auto py-4 sm:px-6 lg:px-8 max-w-7xl ">
                {licenseData.licenses_data.length !== 0
                    ? <PostList remove={removePost} posts={licenseData.licenses_data}/>
                    : <div
                        className=" flex justify-center rounded-2xl  h-16 text-3xl bg-red-100 border-2 hover:bg-red-200">У
                        вас пока нет лицензий</div>
                }
            </div>
        </div>
    );
}

export default Future;

