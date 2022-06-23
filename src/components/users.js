import React from 'react'

function Users(props) {
  
  return (
    <div>
        <h2>Users List from the API</h2>
        {Object.values(props.users).map((user)=>{           
            return <div key={user.id}>
                    <div>                       
                        <p> UserName: {user.username} EMAIL: {user.email} AFFILIATION: {user.affiliation} </p>
                    </div>
                </div>
        })}

    </div>
  )
}

export default Users