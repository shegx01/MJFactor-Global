import * as React from "react";

import { Typography, Container, Divider } from "@mui/material";

type Props = {
  body1: string;
  body2: string;
};

const ServicesData: React.FC<Props> = ({ body1, body2 }) => {
  return (
    <Container css={{}}>
      <Typography
        sx={{
          py: 4,
          fontSize: "14px",
          lineHeight: 1.8,
        }}
      >
        {body1}
      </Typography>
      <Divider
        sx={{
          width: 100,
        }}
      />
      <Typography
        sx={{
          py: 4,
          fontSize: "14px",
          lineHeight: 1.8,
        }}
      >
        {body2}
      </Typography>
    </Container>
  );
};

export default ServicesData;
