import { useEffect } from 'react'
function ProfilePage({user}) {
  return (
    <div>
      <h1>
        {user.name} Profile 
      </h1>
    </div>
  )
}

export default ProfilePage