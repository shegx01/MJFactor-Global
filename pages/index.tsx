import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Link from "../src/Link";
import { Button, Avatar, IconButton } from "@mui/material";
import SectionHeader from "../src/components/SectionHeader";
import ServiceDisplay from "../src/components/ServicesDisplay";
import ServiceDisplayFooter from "../src/components/ServiceDisplayFooter";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function Home() {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ p: 0, width: "100%" }}>
          <Toolbar />
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            component="div"
          >
            <Box
              sx={{
                display: "flex",
                height: 300,
                width: "100%",
                backgroundImage: "url(/images/homeRoofing.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                mt={0}
                variant="h6"
                component={"span"}
                sx={{
                  fontSize: "26px",
                  color: "white",
                  textAlign: "center",
                  maxWidth: "88vw",
                }}
              >
                We are The Brilliant in terms of Installation and Construction
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Button
                  sx={{
                    background: "white",
                    color: "#B5038D",
                    fontSize: "12px",
                  }}
                  size="large"
                  variant="contained"
                >
                  Get to know Us
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "80vw",
                alignSelf: "center",
                mt: -6,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 700,
                  color: "white",
                  background: "#B5038D",
                }}
              >
                <Box
                  component={"span"}
                  sx={{ fontSize: "50px", padding: "0 10px" }}
                >
                  5
                </Box>
                <Typography sx={{ fontSize: "16px" }} component={"span"}>
                  Years Of <br></br> Experience
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "#0E2240",
                  witdth: "100%",
                  color: "white",
                  padding: "16px",
                }}
              >
                <Box
                  sx={{ display: "flex", flexWrap: "wrap", fontSize: "12px" }}
                >
                  <Typography sx={{ paddingRight: "10px" }} component={"span"}>
                    Have Questions?
                  </Typography>
                  <Typography sx={{ color: "#FAA519" }} component={"span"}>
                    (+234) 703 938 3558
                  </Typography>
                </Box>
                <Divider sx={{ color: "white", my: 1 }} />
                <Typography sx={{ fontSize: "12px" }} component={"span"}>
                  We are available 24/7 to attend to you enquiries and orders
                </Typography>
              </Box>
            </Box>
            <Container>
              <SectionHeader
                headerSubtitle={"Know Everything About Us"}
                headerTitle={"ABOUT US"}
              />
              <ServiceDisplay imageUrl="/images/aboutUs.jpg" />
              <Box>
                <Typography sx={{ my: 2, fontSize: 16 }}>
                  Over the years, our company has grown to become an innovative
                  market leader in the building material and security industry.
                  Our driving force is to consistently work towards meeting the
                  high standard that is expected of us. We have a team of
                  professionals all over the country...
                </Typography>
              </Box>
              <Box sx={{ pt: 2, pb: 4 }}>
                <Button
                  sx={{ borderColor: "#B5038D", color: "#0E2240" }}
                  variant="outlined"
                >
                  get to know us
                </Button>
              </Box>
            </Container>
            <Box sx={{ background: "#EEEEEE", pt: 1, pb: 4 }}>
              <Container sx={{}}>
                <SectionHeader
                  headerSubtitle={"What We Offer"}
                  headerTitle={"OUR SERVICES"}
                />
                <ServiceDisplay imageUrl="/images/roofingWork.jpg">
                  <ServiceDisplayFooter
                    title1="Roofing Work"
                    title2="This is where your spendings is observed"
                    body="MJ FACTOR Is Nigeria’s Fastest Growing Roofing Construction Company
                   With More Than Two Decades Experience. Perhaps even more than the
                   walls, doors"
                    buttonText="Explore More"
                    target="/services"
                  />
                </ServiceDisplay>
                <Box
                  sx={{
                    display: "inline-flex",
                    width: "100%",
                    py: 4,
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <IconButton sx={{ background: "white" }}>
                      <ChevronLeft />
                    </IconButton>

                    <IconButton
                      sx={{ ml: 2, background: "#0E2240", color: "white" }}
                    >
                      <ChevronRight />
                    </IconButton>
                  </Box>
                </Box>
              </Container>
              <Container>
                <SectionHeader
                  headerSubtitle={"Feedback and clients"}
                  headerTitle={"CUSTOMERS"}
                />
                <Box
                  css={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Avatar
                      sx={{
                        height: 80,
                        width: 80,
                      }}
                      src={"images/testimony.png"}
                    />
                  </Box>
                  <Box
                    sx={{
                      pl: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                      }}
                    >
                      Did a great job on my Security camera and responded with
                      in 2hr when I had an emergency
                    </Typography>
                    <Box
                      sx={{
                        color: "#B5038D",
                        display: "flex",
                        py: 1,
                      }}
                    >
                      <Box
                        css={{
                          paddingRight: 8,
                        }}
                      >
                        &#8212;
                      </Box>
                      <Typography
                        css={{
                          fontSize: 14,
                        }}
                        component={"span"}
                      >
                        Getdone Limited
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box sx={{ background: "", pt: 1, pb: 4 }}>
              <Container>
                <SectionHeader
                  headerSubtitle={"Discover some of our latest projects"}
                  headerTitle={"Projects"}
                />
              </Container>
              <ImageList
                css={{
                  display: "inline-flex",
                }}
              >
                {[
                  "/images/waterBlog.jpg",
                  "/images/westernDesktop.jpg",
                  "/images/7.jpg",
                ].map((url) => {
                  return (
                    <ImageListItem>
                      <img src={url} alt={"image"} />
                    </ImageListItem>
                  );
                })}
              </ImageList>
            </Box>
            <Box sx={{ background: "#0e2240cf", color: "white", p: 2 }}>
              <Box
                css={{
                  textTransform: "uppercase",
                  fontWeight: "medium",
                  fontSize: 14,
                  padding: "16px 0",
                }}
              >
                get free quote
              </Box>
              <Box
                css={{
                  fontSize: 14,
                  lineHeight: 2,
                }}
              >
                Do you need help with roof installations, building construction,
                roof repairs, replacements or maintenance? Give us a call on
                📞(+234) 703 938 3558 or fill in the contact form below with
                your enquiry and we will get back to you as soon as possible.
              </Box>
              <Divider
                sx={{
                  color: "white",
                }}
              />
              {/* form input goes here */}
              <Box
                css={{
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                  margin: "8px 0",
                }}
              >
                <Box
                  css={{
                    background: "#eeeeee",
                    marginTop: 12,
                    padding: " 20px 12px 0",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "nowrap",
                    borderRadius: 5,
                  }}
                >
                  <FormControl
                    sx={{
                      color: "white",
                    }}
                    variant="filled"
                  >
                    <TextField
                      color="secondary"
                      id="name"
                      placeholder="Your Name"
                      variant="outlined"
                    />
                    <TextField
                      sx={{
                        mt: 2,
                      }}
                      color="secondary"
                      id="name"
                      placeholder="Your Email"
                      variant="outlined"
                    />
                    <TextField
                      sx={{
                        mt: 2,
                      }}
                      color="secondary"
                      id="name"
                      placeholder="Your Enquiries/messages"
                      multiline
                      variant="outlined"
                    />
                  </FormControl>
                  <Box
                    sx={{
                      py: 2,
                    }}
                  >
                    <Button color="secondary" variant="contained" size="medium">
                      submit
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
