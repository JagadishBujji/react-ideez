import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
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
import { createTheme } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import AccountMenu from './AccountMenu';

export default function MediaControlCard(props) {
  // const theme = useTheme();

  const theme = createTheme();

  theme.typography.h5 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '16px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '18px',
      fontWeight: "900"
      
    },
  };

  theme.typography.subtitle1 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
      fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
      fontWeight: "600"
      
    },
  };
  return (
    <Card sx={{ display: 'flex', background: '#fff', borderRadius: '5px', position: 'relative' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            // sx={{ width: 151 }}
            image="/images/profile.png"
            alt="Live from space album cover"
            className="profile-avatra"
          />
          {/* <img src="/images/profile.png" alt='' className='profile-avatra'/> */}
        </Grid>
        <Grid item xs={8}>
          <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
            <div className="row location1">
              <Typography component="div" theme={theme} variant="h5">
                <b>{props.head}</b>
              </Typography>
              {/* ... options */}
              <AccountMenu type={props.type} />
            </div>
            <Typography variant="subtitle1" theme={theme} color="text.secondary" component="div">
              {props.company}
            </Typography>
            <div className="row location">
              <Typography variant="subtitle1" theme={theme} color="text.secondary" component="div">
                {props.time}
              </Typography>
              <Typography variant="subtitle1" theme={theme} color="text.secondary" component="div">
                {props.location}
              </Typography>
            </div>
            <Typography variant="subtitle1" theme={theme} color="text.secondary" component="div">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
              {props.skills}
            </Typography>
            <Typography variant="subtitle1" theme={theme} color="text.secondary" component="div">
              {props.desc}
            </Typography>
            <Typography variant="subtitle1" theme={theme} color="text.secondary" component="div">
              {props.payment}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', pl: 1, pb: 1 }}>
              <Button variant="outlined" className="close">
                Close
              </Button>
              <Button variant="contained" className="publish">
                Publish
              </Button>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
