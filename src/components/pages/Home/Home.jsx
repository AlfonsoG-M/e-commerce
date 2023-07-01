import { Typography, Box, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router";
import ProductListContainer from "../ProductsList/ProductListContainer";
import Loading from "../../common/loading/Loading";
import { getAllProducts } from "../../../services/products";
import { useEffect, useState } from "react";
import MiniCategoryCardContainer from "../../common/miniCategoryCard/MiniCategoryCardContainer";
import imageSpeakerZx9 from "../../../assets/home/desktop/image-speaker-zx9.png";
import imageSpeakerZx7Desktop from "../../../assets/home/desktop/image-speaker-zx7.jpg";
import imageSpeakerZx7Tablet from "../../../assets/home/tablet/image-speaker-zx7.jpg";
import imageSpeakerZx7Mobile from "../../../assets/home/mobile/image-speaker-zx7.jpg";
import imageEarphonesYx1Desktop from "../../../assets/home/desktop/image-earphones-yx1.jpg";
import imageEarphonesYx1Tablet from "../../../assets/home/tablet/image-earphones-yx1.jpg";
import imageEarphonesYx1Mobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";
import imageBestGearDesktop from "../../../assets/shared/desktop/image-best-gear.jpg";
import imageBestGearTablet from "../../../assets/shared/tablet/image-best-gear.jpg";
import imageBestGearMobile from "../../../assets/shared/mobile/image-best-gear.jpg";
import { CardMedia } from "@mui/material";
import { ButtonCustom2, ButtonCustom4 } from "../../Custom/CustomComponents";
const Home = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [productsDeseados, setProductsDeseados] = useState([]);

  useEffect(() => {
    const data = getAllProducts();
    const categoriasDeseadas = ["headphones", "speakers", "earphones"];
    const objetosPorCategoria = {};
    const productosDeseados = [
      "XX99 Mark II Headphones",
      "ZX9 Speaker",
      "ZX7 Speaker",
      "YX1 Wireless Earphones",
    ];
    const objetosPorProDeseados = {};

    data.then((res) => {
      res.data.forEach((elemento) => {
        if (categoriasDeseadas.includes(elemento.category)) {
          if (!objetosPorCategoria[elemento.category]) {
            objetosPorCategoria[elemento.category] = elemento;
          }
        }
        if (productosDeseados.includes(elemento.name)) {
          if (!objetosPorProDeseados[elemento.name]) {
            objetosPorProDeseados[elemento.name] = elemento;
          }
        }
      });

      const objetosFiltrados = Object.values(objetosPorCategoria);
      setItems(objetosFiltrados);
      const objetosFiltradosProDeseados = Object.values(objetosPorProDeseados);
      setProductsDeseados(objetosFiltradosProDeseados);
    });
  }, []);

  if (!items) {
    return <Loading />;
  }

  return (
    <div style={{ paddingBottom: "30px" }}>
      {!categoryName && (
        <>
          <Box
            sx={{
              backgroundColor: "primary.second",
              backgroundImage: {
                xs: `url(${"https://res.cloudinary.com/dkwjizhdg/image/upload/v1682512392/e-commerce/headsphones_fqjywk.jpg"})`,
                lg: "none",
              },
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "60vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: { lg: "0 10rem", md: "0 2.5rem" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "73%", lg: "40%" },
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-start" },
                height: "60vh",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "80%",
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="primary.third"
                  className="subtitle1"
                  sx={{
                    mixBlendMode: "normal",
                    opacity: "0.5",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "19px",
                    letterSpacing: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  NEW PRODUCT
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "36px", sm: "51px" },
                    lineHeight: "58px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    margin: "24px 0px",
                  }}
                  color="primary.fourth"
                  className="h2Home"
                >
                  XX99 Mark II Headphones
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.third"
                  className="body2"
                  sx={{
                    mixBlendMode: "normal",
                    opacity: "0.75",
                    fontWeightt: "500",
                    fontSize: "15px",
                    lineHeight: "25px",
                    width: { xs: "100%", lg: "80%" },
                  }}
                >
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "0px", marginTop: "20px" }}
                  className="seeProduct"
                  onClick={() => {
                    navigate(`/product/${productsDeseados?.[2]?.id}`);
                  }}
                >
                  SEE PRODUCT
                </Button>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", lg: "block" },
                width: "60%",
              }}
            >
              <img
                style={{ height: "60vh", objectFit: "contain" }}
                src="https://res.cloudinary.com/dkwjizhdg/image/upload/v1682512392/e-commerce/headsphones_fqjywk.jpg"
                alt="headphones"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              padding: { lg: "0 10rem", md: "0 2.5rem", xs: "0 1.5rem" },
              marginTop: "120px",
              justifyContent: "space-between",
            }}
          >
            <MiniCategoryCardContainer
              images={items?.[0]?.image}
              category={items?.[0]?.category}
            />
            <MiniCategoryCardContainer
              images={items?.[1]?.image}
              category={items?.[1]?.category}
            />
            <MiniCategoryCardContainer
              images={items?.[2]?.image}
              category={items?.[2]?.category}
            />
          </Box>
          <Box
            sx={{
              // backgroundColor: "primary.main",
              width: "100%",
              height: { md: "560px", xs: "720px" },
              padding: { lg: "0 10rem", md: "0 2.5rem", xs: "0 1.5rem" },
            }}
          >
            <Box
              sx={{
                backgroundColor: "primary.main",
                width: "100%",
                height: { md: "560px", xs: "720px" },
                borderRadius: "8px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                justifyContent: { md: "center", xs: "flex-end" },
                alignItems: { md: "flex-end", xs: "center" },
                flexDirection: "column",
              }}
            >
              <CardMedia
                sx={{
                  height: { lg: "460px", md: "390px", xs: "237px" },
                  position: "absolute",
                  top: { lg: "344px", md: "375px", xs: "160px" },
                  width: { lg: "380px", md: "319px", xs: "197.21px" },
                  left: { lg: "344px", md: "200px", xs: "50%" },
                  transform: "translate(-50%, -50%)",
                  zIndex: "40",
                }}
                image={imageSpeakerZx9}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: { md: "412px", xs: "184px" },
                  left: { md: "365px", xs: "50%" },
                  transform: "translate(-50%, -50%)",
                  width: "944px",
                  height: "944px",
                  borderRadius: "50%",
                  border: "1px solid #FFFFFF",
                  opacity: "0.2",
                  pointerEvents: "none",
                  boxSizing: "border-box",
                }}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  top: { md: "419px", xs: "184px" },
                  left: { md: "343px", xs: "50%" },
                  transform: "translate(-50%, -50%)",
                  width: "542px",
                  height: "542px",
                  borderRadius: "50%",
                  border: "1px solid #FFFFFF",
                  pointerEvents: "none",
                  boxSizing: "border-box",
                  opacity: "0.2",
                }}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  top: { md: "419px", xs: "183px" },
                  left: { md: "343px", xs: "50%" },
                  transform: "translate(-50%, -50%)",
                  width: "472px",
                  height: "472px",
                  borderRadius: "50%",
                  border: "1px solid #FFFFFF",
                  pointerEvents: "none",
                  boxSizing: "border-box",
                  opacity: "0.2",
                }}
              ></Box>
              <Box
                sx={{
                  width: { sm: "349px", xs: "304px" },
                  zIndex: "100",
                  height: "303px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: { xs: "center", md: "flex-start" },
                  marginBottom: "64px",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "56px",
                    lineHeight: "58px",
                    letterSpacing: "2px",
                    textAlign: { xs: "center", md: "start" },
                    color: "secondary.second",
                  }}
                >
                  ZX9 SPEAKER
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "15px",
                    lineHeight: "25px",
                    mixBlendMode: "normal",
                    opacity: "0.75",
                    textAlign: { xs: "center", md: "start" },
                    color: "secondary.second",
                  }}
                >
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </Typography>
                <ButtonCustom4
                  sx={{ textTransform: "uppercase", width: "160px" }}
                  onClick={() => {
                    navigate(`/product/${productsDeseados?.[3]?.id}`);
                  }}
                >
                  See Product
                </ButtonCustom4>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "320px",
              padding: { lg: "0 10rem", md: "0 2.5rem", xs: "0 1.5rem" },
              marginTop: "60px",
            }}
          >
            <Box
              sx={{
                // backgroundColor: "primary.main",
                backgroundImage: {
                  md: `url(${imageSpeakerZx7Desktop})`,
                  sm: `url(${imageSpeakerZx7Tablet})`,
                  xs: `url(${imageSpeakerZx7Mobile})`,
                } /*url de assets*/,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "100%",
                height: "320px",
                borderRadius: "8px",
                // position: "relative",
                // overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "204px",
                  height: "118px",
                  marginLeft: "10%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                >
                  ZX7 SPEAKER
                </Typography>
                <ButtonCustom2
                  sx={{ width: "160px" }}
                  onClick={() => {
                    navigate(`/product/${productsDeseados?.[1]?.id}`);
                  }}
                >
                  SEE PRODUCT
                </ButtonCustom2>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              padding: { lg: "0 10rem", md: "0 2.5rem", xs: "0 1.5rem" },
              marginTop: "60px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box
              sx={{
                height: { sm: "320px", xs: "200px" },
                width: { sm: "47.5%", xs: "100%" },
                backgroundImage: {
                  md: `url(${imageEarphonesYx1Desktop})`,
                  sm: `url(${imageEarphonesYx1Tablet})`,
                  xs: `url(${imageEarphonesYx1Mobile})`,
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "8px",
                marginBottom: { xs: "24px", sm: "0px" },
              }}
            ></Box>
            <Box
              sx={{
                height: { sm: "320px", xs: "200px" },
                width: { sm: "47.5%", xs: "100%" },
                borderRadius: "8px",
                backgroundColor: "primary.third",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  height: "118px",
                  marginLeft: { xs: "10%", sm: "20%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                >
                  YX1 EARPHONES
                </Typography>
                <ButtonCustom2
                  sx={{ width: "160px" }}
                  onClick={() => {
                    navigate(`/product/${productsDeseados?.[0]?.id}`);
                  }}
                >
                  SEE PRODUCT
                </ButtonCustom2>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              padding: { lg: "0 10rem", md: "0 2.5rem", xs: "0 1.5rem" },
              marginTop: "60px",
              // height: { sm: "588px" },
              display: "flex",
              flexDirection: { md: "row-reverse", xs: "column" },
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                height: { md: "588px", xs: "300px" },
                width: { md: "47.5%", xs: "100%" },
                backgroundImage: {
                  md: `url(${imageBestGearDesktop})`,
                  sm: `url(${imageBestGearTablet})`,
                  xs: `url(${imageBestGearMobile})`,
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "8px",
              }}
            ></Box>
            <Box
              sx={{
                height: { md: "588px", sm: "300px" },
                width: { md: "47.5%", sm: "100%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: { md: "0px", xs: "63px" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "40px",
                  lineHeight: "44px",
                  letterSpacing: "1.42857px",
                  textTransform: "uppercase",
                  width: { md: "445px", sm: "573px", xs: "100%" },
                  marginBottom: "32px",
                  textAlign: { md: "start", xs: "center" },
                }}
              >
                Bringing you the
                <Typography variant="span" sx={{ color: "primary.main" }}>
                  best
                </Typography>
                audio gear
              </Typography>
              <Typography
                sx={{
                  opacity: "0.5",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "25px",
                  width: { md: "445px", sm: "573px", xs: "100%" },
                  textAlign: { md: "start", xs: "center" },
                }}
              >
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </Typography>
            </Box>
          </Box>
          <ProductListContainer categoryName={categoryName} />
        </>
      )}
      {categoryName && (
        <>
          <Box
            sx={{
              backgroundColor: "primary.second",
              height: "20vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: { lg: "0 10rem", md: "0 2.5rem" },
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: { sm: "40px", xs: "28px" },
                lineHeight: "44px",
                textAlign: "center",
                letterSpacing: "1.42857px",
                textTransform: "uppercase",
                color: "secondary.second",
              }}
            >
              {categoryName}
            </Typography>
          </Box>
          <ProductListContainer categoryName={categoryName} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              padding: { lg: "0 10rem", md: "0 2.5rem", xs: "0 1.5rem" },
              marginTop: "90px",
              justifyContent: "space-between",
              gap: "30px"
            }}
          >
            <MiniCategoryCardContainer
              images={items?.[0]?.image}
              category={items?.[0]?.category}
            />
            <MiniCategoryCardContainer
              images={items?.[1]?.image}
              category={items?.[1]?.category}
            />
            <MiniCategoryCardContainer
              images={items?.[2]?.image}
              category={items?.[2]?.category}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              padding: { lg: "0 10rem", md: "0 2.5rem", xs: "0 1.5rem" },
              marginTop: "60px",
              // height: { sm: "588px" },
              display: "flex",
              flexDirection: { md: "row-reverse", xs: "column" },
              justifyContent: "space-between",
              marginBottom: "60px",
            }}
          >
            <Box
              sx={{
                height: { md: "588px", xs: "300px" },
                width: { md: "47.5%", xs: "100%" },
                backgroundImage: {
                  md: `url(${imageBestGearDesktop})`,
                  sm: `url(${imageBestGearTablet})`,
                  xs: `url(${imageBestGearMobile})`,
                },
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "8px",
              }}
            ></Box>
            <Box
              sx={{
                height: { md: "588px", sm: "300px" },
                width: { md: "47.5%", sm: "100%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: { md: "0px", xs: "63px" },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "40px",
                  lineHeight: "44px",
                  letterSpacing: "1.42857px",
                  textTransform: "uppercase",
                  width: { md: "445px", sm: "573px", xs: "100%" },
                  marginBottom: "32px",
                  textAlign: { md: "start", xs: "center" },
                }}
              >
                Bringing you the{" "}
                <Typography variant="span" sx={{ color: "primary.main" }}>
                  best
                </Typography>{" "}
                audio gear
              </Typography>
              <Typography
                sx={{
                  opacity: "0.5",
                  fontWeight: "500",
                  fontSize: "15px",
                  lineHeight: "25px",
                  width: { md: "445px", sm: "573px", xs: "100%" },
                  textAlign: { md: "start", xs: "center" },
                }}
              >
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
};

export default Home;
