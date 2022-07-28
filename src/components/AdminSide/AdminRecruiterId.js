import * as React from 'react';

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
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Scrollbar from '../Scrollbar';

const AdminRecruiterId = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Container>
        <Card>
          {/* <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} /> */}

          <Scrollbar sx={{ padding: '20px' }}>
            <header>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                  <img
                    src="/static/mock-images/avatars/avatar_default.jpg"
                    alt=""
                    width={300}
                    height={300}
                    // style={profile}
                    className="profile"
                  />
                  <Typography sx={{ textAlign: 'center' }} variant="subtitle1" color="text.secondary" component="div">
                    Jagadish Kumar
                  </Typography>
                  <Typography sx={{ textAlign: 'center' }} variant="subtitle1" color="text.secondary" component="div">
                    jagadish00198@mail.com
                  </Typography>
                </Grid>

                <Grid item xs={8}>
                  <Box sx={{ padding: '30px' }}>
                    <Box>
                      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Recruiter Id"
                            variant="outlined"
                            sx={{ marginRight: '10px', marginBottom: '15px' }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Company Name"
                            variant="outlined"
                            sx={{ marginRight: '10px', marginBottom: '15px' }}
                          />
                        </Grid>
                      </Grid>{' '}
                    </Box>
                    <Box>
                      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Industry"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Location"
                            variant="outlined"
                            sx={{ marginRight: '10px', marginBottom: '15px' }}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                    <Box>
                      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Address"
                            variant="outlined"
                            sx={{ marginRight: '10px', marginBottom: '15px' }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            sx={{ marginRight: '10px', marginBottom: '15px' }}
                          />
                        </Grid>
                      </Grid>{' '}
                    </Box>
                    <Box>
                      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Phone"
                            variant="outlined"
                            sx={{ marginRight: '10px', marginBottom: '15px' }}
                          />
                        </Grid>
                      </Grid>{' '}
                    </Box>
                  </Box>
                  <Box className="btnrow">
                    <Button
                      variant="outline"
                      sx={{ marginRight: '10px', border: '1px solid #EEB5EB', color: '#EEB5EB' }}
                    >
                      cancel
                    </Button>
                    <Button variant="contained" className="publish">
                      save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={12}>
                  <h1>Jagadish Kumar</h1>
                  <small className="time">Tech Solution</small>
                  <p>Javascript Developer</p>
                  <p>Font-End Developer| ReactJS</p>
                  <p>I just wanted to reach you regarding my position as...</p>
                </Grid>
              </Grid> */}
            </header>
          </Scrollbar>
        </Card>
      </Container>
    </>
  );
};

export default AdminRecruiterId;
