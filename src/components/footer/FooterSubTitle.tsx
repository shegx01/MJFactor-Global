import * as React from 'react'
import { Typography } from '@mui/material';

type Props = {
    title: string,
}
const FooterSubTitle: React.FC<Props> = ({title}) => {

    return (
        <Typography
        sx={{
          color: "white",
          fontWeight: "semibold",
          fontSize: "14px",
          lineHeight: 2
        }}
        component={"span"}
        variant="overline"
      >
        {title}
      </Typography>
    )
}


export default FooterSubTitle;