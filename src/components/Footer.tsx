import * as React from "react";
import { Box } from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FooterSubTitle from "./footer/FooterSubTitle";
import FooterBody from "./footer/FooterBody";
import Copyright from "./footer/Copyright";

const Footer = () => {
  const getInTouch = [
    {
      icon: <CallOutlinedIcon fontSize="small" />,
      text: "(+234) 703 938 3558",
    },
    {
      icon: <EmailOutlinedIcon fontSize="small" />,
      text: "mjfactorglobal@gmail.com",
    },
    {
      icon: <LocationOnOutlinedIcon fontSize="small" />,
      text: "Shop S, block 6, Joke Plaza, Bodija, Ibadan",
    },
  ];

  const servicesList = [
    {
      text: "Roofing Work",
    },
    {
      text: "Interior Decoration",
    },
    {
      text: "Pop Decoration",
    },
    {
      text: "CCTV Installation",
    },
    {
      text: "Electric Wire Fence",
    },
    {
      text: "Water Collector Installation",
    },
   
    {
      text: "Building Contruction",
    },
   
  ];

  const privacyPolicy = [
    { text: "Privacy Policy"}
  ]
  return (
    <Box>
      <Box sx={{ background: "#0E2240", p: 2 }}>
        <Box
          sx={{
            display: "inline-flex",
            my: 1,
            background: "#3c4b64",
            borderRadius: 2,
          }}
        >
          <img
            style={{ width: "100%" }}
            src="icons/mjfactor.svg"
            alt="MJ Factor"
          />
        </Box>
        <Box>
          <Box>
            <FooterSubTitle title="get in touch" />
            <FooterBody items={getInTouch} />
          </Box>
          <Box sx={{
            mt: 1
          }}>
            <FooterSubTitle title="services" />
            <FooterBody items={servicesList} />
          </Box>
          <Box sx={{
            mt: 1
          }}>
            <FooterSubTitle title="policy" />
            <FooterBody items={privacyPolicy} />
          </Box>
        </Box>
      </Box>
      <Copyright />
    </Box>
  );
};

export default Footer;
