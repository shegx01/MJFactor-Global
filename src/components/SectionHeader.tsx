import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

type Props = {
  headerTitle: String;
  headerSubtitle?: String;
  direction?: "left" | "right" | "center";
};

const SectionHeader: React.FC<Props> = ({
  headerTitle,
  headerSubtitle,
  direction,
}) => {
  return (
    <Box>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Box sx={{ pr: 5 }}>
          <Box sx={{ display: "block", color: "#B5038D" }}>
            <Divider
              sx={{
                color: "#B5038D",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              textAlign={!!direction ? direction : "center"}
            >
              {headerTitle}
            </Divider>
          </Box>
        </Box>
      </Box>
      {headerSubtitle && (
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ fontWeight: "700" }}>{headerSubtitle}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default SectionHeader;
