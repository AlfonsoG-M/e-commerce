import {
  Grid,
  OutlinedInput,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import styles from "./Register.module.css";
import { Box } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  ButtonCustom,
  CssTextField,
  CssTextFieldPassword,
} from "../../Custom/CustomComponents";
import { LinkGoBack } from "../../Custom/CustomComponents";

const Register = ({
  handleChange,
  handleSubmit,
  errors,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  navigate,
  handleUser,
}) => {
  return (
    <Box
      sx={{ backgroundColor: "primary.third" }}
      className={styles.registerContainer}
    >
      <LinkGoBack onClick={()=>navigate(-1)} style={{padding:'0 0 4rem 0'}}>Go Back</LinkGoBack>
      <Grid
        container
        component="form"
        onSubmit={handleSubmit}
        rowSpacing={2}
        className={styles.gridContainer}
      >
        <Typography variant="h1" className={styles.register}>
          REGISTER
        </Typography>
        <Typography variant="h2" className={styles.h2}>
          USER DETAILS
        </Typography>
        <Grid item lg={12} className={styles.gridRow}>
          <Box className={styles.inputContainer}>
            <label htmlFor="name">Name</label>
            <CssTextField
              id="outlined-required 1"
              placeholder="Pepito"
              name="name"
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
            />
          </Box>
          <Box className={styles.inputContainer}>
            <label htmlFor="Last Name">Last Name</label>
            <CssTextField
              id="outlined-required"
              placeholder="Smith"
              name="lastName"
              onChange={handleChange}
              error={errors.lastName ? true : false}
              helperText={errors.lastName}
            />
          </Box>
        </Grid>
        <Grid item lg={6} md={12} className={styles.gridRow}>
          <Box className={styles.inputContainer}>
            <label htmlFor="phone">Phone Number</label>
            <CssTextField
              id="outlined-required 2"
              placeholder="333478633"
              onChange={handleChange}
              name="phone"
              error={errors.phone ? true : false}
              helperText={errors.phone}
              type="number"
            />
          </Box>
        </Grid>
        <Typography variant="h2" className={styles.h2}>
          LOGIN DETAILS
        </Typography>
        <Grid item lg={12} className={styles.gridRow}>
          <Box className={styles.inputContainer}>
            <label htmlFor="email">Email</label>
            <CssTextField
              id="outlined-required 3"
              placeholder="pepito@gmail.com"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Box>
        </Grid>
        <Grid
          item
          lg={12}
          className={styles.gridRow}
          sx={{ marginTop: "1rem" }}
        >
          <Box className={styles.inputContainer}>
            <label htmlFor="password">Password </label>
            <CssTextFieldPassword>
              <OutlinedInput
                id="outlined-adornment-password 1"
                type={showPassword ? "text" : "password"}
                placeholder="*****"
                name="password"
                onChange={handleChange}
                error={errors.password ? true : false}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff  color="primary"/> : <Visibility  color="primary"/>}
                    </IconButton>
                  </InputAdornment>
                }
                // helperText={errors.password}
                label="Password"
              />
              {errors.password && (
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#d32f2f",
                    marginLeft: "14px",
                  }}
                >
                  {errors.password}
                </span>
              )}
            </CssTextFieldPassword>
          </Box>

          <Box className={styles.inputContainer}>
            <label htmlFor="confirmPassword">Confirm Password </label>
            <CssTextFieldPassword>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                placeholder="*****"
                name="confirmPassword"
                onChange={handleChange}
                error={errors.confirmPassword ? true : false}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff  color="primary"/> : <Visibility  color="primary"/>}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {errors.confirmPassword && (
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#d32f2f",
                    marginLeft: "14px",
                  }}
                >
                  {errors.confirmPassword}
                </span>
              )}
            </CssTextFieldPassword>
          </Box>
        </Grid>
        <Grid item lg={12}>
          <ButtonCustom type="submit" className={styles.btn} onClick={handleUser}> 
            Send
          </ButtonCustom>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
