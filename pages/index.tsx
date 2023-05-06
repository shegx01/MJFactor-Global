import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import { Button, Avatar, IconButton } from "@mui/material";
import SectionHeader from "../src/components/SectionHeader";
import ServiceDisplay from "../src/components/ServicesDisplay";
import ServiceDisplayFooter from "../src/components/ServiceDisplayFooter";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
export default function Home() {
  const router = useRouter();
  const services = [
    {
      imageUrl: "/roofingWork.jpg",
      title1: "Roofing Work",
      title2: "This is where your spendings is observed",
      body: `MJ FACTOR Is Nigeria’s Fastest Growing Roofing Construction Company
     With More Than Two Decades Experience. Perhaps even more than the
     walls, doors`,
      buttonText: "Explore More",
      target: "/services",
    },
    {
      imageUrl: "/cctvImg.jpg",
      title1: "CCTV Installation",
      title2: "The monitoring your home and office deserves",
      body: `Monitoring your home and assets has never been that easy
         as we have the required expertise to secure everything entrust to us. You can be rest assured
         that we have your back`,
      buttonText: "Explore More",
      target: "/services",
    },
    {
      imageUrl: "/interiorDesign.jpg",
      title1: "CCTV Installation",
      title2: "Your home can be as beautify as you are",
      body: `We make it our problem to ensure your house is really a place call home. We manage your decorations
         and fittings right from your main entrace to the exit.`,
      buttonText: "Explore More",
      target: "/services",
    },
  ];
  const meta_title =
    " MJFACTOR - We Are The Brilliant In Terms Of Installation And Construction";
  const meta_description = `MJFactor is specialized in roofing, building contruction, interior design, pop installation, electric wire fence, and water collector`;
  const meta_og_image = router.basePath + "/aboutUs.jpg";
  return (
    <Box>
      <Head>
        {/* HTML Specific */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{meta_title}</title>

        {/* Open Graph Metas */}
        <meta name="description" content={meta_description} />
        <meta property="og:title" content={meta_title} />
        <meta property="og:description" content={meta_description} />
        <meta property="og:image" content={meta_og_image} />
        {/* Twitter Cards meta */}
        <meta name="twitter:card" content={meta_og_image} />
        <meta name="twitter:title" content={meta_title} />
        <meta name="twitter:description" content={meta_description} />
        <meta name="twitter:image" content={meta_og_image} />
      </Head>
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
                backgroundImage: "url(/homeRoofing.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundPosition: "center",
              }}
              className={styles.heroImg}
            >
              <Typography
                mt={0}
                variant="h6"
                component={"span"}
                sx={{
                  color: "white",
                  textAlign: "center",
                  maxWidth: "88vw",
                }}
                className={styles.heroImgText}
              >
                We are The Brilliant in terms of Installation and Construction
              </Typography>

              <Box sx={{ mt: 3 }}>
                <Button
                  sx={{
                    background: "#B5038D",
                    color: "white",
                    fontSize: "12px",
                    borderRadius: 0,
                  }}
                  className={styles.heroImgButton}
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
                  // padding: "20px",
                }}
                className={styles.heroImgFooter}
              >
                <Box
                  component={"span"}
                  sx={{ fontSize: "50px", padding: "0 10px" }}
                >
                  5
                </Box>
                <Typography sx={{ fontSize: "16px" }} component={"span"}>
                  Years Of <br /> Experience
                </Typography>
              </Box>
              <Box
                sx={{
                  background: "#0E2240",
                  witdth: "100%",
                  color: "white",
                  padding: "16px",
                  flex: 1,
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    fontSize: "12px",
                    alignItems: "center",
                    justifyItems: "center",
                    alignContent: "center",
                    height: "100%",
                  }}
                >
                  <Typography sx={{ paddingRight: "10px" }} component={"span"}>
                    Have Questions?
                  </Typography>
                  <Typography
                    sx={{ color: "#FAA519", paddingRight: 2 }}
                    component={"span"}
                  >
                    (+234) 703 938 3558
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px" }}
                    component={"span"}
                    className={styles.heroFooterAvailable}
                  >
                    We are available 24/7 to attend to you enquiries and orders
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Container
              css={{
                marginTop: 20,
              }}
              className={styles.intro}
            >
              <Box
                css={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  marginBottom: 30,
                }}
                className={styles.flexRow}
              >
                <div className={styles.hidden}>
                  <SectionHeader
                    headerSubtitle={"Know Everything About Us"}
                    headerTitle={"ABOUT US"}
                  />
                </div>
                <Box
                  css={{
                    display: "none",
                    maxWidth: "50%",
                    alignItems: "center",
                  }}
                  className={styles.flex}
                >
                  {/* SectionHeader For Desktop */}
                  <Box css={{}}>
                    <Box sx={{ mt: 4, mb: 2 }}>
                      <Box sx={{ pr: 5 }}>
                        <Box sx={{ display: "block", color: "#B5038D" }}>
                          <Typography
                            sx={{
                              color: "#B5038D",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              fontSize: "1.2rem",
                            }}
                          >
                            ABOUT US
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography sx={{ fontWeight: "700" }}>
                        "Know Everything About Us"
                      </Typography>
                    </Box>

                    <div>
                      <Box>
                        <Typography
                          sx={{
                            my: 2,
                            fontSize: 16,
                            maxWidth: "70%",
                            lineHeight: 2,
                          }}
                        >
                          Over the years, our company has grown to become an
                          innovative market leader in the building material and
                          security industry. Our driving force is to
                          consistently work towards meeting the high standard
                          that is expected of us. We have a team of
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
                    </div>
                  </Box>
                </Box>
                <div
                  css={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ServiceDisplay imageUrl="/aboutUs.jpg" height={380} />
                </div>
                <div className={styles.hidden}>
                  <Box>
                    <Typography
                      sx={{
                        my: 2,
                        fontSize: 16,
                        maxWidth: "75%",
                        lineHeight: 2,
                      }}
                    >
                      Over the years, our company has grown to become an
                      innovative market leader in the building material and
                      security industry. Our driving force is to consistently
                      work towards meeting the high standard that is expected of
                      us. We have a team of professionals all over the
                      country...
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
                </div>
              </Box>
            </Container>
            <Box sx={{ background: "#EEEEEE", pt: 1, pb: 4 }}>
              <Container
                sx={{ my: 2, pb: 2, background: "#ffffff61", borderRadius: 5 }}
              >
                <SectionHeader
                  headerSubtitle={"What We Offer"}
                  headerTitle={"OUR SERVICES"}
                />
                <Box
                  css={{ display: "flex", flexDirection: "column" }}
                  className={styles.flexRow}
                >
                  {services.map((item, idx) => (
                    <div key={idx} css={{ padding: 8 }}>
                      <ServiceDisplay imageUrl={item.imageUrl}>
                        <ServiceDisplayFooter
                          title1={item.title1}
                          title2={item.title2}
                          body={item.body}
                          buttonText={item.buttonText}
                          target={item.target}
                        />
                      </ServiceDisplay>
                    </div>
                  ))}
                </Box>
                <Box
                  sx={{
                    display: "inline-flex",
                    width: "100%",
                    py: 4,
                    alignContent: "center",
                    // justifyContent: "center",
                  }}
                >
                  <Button
                    color="secondary"
                    onClick={() => router.push("/services")}
                  >
                    see all services
                  </Button>
                </Box>
              </Container>
              <Container sx={{ my: 4 }}>
                <SectionHeader
                  headerSubtitle={"Feedback from clients"}
                  headerTitle={"CUSTOMERS"}
                />
                <Box
                  css={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* Testimony1 */}
                  <Box>
                    <Box css={{ marginLeft: 20 }}>
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
                        Did a great job on my Security camera and responded
                        within 2hr when I had an emergency issue
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
                            fontSize: "1rem",
                            textTransform: "uppercase",
                          }}
                          component={"span"}
                        >
                          Getdone Limited
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Box>
            <Box sx={{ background: "", pt: 1, pb: 4 }}>
              <Container sx={{ my: 4 }}>
                <SectionHeader
                  headerSubtitle={"Discover some of our latest projects"}
                  headerTitle={"Projects"}
                />
                <ImageList
                  css={{
                    display: "inline-flex",
                  }}
                >
                  {["/waterBlog.jpg", "/westernDesktop.jpg", "/7.jpg"].map(
                    (url, id) => {
                      return (
                        <ImageListItem
                          key={id}
                          css={{
                            marginLeft: id === 0 ? 0 : 10,
                          }}
                        >
                          <img src={url} alt={"image"} />
                        </ImageListItem>
                      );
                    }
                  )}
                </ImageList>
              </Container>
            </Box>
            <Box sx={{ background: "#0e2240cf", color: "white", p: 2 }}>
              <Container sx={{ my: 4 }}>
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
                    maxWidth: "700px",
                  }}
                >
                  Do you need help with roof installations, building
                  construction, roof repairs, replacements or maintenance? Give
                  us a call on 📞(+234) 703 938 3558 or fill in the contact form
                  below with your enquiry and we will get back to you as soon as
                  possible.
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
                      padding: " 30px",
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
                      <Button color="secondary" variant="outlined" size="large">
                        submit
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
