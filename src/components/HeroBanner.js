import React from "react";
import { Box, Typography,Button } from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="RED" fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={3}>
        Check out the best excercises for you
      </Typography>

      <Button variant="contained"  color="success" href="#exercises" >
        Explore Exercises
      </Button>
      
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
      
    </Box>
  );
};

export default HeroBanner;
