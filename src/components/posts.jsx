import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Posts() {
    const [user, setUser] = useState('')
    const [posts, setPosts] = useState([])

    const  {id} = useParams()
    const separatedId = id.slice(id.indexOf(':')+1)
    useEffect(()=> {
        async function getUserInfo() {
            const {data: user} = await axios('https://jsonplaceholder.typicode.com/users/'+separatedId)
            setUser(user)
        }
        async function getPostsById() {
            const {data: posts} = await axios('https://jsonplaceholder.typicode.com/posts?userId='+separatedId)
            console.log(posts)
            setPosts(posts)
        }
        getUserInfo()
        getPostsById()
    },[])
    return (
        <>
            <div className="posts-container">
                <div className="title-zone">

                <h1>{user.name}</h1>
                </div>
                <table>
                <thead className="header">
                    <tr>
                        <th>postId</th>
                        <th>userId</th>
                        <th>Title</th>
                        <th>content</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((posts,key)=>(
                        <tr key={key}>
                            <td>{posts.id}</td>
                            <td>{posts.userId}</td>
                            <td>{posts.title}</td>
                            <td>{posts.body}</td>
                         </tr>
                    ))}
                    
                  
                </tbody>
                </table>
                <div className="all-posts-button-container">
                    <Link to='al'>
                        <button className="all-posts-button" >see all posts</button>
                    </Link>
                </div>
            </div>
        </>
    )

}