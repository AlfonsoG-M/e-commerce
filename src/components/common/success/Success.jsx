import { Box, Modal } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import './success.css'
import { ButtonCustom } from "../../Custom/CustomComponents";

const Success = ({ open, handleClose, navigate }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
            position: "absolute",
            top: "0%",
            right: "50%",
            transform: "translate(50%, 30%)",
            width: { sm: "540px", xs: "327px" },
            height: { sm: "581px", xs: "600px" },
            bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "8px",
          }}>
        <VerifiedIcon sx={{ width: "144px", height: "144px", color: "primary.main"}}/>
        <h4 className="congratsMSG" >Congratulations, your account has been successfully created</h4>
        <ButtonCustom sx={{width:"80%", padding: "20px", margin: "auto"}} onClick={() => {
              navigate("/");
            }}> Continue shopping</ButtonCustom>
      </Box>
    </Modal>
  );
};

export default Success;
