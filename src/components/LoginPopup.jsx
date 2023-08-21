import NewLogo from '../assets/img/new-logo.png'
import facebook from '../assets/img/facebook.png'
import google from '../assets/img/google.png'
import twitter from '../assets/img/twitter.png'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginPopup({setIsAuthenticated,setCredentials,credentials}) {
    const navigate = useNavigate()
    // const [isAuthenticated, setIsAuthenticated]=useState(false)
   

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        let { email, password } = credentials
        try {
            let res = await fetch("https://appsalabackend-p20y.onrender.com/login", {
              method: "post",
              body: JSON.stringify({ email, password }),
              headers: {
                "Content-Type": "application/json"
              }
            });
            // console.log(res)
            // const token = await res.headers['x-api-token']
            // console.log(token)
            let result = await res.json();
           
            // console.log(result)
        
            if (result.status) {
              setIsAuthenticated(true);
              navigate(`/profile/${result.data.userId}`);
            } else {
              alert('wrong email or password');
            }
        
            // Reset the form fields after submission
            // setCredentials({
            //   email: '',
            //   password: '',
            // });
          } catch (error) {
            console.error("Error during fetch:", error);
            alert('An error occurred during the login process.');
          }
        };

  return (
    <div className="login-pop">
        <img src={NewLogo} alt="" />
        <p><span>Login</span> with</p>
        <div className="socials">
            <img src={facebook} alt="" />
            <img src={google} alt="" />
            <img src={twitter} alt="" />
        </div>
         
        <form onSubmit={handleSubmit}>
                    <div>
                        <label><strong>Email:</strong></label>
                        <input
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    <p><Link to={"/"}>  Don't have account ?</Link> <Link to={"/forgetpassword"}>Forget Password</Link></p>
                </form>
    </div>
  )
}

export default LoginPopup