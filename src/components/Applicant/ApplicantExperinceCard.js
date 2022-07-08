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
  Divider,
} from '@mui/material';

const ApplicantExperinceCard = () => {
  const jobpost = {
    display: 'flex',
    
  };
  const profile = {
    borderRadius: '50%',
    padding: '15px',
    margin: 'auto',
    width: '100%',
  };
  const insights = {
    marginTop: '15px',
  };
  return (
    <>
      <header>
        <div className="row jobpost1" style={jobpost}>
          {/* <small className="time">6</small> */}
          <Grid item xs={2}>
            <img src="/images/js.png" alt="" style={profile} />
          </Grid>
          <Grid item xs={10} style={insights}>
            <h3>Javascript Developer</h3>
            <p className="time">Tech Solution</p>
            <p>2022 Present</p>
          </Grid>
        </div>
      </header>
    </>
  );
};

export default ApplicantExperinceCard;
