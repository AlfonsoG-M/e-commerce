import Header from "./Header"
import { useNavigate } from "react-router-dom";
import { menu } from "../../../Router/navigation"; 
import { useWindowSize } from "../../../utils/useWindowSize";
import { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { logout } from "../../../store/auth/authSlice";


const HeaderContainer = () => {
  const {user, isLogged} = useSelector((store)=>store.auth)
  const size = useWindowSize(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userInitials, setUserInitiales] = useState("")
  
  useEffect(() => {
    if (isLogged) {
      setUserInitiales(`${user.name.charAt(0)} ${user.lastName.charAt(0)}`);
    } else {
      setUserInitiales('');
    }
  }, [isLogged, user]);
   
  return (
    <Header userInitials={userInitials} logout={logout} user={user} isLogged={isLogged} size={size} navigate={navigate} menu={menu} open={open} handleOpen={handleOpen} handleClose={handleClose}/>
  )
}

export default HeaderContainer