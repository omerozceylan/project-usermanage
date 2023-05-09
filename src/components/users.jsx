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
            console.log(users)
        }
        getUsers()

    },[])
 
    return (
        <>
        {isLoading && <h3>loading..</h3>}
           <table>
                <thead>
                    <tr>
                    <th>username</th>
                    <th>posts</th>
                    <th>comments</th>
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
                           
                            <td>see</td>
                            <td>30</td>
                        </tr>
                    
               
                    //    <Link key={key} to={`/user/id:${users.id}`}>
                    //         <button>{users.id} - {users.name}</button>
                    //     </Link>

                    )
                    )}
                   
                   
                   
                   
                    {/* <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>30</td>
                    </tr>
                    <tr>
                    <td>Jane</td>
                    <td>Smith</td>
                    <td>25</td>
                    </tr>
                    <tr>
                    <td>Bob</td>
                    <td>Johnson</td>
                    <td>45</td>
                    </tr> */}
                </tbody>
            </table>
            
           

            <ul>
                

                
            </ul>
            
        </>
    )
}