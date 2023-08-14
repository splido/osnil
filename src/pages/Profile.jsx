import { Link } from "react-router-dom"

function Profile({credentials}) {
  return (
    <div>
      <Link to="/form" className="btn btn-dark" style={{margin: '1rem'}}>Form</Link>
            <h1>{credentials.email}</h1>
    </div>
  )
}

export default Profile