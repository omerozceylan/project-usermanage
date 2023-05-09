import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Comments() {
    const {id} = useParams()
    const separatedId = id.slice(id.indexOf(':')+1)
    useEffect(()=>{
        async function getCommentsById(){
            const {data: comments} = await axios('https://jsonplaceholder.typicode.com/comments?userId='+separatedId)
            console.log(comments)
        }
        getCommentsById()
    },[])

    return (
        <>
            <h1>burası comments</h1>
        </>
    )

}