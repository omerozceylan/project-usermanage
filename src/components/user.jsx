import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

export default function User(){
    const {id} = useParams()

    useEffect(()=> {
        const separatedId = id.slice(id.indexOf(':')+1)
        console.log(separatedId)
        async function getUser(){
            const {data: user} = await axios('https://jsonplaceholder.typicode.com/users/'+separatedId)
            console.log(user)
        }
        getUser()
    },[])

    return (
        <>
            <h1>burası user alanı {id}</h1>
        </>
    )
}