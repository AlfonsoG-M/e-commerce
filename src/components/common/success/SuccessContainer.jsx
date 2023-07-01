import { useNavigate } from "react-router-dom"
import Success from "./Success"

const SuccessContainer = ({open, handleClose}) => {
    const navigate = useNavigate()
  return (
    <Success open={open} handleClose={handleClose} navigate={navigate} />
  )
}

export default SuccessContainer