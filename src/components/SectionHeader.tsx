import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

type Props = {
  headerTitle: String;
  headerSubtitle: String;
};

const SectionHeader: React.FC<Props> = ({ headerTitle, headerSubtitle }) => {
  return (
    <Box>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Box sx={{ pr: 5 }}>
          <Box sx={{ display: "block", color: "#B5038D" }}>
            <Divider
              sx={{ color: "#B5038D", fontWeight: "bold", textTransform: 'uppercase' }}
              textAlign="left"
            >
              {headerTitle}
            </Divider>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ fontweight: "medium" }}>{headerSubtitle}</Typography>
      </Box>
    </Box>
  );
};

export default SectionHeader;
