import * as React from "react";
import { Box } from "@mui/system";
import { Container, Toolbar, Typography } from "@mui/material";
import ServiceDisplay from "../src/components/ServicesDisplay";
import ServiceDisplayFooter from "../src/components/ServiceDisplayFooter";
import Head from "next/head";
import blogsData from "../src/blogsData";

const Blogs = () => {
  const meta_title = " MJFACTOR - Collection of Featured Articles";
  const meta_description = `These articles are some of our experience and ways to help our customers`;
  const meta_og_image = `/aboutUs.jpg`;
  return (
    <Box css={{ background: "#e9e9e95c" }}>
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
      <Toolbar />
      <Container>
        <Box
          css={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px 0",
          }}
        >
          <Typography component={"span"} variant="h6" css={{}}>
            Collection of Featured Articles
          </Typography>
        </Box>
        <Box
          css={{
            padding: "30px 0",
          }}
        >
          {blogsData.map(
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
