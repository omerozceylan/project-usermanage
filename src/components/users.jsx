import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"


export default function Users(){
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        async function getUsers(){
            const {data: users} = await axios('https://jsonplaceholder.typicode.com/users')
            setIsLoading(false)
            setUsers(users)
        }
        getUsers()

    },[])
 
    return (
        <>
            {isLoading && <h3>loading..</h3>}
            {users.map((users,key)=>(
                <Link key={key} to={`/user/id:${users.id}`}>
                    <button>{users.id} - {users.name}</button>
                </Link>

            )
            )}

            <ul>
                

                
            </ul>
            
        </>
    )
}