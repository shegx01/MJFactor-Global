import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";
import { useRouter } from "next/router";

type Props = {
  title1: string;
  title2?: string;
  body: string;
  buttonText: string;
  target: string;
};

const ServiceDisplayFooter: React.FC<Props> = ({
  title1,
  title2,
  body,
  buttonText,
  target,
}) => {
  const router = useRouter();
  return (
    <Box
      css={{
        zIndex: 10,
        background: "white",
        width: "88vw",
        alignSelf: "center",
        marginTop: "-94px",
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography color={"#B5038D"}>{title1}</Typography>
        <Typography
          sx={{
            py: 1,
          }}
        >
          {title2}
        </Typography>
        <Typography
          css={{
            fontSize: 14,
          }}
        >
          {body}
        </Typography>
        <Box sx={{ pt: 1 }}>
          <Button color="secondary" onClick={() => router.push(target)}>
            <Typography
              css={{
                textTransform: "capitalize",
                fontSize: 12,
              }}
              component={"span"}
            >
              {buttonText}
            </Typography>
            <ChevronRight fontSize="small" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceDisplayFooter;
