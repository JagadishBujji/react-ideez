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
// import ApplicantList from './ApplicantList';
// import Scrollbar from './Scrollbar';

const ApplicantCard = () => {
  const jobpost = {
    display: 'flex',
  };
  const profile = {
    borderRadius: '50%',
    padding: '15px',
    margin: 'auto',
  };
  return (
    <>
      <ul>
        <li>
          <a href="/" className="message unread">
            <header>
              <div className="row jobpost" style={jobpost}>
                {/* <small className="time">6</small> */}
                <Grid item xs={4}>
                  <img src="/images/profile.png" alt="" width={100} height={100} style={profile} />
                </Grid>
                <Grid item xs={8}>
                  <h1>Jagadish Kumar</h1>
                  <small className="time">Tech Solution</small>
                  <p>Javascript Developer</p>
                  <p>Font-End Developer| ReactJS</p>
                  <p>I just wanted to reach you regarding my position as...</p>
                </Grid>
              </div>
            </header>
          </a>
        </li>
      </ul>
    </>
  );
};

export default ApplicantCard;
