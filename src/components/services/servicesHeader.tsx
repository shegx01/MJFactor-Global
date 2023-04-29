import * as React from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  title: string;
  excerpt: string;
  bgColor: string
};
const ServicesHeader: React.FC<Props> = ({ title, excerpt, bgColor}) => {
  return (
    <Box
      css={{
        background: bgColor,
        padding: "50px 0",
      }}
    >
      <Box sx={{ display: "block", color: "white" }}>
        <Divider
          sx={{ fontWeight: "bold", textTransform: "uppercase" }}
          textAlign="center"
        >
          {title}
        </Divider>
      </Box>
      <Typography
        textAlign={"center"}
        css={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          color: "white",
        }}
        component={"span"}
        variant={"overline"}
      >
        {excerpt}
      </Typography>
    </Box>
  );
};

export default ServicesHeader;
