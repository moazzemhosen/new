import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext.jsx";

export const Login = () => {

    const { handleAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <div>
            <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
            <button onClick={()=>{
                console.log("yes")
                handleAuth(true);
                navigate(-2, {replace:true})
            }}>Submit</button>
        </div>
    );
};