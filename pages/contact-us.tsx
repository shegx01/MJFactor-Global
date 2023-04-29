import React from "react";
import {
  Button,
  Divider,
  FormControl,
  TextField,
  Toolbar,
} from "@mui/material";

import { Box } from "@mui/material";
import { Container } from "@mui/system";

const ContactUs = () => {
  return (
    <Container>

    <Box css={{
      margin: "30px 0"
    }}>
      <Toolbar />
      <Box>
        <iframe
          style={{ width: "100%", height: "40vh" }}
          src="https://www.google.com/maps/embed/v1/place?q=Joke+plaza+Bodija,+opp.+access+bank+bodija,+Ibadan,+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        >
          {" "}
        </iframe>
      </Box>

      <Container>
        <Box sx={{ background: "", color: "#737A85", py: 4 }}>
          <Box
            css={{
              fontSize: 16,
              lineHeight: 2,
            }}
          >
            Kindly be as detailed as possible, stating all relevant information
            you already have, including any contacts, to help us understand your
            enquiry and help us find the right person to handle your request.
          </Box>
          {/* <Divider
                sx={{
                  color: "white",
                }}
              /> */}
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
                background: "",
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
                  placeholder="messages"
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
      </Container>
    </Box>
    </Container>
  );
};

export default ContactUs;
