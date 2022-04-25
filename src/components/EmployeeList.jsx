import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
// import axios from 'axios'

export const EmployeeList = () => {


     const [users, setUsers] = useState([])

     useEffect(() => {
          fetch("http://localhost:8080/employee")
               .then(response => response.json())
               .then(data =>
                    setUsers(data))

     }, []);




     return (<div>

          {users.map((user) => (

                <div className="list_container" key={user.id}>
                  <Link to={`/employee/${user.id}`}>    
                    {/* On clicking this card anywhere, user goes to user details */}
                    <div className="employee_card">
                         <img className="employee_image" src={user.image} />
                         <span className="employee_name">{user.employee_name}</span>
                         <span className="employee_title">{user.title}</span>
                    </div>
               </Link>
               </div>
          ))}
     </div>
     )
}

