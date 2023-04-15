import * as React from "react";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { color } from "@mui/system";

export default function Copyright() {
  return (
    <Typography
      sx={{
        display: 'flex',
        pl: 2,
        lineHeight: 1.5,
        color: 'white'
      }}
    variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      {new Date().getFullYear()}.
      <MuiLink color="inherit" href="#">
        MJFactor Global
      </MuiLink>{" "}
    </Typography>
  );
}
