import * as React from "react";
import { Box } from "@mui/system";
import { Container, Toolbar, Typography } from "@mui/material";
import ServiceDisplay from "../src/components/ServicesDisplay";
import ServiceDisplayFooter from "../src/components/ServiceDisplayFooter";

import blogsData from "../src/blogsData";

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
            padding: "30px 0",
          }}
        >
          <Typography component={"span"} variant="h6" css={{}}>
            Collection of Featured Articles
          </Typography>
        </Box>
        <Box
          css={{
            padding: "30px 0"
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
