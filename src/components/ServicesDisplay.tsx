import * as React from "react";
import { Box } from "@mui/system";

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
          justifyContent: "cover",
          backgroundPosition: "center"
        }}
      ></Box>
      {children }
    </Box>
  );
};

export default ServiceDisplay;
