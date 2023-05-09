import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

export default function User(){
    const {id} = useParams()
    useEffect(()=> {
        
    })

    return (
        <>
            <h1>burası user alanı {id}</h1>
        </>
    )
}