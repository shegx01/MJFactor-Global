import * as React from 'react'
import { Box, Typography } from '@mui/material'

type Props = {
    children?: React.ReactNode;
    items: { text: string; icon?: React.ReactNode }[];
  };
  
const FooterBody: React.FC<Props> = ({items}) => {

    return (
        <Box sx={{ color: "white" }}>
        {items.map(({ icon, text }) => (
          <Box
          key={text}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {!!icon && icon}
            <Typography
              sx={{
                ml: !!icon ? 1 : 0,
                fontSize: 13,
                lineHeight: 1.8,
                color: "#C7C7C7",
              }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </Box>
    )
}

export default FooterBody;