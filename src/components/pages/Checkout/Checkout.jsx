import {
  ButtonCustom,
  CssTextField,
  LinkGoBack,
} from "../../Custom/CustomComponents";
import { Grid, Box, Typography, RadioGroup } from "@mui/material";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "./checkout.css";
import { theme } from "../../../themeConfig";

const Checkout = ({
  shipping,
  vat,
  navigate,
  handleChange,
  handleSubmit,
  errors,
  values,
  cart,
  grandTotal,
  total,
  name,
  email,
  phone
}) => {
  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        backgroundColor: "primary.third",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "80%",
            md: "84%",
          },
        }}
        padding={"30px"}
      >
        <LinkGoBack onClick={() => navigate(-1)}>Go Back</LinkGoBack>
      </Box>

      <form className="formContainer" onSubmit={handleSubmit}>
        <Grid container gap={4}>
          <Grid
            item
            sx={{
              width: {
                xs: "100%",
                sm: "80%",
                md: "69%",
              },
            }}
            className="gridContainer"
          >
            <Typography
              variant="h1"
              color="secondary.third"
              sx={{
                textTransform: "uppercase",
                width: "100%",
                fontSize: "32px",
                fontFamily: "Manrope",
                fontWeight: "700",
                letterSpacing: "1.14286px",
              }}
            >
              CHECKOUT
            </Typography>

            <Typography
              variant="h6"
              color="primary.main"
              sx={{
                alignSelf: "flex-start",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              BILLING DETAILS
            </Typography>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    marginBottom: "9px",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "-0.214286px",
                  }}
                >
                  Name
                </Typography>
                <CssTextField
                  placeholder="Alexi Ward"
                  name="name"
                  onChange={handleChange}
                  error={errors.name ? true : false}
                  helperText={errors.name}
                  defaultValue={name}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  // marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    marginBottom: "9px",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "-0.214286px",
                  }}
                >
                  Email Address
                </Typography>
                <CssTextField
                  placeholder="alexei@mail.com"
                  name="email"
                  onChange={handleChange}
                  error={errors.email ? true : false}
                  helperText={errors.email}
                  defaultValue={email}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    marginBottom: "9px",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "-0.214286px",
                  }}
                  
                >
                  Phone Number
                </Typography>
                <CssTextField
                  placeholder="+1202-555-0136"
                  name="phone"
                  onChange={handleChange}
                  error={errors.phone ? true : false}
                  helperText={errors.phone}
                  defaultValue={phone}
                />
              </Grid>
            </Grid>

            <Typography
              variant="h6"
              color="primary.main"
              sx={{
                alignSelf: "flex-start",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              SHIPPING INFO
            </Typography>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    marginBottom: "9px",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "-0.214286px",
                  }}
                >
                  Address
                </Typography>
                <CssTextField
                  placeholder="1137 Wiliams Avenue"
                  name="address"
                  onChange={handleChange}
                  error={errors.address ? true : false}
                  helperText={errors.address}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    marginBottom: "9px",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "-0.214286px",
                  }}
                >
                  Zip Code
                </Typography>
                <CssTextField
                  placeholder="10001"
                  name="zipCode"
                  onChange={handleChange}
                  error={errors.zipCode ? true : false}
                  helperText={errors.zipCode}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    marginBottom: "9px",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "-0.214286px",
                  }}
                >
                  City
                </Typography>
                <CssTextField
                  placeholder="New York"
                  name="city"
                  onChange={handleChange}
                  error={errors.city ? true : false}
                  helperText={errors.city}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    marginBottom: "9px",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "-0.214286px",
                  }}
                >
                  Country
                </Typography>
                <CssTextField
                  placeholder="United States"
                  name="country"
                  onChange={handleChange}
                  error={errors.country ? true : false}
                  helperText={errors.country}
                />
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              color="primary.main"
              sx={{
                alignSelf: "flex-start",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              PAYMENT DETAILS
            </Typography>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    marginBottom: "9px",
                    fontFamily: "Manrope",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "-0.214286px",
                  }}
                >
                  Payment Method
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="paymentMethod"
                    error={errors.paymentMethod}
                    onChange={handleChange}
                    className="radioGroup"
                  >
                    <FormControlLabel
                      className="formControlLabelOption"
                      value="e-money"
                      control={<Radio />}
                      label="e-Money"
                    />
                    <FormControlLabel
                      className="formControlLabelOption"
                      value="cash"
                      control={<Radio />}
                      label="Cash"
                    />
                  </RadioGroup>
                  {errors.paymentMethod && (
                    <span className="errors">{errors.paymentMethod}</span>
                  )}
                </FormControl>
              </Grid>
              {values.paymentMethod === "e-money" && (
                <>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        marginBottom: "9px",
                        fontFamily: "Manrope",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "12px",
                        lineHeight: "16px",
                        letterSpacing: "-0.214286px",
                      }}
                    >
                      e-Money Number
                    </Typography>
                    <CssTextField
                      placeholder="238521993"
                      name="eMoneyNumber"
                      onChange={handleChange}
                      error={errors.eMoneyNumber ? true : false}
                      helperText={errors.eMoneyNumber}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      sx={{
                        marginBottom: "9px",
                        fontFamily: "Manrope",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "12px",
                        lineHeight: "16px",
                        letterSpacing: "-0.214286px",
                      }}
                    >
                      e-Money Pin
                    </Typography>
                    <CssTextField
                      placeholder="6891"
                      name="eMoneyPin"
                      onChange={handleChange}
                      error={errors.eMoneyPin ? true : false}
                      helperText={errors.eMoneyPin}
                    />
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
          {/* ACA EMPIEZA EL CART */}
          <Grid
            item
            sx={{
              width: {
                xs: "100%",
                sm: "80%",
                md: "350px",
              },
            }}
            className="gridContainer"
            height={"100%"}
          >
            <>
              <Typography
                variant="h5"
                sx={{
                  mixBlendMode: "normal",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
                mb={"20px"}
              >
                summary
              </Typography>
              <Box
                sx={{
                  scrollbarWidth: "1px",
                  scrollbarColor: "gray gray",
                  "&::-webkit-scrollbar": {
                    width: "1px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "gray",
                  },
                }}
              >
                {cart.map((e) => (
                  <Box
                    key={e.id}
                    sx={{
                      display: "flex",
                      marginBottom: "24px",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        marginBottom: "24px",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={e.image}
                        alt="product image"
                        className="productImg"
                      />
                      <Box ml={"15px"}>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            fontSize: "15px",
                            lineHeight: "25px",
                          }}
                        >
                          {e.name.split(" ")[0]}
                        </Typography>
                        <Typography
                          sx={{
                            mixBlendMode: "normal",
                            opacity: "0.5",
                            fontWeight: "700",
                            fontSize: "14px",
                            lineHeight: "25px",
                          }}
                        >{`$${e.unit_price}`}</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          mixBlendMode: "normal",
                          opacity: "0.5",
                          fontWeight: "700",
                          fontSize: "14px",
                          lineHeight: "25px",
                        }}
                      >{`x${e.quantity}`}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                }}
              >
                <Typography
                  sx={{
                    mixBlendMode: "normal",
                    opacity: "0.5",
                    textTransform: "uppercase",
                    fontWeight: "500",
                  }}
                >
                  total
                </Typography>
                <Typography
                  sx={{ fontWeight: "700" }}
                >{`$${total}`}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                }}
              >
                <Typography
                  sx={{
                    mixBlendMode: "normal",
                    opacity: "0.5",
                    textTransform: "uppercase",
                    fontWeight: "500",
                  }}
                >
                  Shipping
                </Typography>
                <Typography
                  sx={{ fontWeight: "700" }}
                >{`$${shipping}`}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                }}
              >
                <Typography
                  sx={{
                    mixBlendMode: "normal",
                    opacity: "0.5",
                    textTransform: "uppercase",
                    fontWeight: "500",
                  }}
                >
                  vat(included)
                </Typography>
                <Typography sx={{ fontWeight: "700" }}>{`$${vat.toFixed(
                  2
                )}`}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                }}
              >
                <Typography
                  sx={{
                    mixBlendMode: "normal",
                    opacity: "0.5",
                    textTransform: "uppercase",
                    fontWeight: "500",
                  }}
                >
                  grand total
                </Typography>
                <Typography
                  sx={{ fontWeight: "700" }}
                  color={theme.palette.primary.main}
                >{`$${grandTotal.toFixed(2)}`}</Typography>
              </Box>
              <ButtonCustom type="submit" sx={{ width: "100%" }}>
                Continue & Pay{" "}
              </ButtonCustom>
            </>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default Checkout;
