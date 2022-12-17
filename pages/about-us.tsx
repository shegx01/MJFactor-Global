import * as React from "react";
import { Box } from "@mui/system";
import { Toolbar, Container, Typography } from "@mui/material";
import SectionHeader from "../src/components/SectionHeader";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InstallDesktopIcon from "@mui/icons-material/InstallDesktop";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ServicesData from "../src/components/services/ServicesData";
import ServicesHeader from "../src/components/services/servicesHeader";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const AboutUs = () => {
  const aboutUs = [
    {
      icon: <EmojiEventsIcon sx={{ color: "#B5038D", fontSize: 45 }} />,
      title: "Quality Materials",
      subTitle:
        "We generally found the best materials for yor project, we promise to give you quality materials.",
    },
    {
      icon: <InstallDesktopIcon sx={{ color: "#B5038D", fontSize: 45 }} />,
      title: "Any Installation & Construction type offer",
      subTitle:
        "We offer any installation and construction type you can think of, we’re ready to serve and give you the best, we always stick to our words.",
    },
    {
      icon: <PsychologyIcon sx={{ color: "#B5038D", fontSize: 45 }} />,
      title: "Knowledgeable team",
      subTitle:
        "We have experience workers, they are ready to work and attend to all your queries, and give yu best results at the end of the project. Excellent and Good team work at MJ FACTOR.",
    },
  ];
  const visionAndMission = [
    {
        icon: <RemoveRedEyeIcon sx={{ color: "#B5038D", fontSize: 45 }} />,
      title: "Our Vision",
      subTitle:
        "Our Vision is to reach the world with quality and affordable products.",
    },
    {
        icon: <ConfirmationNumberIcon sx={{ color: "#B5038D", fontSize: 45 }} />,
      title: "Our Mission",
      subTitle:
        "Our Mission is to achieve customer satisfaction through competent personnel, efficient information and technology.",
    },
  ];
  return (
    <Box>
      <Toolbar />
      <Box>
        <Container
          sx={{
            pb: 2,
          }}
        >
          <SectionHeader
            headerTitle="About us"
            headerSubtitle="We are Medium, a brilliant company with a proud history"
          />
          <Typography
            sx={{
              lineHeight: 1.1,
              fontSize: 14,
            }}
            component="span"
          >
            Over the years, our company has grown to become an innovative market
            leader in the building material and security industry. Our driving
            force is to consistently work towards meeting the high standard that
            is expected of us. We have a team of professionals all over the
            country, working tirelessly to satisfy customer needs and exceed
            their expectations. We emphasize on the latest technologies and
            newest products from highly experienced and reputable companies.
          </Typography>
        </Container>
        <Box
          sx={{
            background: "#EEEEEE",
            py: 4,
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {aboutUs.map(({ title, subTitle, icon }) => (
            <Box
              key={title}
              css={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                maxWidth: "78vw",
                color: "#0E2240",
                margin: "20px 0",
              }}
            >
              <Box css={{ alignSelf: "center" }}>{icon}</Box>
              <Typography
                css={{
                  fontSize: "1.2rem",
                  alignSelf: "center",
                }}
              >
                {title}
              </Typography>
              <Typography
                css={{
                  padding: "8px 0",
                  fontSize: "14px",
                }}
              >
                {subTitle}
              </Typography>
            </Box>
          ))}
          <ServicesData
            body1="The installation and constructions we’ve make are always perfect and
         standard, this enable our customer to have a strong feelings about
         us and refer us to friends and family to make us work o their
         project as well, we have experience workers and we always focus on
         our works to bring good results for customer satisfaction"
            body2="We offer a variety of Stone Coated Roof Tiles, Truss Roofing,
         Alluminium Roofing, Roof Gutters, Building Constructions, Interior
         Design, Plaster of Paris (POP), Electric Wire Fence and Security
         Cameras (CCTV). We supply and install for all our customers. Contact
         us today to get the best value in building materials and
         surveillance gadgets for your home or offices."
          />
        </Box>
        <ServicesHeader
          title="Our Aims and Target"
          excerpt="AIMS"
          bgColor="#5e5656a6"
        />
        <Box
          sx={{
            background: "white",
            py: 4,
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container
            sx={{
              pb: 2,
            }}
          >
            <Typography
              sx={{
                lineHeight: 1.8,
                fontSize: 14,
              }}
              component="span"
            >
              To become the leading construction firm, while delivering projects
              that consistently exceed international standards and provide
              exceptional customer satisfaction. To continually deliver
              excellent value & innovative construction solutions to meet our
              clients' requirements. Using modern principles and sophisticated
              technologies, To be a leading construction company in the global
              market. To become the customers' most preferred choice by
              attaining excellence in quality and timely completed value added
              projects. To provide the highest level of service in the
              construction industry while offering superior craftsmanship to
              every project, we handle.
            </Typography>

            {visionAndMission.map(({ title, subTitle, icon }) => (
              <Box
                key={title}
                css={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                  maxWidth: "78vw",
                  color: "#0E2240",
                  margin: "20px 0",
                }}
              >
                <Box css={{ alignSelf: "center" }}>{icon}</Box>
                <Typography
                  css={{
                    fontSize: "1.2rem",
                    alignSelf: "center",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  css={{
                    padding: "8px 0",
                    fontSize: "14px",
                  }}
                >
                  {subTitle}
                </Typography>
              </Box>
            ))}
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
