import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, Grid, styled } from '@mui/material';
// import Button from '@mui/material/Button';
import AccountMenu1 from './AccountMenu1';



export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', background: '#fff', borderRadius: '5px', position: 'relative' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <CardMedia
            component="img"
            // sx={{ width: 151 }}
            image="/images/profile.png"
            alt="Live from space album cover"
            className="profile-avatra"
          />
          {/* <img src="/images/profile.png" alt='' className='profile-avatra'/> */}
        </Grid>
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <CardContent sx={{ flex: '1 0 auto', display: 'grid' }}>
            <div className="row location1">
              <Typography component="div" variant="h5">
                <b>Digital Analysts Workshop</b>
              </Typography>
              <AccountMenu1 />
            </div>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              tech solution
            </Typography>
            <div className="row location">
              <Typography variant="subtitle1" color="text.secondary" component="div">
                0-2 years
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Chennai
              </Typography>
            </div>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              1.5 - 2.5 Pa
            </Typography>
            
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: "end", alignItems: 'center', pl: 1, pb: 1 }}>
              <Button variant="outlined" className='close'>Close</Button>
              <Button variant="contained" className='publish'>Publish</Button>
            </Box>
        </Box>
      </Grid>
    </Card>
  );
}
