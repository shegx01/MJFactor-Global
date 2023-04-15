import * as React from "react";
import { Box } from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FooterSubTitle from "./footer/FooterSubTitle";
import FooterBody from "./footer/FooterBody";
import Copyright from "./footer/Copyright";
import Container from "@mui/material/Container";
import styles from "./footer.module.css";

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

  const privacyPolicy = [{ text: "Privacy Policy" }];
  return (
    <Box sx={{ background: "#0E2240", py: 12 }}>
      <Container>
        <Box>
          <Box css={{}} className={styles.footerContainer}>
            <Box
              sx={{
                display: "block",
                my: 1,
              }}
            >
              <span
                css={{
                  display: "block",
                  background: "#3c4b64",
                  borderRadius: 2,
                }}
              >
                <img
                  style={{ width: "80px", height: "80px%" }}
                  src="icons/mjfactor.svg"
                  alt="MJ Factor"
                />
              </span>
            </Box>

            <Box sx={{ mt: 2 }} className={styles.desktopMargin}>
              <FooterSubTitle title="get in touch" />
              <FooterBody items={getInTouch} />
            </Box>
            <Box
              sx={{
                mt: 2,
              }}
              className={styles.desktopMargin}
            >
              <FooterSubTitle title="services" />
              <FooterBody items={servicesList} />
            </Box>
            <Box
              sx={{
                mt: 2,
              }}
              className={styles.desktopMargin}
            >
              <FooterSubTitle title="policy" />
              <FooterBody items={privacyPolicy} />
            </Box>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
