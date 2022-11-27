import * as React from "react";
import { Box } from "@mui/system";
import { Typography, IconButton, Button } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

type Props = {
  imageUrl: string;
  children?: React.ReactNode
};

const ServiceDisplay: React.FC<Props> = ({ imageUrl, children}) => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <Box
        css={{
          display: "block",
          height: 310,
          width: "100%",
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          justifyContent: "center",
        }}
      ></Box>
      {children }
    </Box>
  );
};

export default ServiceDisplay;
