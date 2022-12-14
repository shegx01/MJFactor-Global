import * as React from "react";
import { Box } from "@mui/system";
import { Container, Toolbar, Typography } from "@mui/material";
import ServiceDisplay from "../src/components/ServicesDisplay";
import ServiceDisplayFooter from "../src/components/ServiceDisplayFooter";

const blogs = [
  {
    imageUrl: "/images/cctvImg.jpg",
    title1: "September 14, 2022 --- News",
    title2: "Everything you need to know about CCTV",
    body: "CCTV is a closed-circuit television. It is a television system in which signals are monitored but not publicly distributed. The main reason for the use of CCTV is for surveillance and....",
    buttonText: "Read More",
    target: "/blogs/everything-you-need-to-know-about-cctv",
  },
  {
    imageUrl: "/images/electricWireFence.jpg",
    title1: "September 14, 2022 --- News",
    title2: "Always get Electric wire Fence for Security reasons",
    body: "Burglars and intruders generally would attempt to scale or defeat your other types of security but you know what they would not dare do? They would not trespass when it's an electric fence....",
    buttonText: "Read More",
    target: "/blogs/always-get-electric-wire-fence-for-security-reasons",
  },
  {
    imageUrl: "/images/interiorDesign.jpg",
    title1: "September 14, 2022 --- News",
    title2: "Beautiful Interior Design ideas and how to go about it",
    body: "In interior design, planning and design of man-made spaces are a part of environmental design and closely related to architecture...",
    buttonText: "Read More",
    target: "/blogs/beautiful-interior-design-ideas-and-how-to-go-about-it",
  },
  {
    imageUrl: "/images/gerrardRoof.jpg",
    title1: "September 14, 2022 --- News",
    title2: "Your Better Roofing option",
    body: "While others saw the rainy season as a Blessing, (Improved crop yield for farmers, reduction of dust on roads, cleaner air to breathe in and cool weather generally) it was not the same for the Peters'.",
    buttonText: "Read More",
    target: "/blogs/your-better-roofing-option",
  },
  {
    imageUrl: "/images/BuildingWork.jpg",
    title1: "September 14, 2022 --- News",
    title2: "Top 5 qualities to look out for in a good building",
    body: "MJ Factors has your interest at heart. All you need do is to check out our portfolio, past projects and current projects, then trust us to do an outstanding job with yours...",
    buttonText: "Read More",
    target: "/blogs/top-5-qualities-to-look-out-for-in-a-good-building",
  },
  {
    imageUrl: "/images/POPIntallation.jpg",
    title1: "September 14, 2022 --- News",
    title2: "How to get the Best POP installation for your spaces",
    body: "A POP is a false ceiling which is made from plaster Paris. It was given the name 'plaster of Paris' because it was made from gypsum and located very close to Paris in France...",
    buttonText: "Read More",
    target: "/blogs/how-to-get-the-best-pop-installation-for-your-spaces",
  },
  {
    imageUrl: "/images/waterCollector.jpg",
    title1: "September 14, 2022 --- News",
    title2: "Still in doubt about Roof Water Collectors? Check this out",
    body: "A roof water collector is a channel or a pathway (usually a trough) forming the components of a roof system which collects and diverts water away from the edges of the roof.....",
    buttonText: "Read More",
    target: "/blogs/still-in-doubt-about-roof-water-collectors?-check-this-out",
  },
];

const Blogs = () => {
  return (
    <Box css={{ background: "#e9e9e95c" }}>
      <Toolbar />
      <Container>
        <Box
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px 0",
          }}
        >
          <Typography component={"span"} variant="h6" css={{}}>
            Collection of Featured Articles
          </Typography>
        </Box>
        <Box
          css={{
            padding: "10px 0 40px",
          }}
        >
          {blogs.map(
            ({ imageUrl, title1, title2, body, buttonText, target }, idx) => (
              <Box
                css={{
                  marginTop: idx !== 0 ? 40 : 0,
                }}
              >
                <ServiceDisplay imageUrl={imageUrl} key={idx}>
                  <ServiceDisplayFooter
                    title1={title1}
                    title2={title2}
                    body={body}
                    buttonText={buttonText}
                    target={target}
                  />
                </ServiceDisplay>
              </Box>
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;
export { blogs };
