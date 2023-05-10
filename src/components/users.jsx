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
        <div className="user-list">
        {isLoading && <h3>loading..</h3>}
           <table>
                <thead className="header">
                    <tr>
                        <th>username</th>
                        <th>posts</th>
                    </tr>
                </thead>
                <tbody>
                

                   {users.map((users,key)=>(
                        <tr key={key}>
                           
                            <td >
                                <Link  to={`/user/id:${users.id}`}>
                                    {users.name}
                                </Link> 
                            </td>
                           
                            <td>
                                <Link to={`/Posts/id:${users.id}`}>
                                  see posts
                                </Link>
                            </td>
                          
                        </tr>
                    
            
                    )
                    )}
                
                </tbody>
            </table>
        </div>
    )
}