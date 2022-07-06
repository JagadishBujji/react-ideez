import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  CardActionArea,
  CardMedia,
  CardContent,
  Box,
  Paper,
  Grid,
  styled,
} from '@mui/material';
import Scrollbar from './Scrollbar';
import JobReview from './JobReview';
// import { display } from '@mui/system';

const ItemDescription = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('id: ', location.state.id);
    console.log('type: ', location.state.type);
    console.log('action: ', location.state.action);
  }, []);

  const view = {
    display: 'flex',
  };

  return (
    <>
      <Container>
        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
           ItemDescription
          </Typography>
        </Stack> */}

        {/* <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} /> */}

        <Scrollbar sx={{ padding: '20px' }}>
          <Card sx={{ display: 'flex', background: '#fff', borderRadius: '5px', position: 'relative' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={2} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <img
                  style={{ width: '50%', borderRadius: '50%', margin: 'auto', paddingTop: '20px' }}
                  src="/images/profile.png"
                  alt="Live from space album cover"
                  // className="profile-avatra"
                />
                {/* <img src="/images/profile.png" alt='' className='profile-avatra'/> */}
              </Grid>
              <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <CardContent sx={{ flex: '1 0 auto', display: 'grid', marginTop: '35px', padding: '10px' }}>
                  <div className="row ">
                    <Typography component="div" variant="h5">
                      <b>Data Associate, Alexa Shopping</b>
                    </Typography>
                    {/* ... options */}
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      tech solution avadi Chennai
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </div>

                  {/* <div>
                    <Button variant="outlined">Outlined</Button>
                    </div> */}
                </CardContent>
                {/* <CardContent sx={{ flex: '1 0 auto', display: 'grid' }}>
                  </CardContent> */}
              </Box>
            </Grid>
          </Card>
        </Scrollbar>
      </Container>
      <JobReview />
    </>
  );
};

export default ItemDescription;
