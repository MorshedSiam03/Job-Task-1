import { useEffect, useState } from "react";

const Posts = () => {
    const [Posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPosts(data);
        })
    },[]);
    console.log(Posts);
    return (
        <div>
            {
                Posts.map(post => <div key={post.id} className=" bg-[#F1F1F1] m-4 p-5 rounded-lg" > 
                <h1 className=" text-3xl font-semibold" >{post.title}</h1>
                <p>{post.body}</p>
                <hr />
                <div className="flex mt-3 items-center justify-between">
                    <div className="flex gap-2">
                        <button className=" text-blue-400 border-1  px-2 bg-white rounded-full" >#photography</button>
                        <button className=" text-blue-400 border-1  px-2 bg-white rounded-full" >#astronomy</button>
                        <button className=" text-blue-400 border-1  px-2 bg-white rounded-full" >#astrophotography</button>
                        <button className=" text-blue-400 border-1  px-2 bg-white rounded-full" >+</button>
                    </div>
                    <div>
                    <button className="font-semibold text-blue-600" >Read More</button>
                    </div>
                </div>
                </div>)
            }
        </div>
    );
};

export default Posts;