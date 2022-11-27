import * as React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { ChevronRight } from '@mui/icons-material'

const ServiceDisplayFooter = () => {


    return (

      <Box
      css={{
        zIndex: 10,
        background: "white",
        width: '88vw',
        alignSelf: 'center',
        marginTop: '-94px'
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography color={'#B5038D'}>Roofing Work</Typography>
        <Typography sx={{
          py: 1
        }}>This is where your spendings is observed</Typography>
        <Typography css={{
          fontSize: 14
        }}>
        MJ FACTOR Is Nigeria’s Fastest Growing Roofing Construction Company With More Than Two Decades Experience. Perhaps even more than the walls, doors
        </Typography>
        <Box sx={{pt: 1 }}>
          <Button color="secondary">
              <Typography

              css={{ 
                  textTransform: 'capitalize',
                  fontSize: 12
                  }} component={'span'}> Explore More</Typography>
              <ChevronRight fontSize="small" />
          </Button>
        </Box>
        
      </Box>
    </Box>
    )
}

export default ServiceDisplayFooter;