import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Posts() {
    const  {id} = useParams()
    const separatedId = id.slice(id.indexOf(':')+1)
    useEffect(()=> {
        async function getPostsById() {
            const {data: posts} = await axios('https://jsonplaceholder.typicode.com/posts?userId='+separatedId)
            console.log(posts)
        }
        getPostsById()
    },[])
    return (
        
        <>
            <h1>burası posts {id}</h1>
        </>
    )

}