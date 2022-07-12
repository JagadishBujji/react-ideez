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
import ApplicantCard from './Applicant/ApplicantCard';
import ApplicantCertificate from './Applicant/ApplicantCertificate';
import ApplicantContact from './Applicant/ApplicantContact';
import ApplicantDesc from './Applicant/ApplicantDesc';
import ApplicantInsights from './Applicant/ApplicantInsights';
import ApplicantResume from './Applicant/ApplicantResume';
import ApplicantSkills from './Applicant/ApplicantSkills';
import Scrollbar from './Scrollbar';

const JobReview = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const desc = {
    background: '#f2f2f2',
    padding: '25px',
    // marginTop: '5px',
    maxHeight: '800px',
    overflow: 'auto',
  };
  return (
    <>
      <Container>
        <Scrollbar sx={{ padding: '20px' }}>
          <Card
            sx={{ display: 'flex', background: '#fff', borderRadius: '5px', position: 'relative', boxShadow: 'none' }}
          >
            {props.type === 'job' ? (
              <>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={5} sx={{ background: '#f2f2f2' }}>
                    <Item
                      sx={{
                        boxShadow:
                          '0px 3px 1px -2px rgb(145 158 171 / 20%), 0px 2px 2px 0px rgb(145 158 171 / 14%), 0px 1px 5px 0px rgb(145 158 171 / 12%)',
                      }}
                    >
                      <article className="message-list">
                        <ul className="messages">
                          <li className="day">
                            {/* <a href="/" title="Date: Today">
                          Today
                        </a> */}
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                          </li>
                        </ul>
                      </article>
                    </Item>
                  </Grid>
                  <Grid item xs={7} sx={desc}>
                    <ApplicantDesc />
                    <ApplicantInsights />
                    <ApplicantSkills />
                    <ApplicantCertificate />
                    <ApplicantResume />
                    <ApplicantContact />
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item xs={12} sx={{ background: '#f2f2f2' }}>
                    <Item
                      sx={{
                        boxShadow:
                          '0px 3px 1px -2px rgb(145 158 171 / 20%), 0px 2px 2px 0px rgb(145 158 171 / 14%), 0px 1px 5px 0px rgb(145 158 171 / 12%)',
                      }}
                    >
                      <article className="message-list">
                        <ul className="messages">
                          <li className="day">
                            {/* <a href="/" title="Date: Today">
                          Today
                        </a> */}
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                            <Divider />
                            <ApplicantCard />
                          </li>
                        </ul>
                      </article>
                    </Item>
                  </Grid>
                  {/* <Grid item xs={7} sx={desc}>
                <ApplicantDesc />
                <ApplicantInsights />
                <ApplicantSkills />
                <ApplicantCertificate />
                <ApplicantResume />
                <ApplicantContact />
              </Grid> */}
                </Grid>
              </>
            )}
          </Card>
        </Scrollbar>
      </Container>
    </>
  );
};

export default JobReview;
