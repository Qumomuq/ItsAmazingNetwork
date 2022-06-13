import React, {FC} from 'react';
import PostItem from "./PostItem";
import {License} from "../../../types/licenses";

interface PostListProps {
    posts: License[],
    title: string,
    remove: any
}

const PostList: FC<PostListProps> = ({posts,title, remove}) => {
    return (
        <div >
            {posts.map(( post, index ) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.license_id}/>
            )}
        </div>
    );
};

export default PostList;
