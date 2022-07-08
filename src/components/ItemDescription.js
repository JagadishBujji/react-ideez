import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
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

const ItemDescription = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('id: ', location.state.id);
    console.log('type: ', location.state.type);
    console.log('action: ', location.state.action);
  }, []);

  const view = {
    display: 'flex',
  };

  const managejobbtn = {
    background: '#EEB5EB',
    color: '#fff',
    border: '1px solid #EEB5EB',
    '&:hover': {
      color: '#EEB5EB',
      border: '1px solid #EEB5EB',
    },
  };

  let ui = null;
  if (props.type === 'job') {
    ui =
      location.state.action === 'view-applicants' ? (
        <div>
          <Button
            sx={managejobbtn}
            variant="outlined"
            onClick={() =>
              navigate('/dashboard/jobs/123/manage-job', {
                state: { type: props.type, id: '123', action: 'manage-job' },
              })
            }
          >
            Manage Job
          </Button>
        </div>
      ) : (
        <div>
          <Button
            sx={managejobbtn}
            variant="outlined"
            onClick={() =>
              navigate('/dashboard/jobs/123/view-applicants', {
                state: { type: props.type, id: '123', action: 'view-applicants' },
              })
            }
          >
            View Applicants
          </Button>
        </div>
      );
  } else {
    ui =
      location.state.action === 'view-applicants' ? (
        <div>
          <Button
            sx={managejobbtn}
            variant="outlined"
            onClick={() =>
              navigate('/dashboard/events/123/manage-event', {
                state: { type: props.type, id: '123', action: 'manage-event' },
              })
            }
          >
            Manage Event
          </Button>
        </div>
      ) : (
        <div>
          <Button
            sx={managejobbtn}
            variant="outlined"
            onClick={() =>
              navigate('/dashboard/events/123/view-applicants', {
                state: { type: props.type, id: '123', action: 'view-applicants' },
              })
            }
          >
            View Applicants
          </Button>
        </div>
      );
  }

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
                  src={props.profile}
                  // /images/profile.png
                  alt="profile"
                  // className="profile-avatra"
                />
                {/* <img src="/images/profile.png" alt='' className='profile-avatra'/> */}
              </Grid>
              <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: '80%' }}>
                <CardContent
                  sx={{
                    flex: '1 0 auto',
                    display: 'flex',
                    marginTop: '35px',
                    padding: '10px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div className="row ">
                    <Typography component="div" variant="h5">
                      <b>{props.jobtitle}</b>
                      {/* Data Associate, Alexa Shopping */}
                    </Typography>
                    {/* ... options */}
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {props.Company}
                      {/* tech solution avadi Chennai */}
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {props.desc}
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
                    </Typography>
                  </div>
                  {ui}
                </CardContent>
                {/* <CardContent sx={{ flex: '1 0 auto', display: 'grid' }}>
                  </CardContent> */}
              </Box>
            </Grid>
          </Card>
        </Scrollbar>
      </Container>
      {/* <JobReview /> */}
      <Outlet />
    </>
  );
};

export default ItemDescription;
