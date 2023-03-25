import * as React from "react";
import { Box } from "@mui/system";
import styles from './ServicesDisplay.module.css'

type Props = {
  imageUrl: string;
  height?: number;
  children?: React.ReactNode
};

const ServiceDisplay: React.FC<Props> = ({ imageUrl, height, children}) => {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        width: '100%'
      }}
    >
      <Box
        css={{
          display: "block",
          position: 'relative',
          height: !!height ? height : 310,
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
