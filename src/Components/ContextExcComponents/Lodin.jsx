import Login from "./Login"
import Profile from "./Profile";
import { useState } from "react"
import { LoginContext } from "./Contexts/LoginContext";


function Lodin() {

    const [showProfile, setShowProfile] = useState(false);
    const [username, setUsername] = useState("");


  return (
    <>
    <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
    { showProfile ? <Profile/> : <Login/> }
    </LoginContext.Provider>
    </>
  )
}

export default Lodin