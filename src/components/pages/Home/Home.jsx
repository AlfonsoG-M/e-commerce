import { Typography, Button, Grid} from "@mui/material";
const Home = () => {
  return (
    <div>
      <Grid container bgcolor={"primary.casa"} sx={{}}>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" color="primary.third">
            NEW PRODUCT
          </Typography>
          <Typography variant="h2" color="primary.fourth">
            XX99 Mark II Headphones
          </Typography>
          <Typography paragraph={true} color="primary.third">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </Typography>
          <Button variant="contained"sx={{borderRadius:"0px"}}>SEE PRODUCT</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{width: "100%"}} src="https://res.cloudinary.com/dkwjizhdg/image/upload/v1682512392/e-commerce/headsphones_fqjywk.jpg" alt="headphones" />
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Home;
