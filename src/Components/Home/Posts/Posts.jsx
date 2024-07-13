import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                Posts.map(post => <div key={post.id} className=" bg-[#F1F1F1] my-2 lg:m-4 p-3  lg:w-[680px] lg:p-5 rounded-lg" > 
                <h1 className="text-xl lg:text-3xl font-bold mb-2" >{post.title}</h1>
                {
                post.body.length > 160
                ? <p>{post.body.slice(0,160)}... <Link className="text-blue-600 hover:underline " >See more</Link> </p>
                :<p className="text-sm lg:text-[16px]">{post.body} </p>
                }
                <hr />
                <div className="flex mt-3 items-center justify-between">
                    <div className="flex gap-1 lg:gap-2 text-[9px] lg:text-[15px]">
                        <button className=" text-blue-400 border-1  px-2 bg-white rounded-full" >#photography</button>
                        <button className=" text-blue-400 border-1  px-2 bg-white rounded-full" >#astronomy</button>
                        <button className=" text-blue-400 border-1  px-2 bg-white rounded-full" >#astrophotography</button>
                        <button className=" text-blue-400 border-1  px-2 bg-white rounded-full" >+</button>
                    </div>
                    <div>
                        <button className="font-semibold text-[12px] lg:text-lg ml-4 hover:underline  text-blue-600" >Read more</button>
                    </div>
                </div>
                </div>)
            }
        </div>
    );
};

export default Posts;