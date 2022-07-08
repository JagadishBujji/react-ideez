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
import Scrollbar from '../Scrollbar';
import ManageDesc from './ManageDesc';

const ManageItems = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Container>
        <Scrollbar sx={{ padding: '20px' }}>
          <Card
            sx={{
              display: 'flex',
              background: '#f2f2f2',
              borderRadius: '5px',
              position: 'relative',
              boxShadow: 'none',
            }}
          >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={9}>
                <ManageDesc
                  heading="Job description"
                  head="Job description"
                  type="Employement Type"
                  employer="Full-time "
                  desc="We are looking for enthusistic who have the willingness to join our
                  our organization within 15 days. 40k - 45K per month."
                  candidateprofile="Desired Candidate Profile for Javascript Developer"
                />
              </Grid>
              <Grid item xs={3}>
                <Item
                  sx={{
                    boxShadow:
                      '0px 3px 1px -2px rgb(145 158 171 / 20%), 0px 2px 2px 0px rgb(145 158 171 / 14%), 0px 1px 5px 0px rgb(145 158 171 / 12%)',
                  }}
                >
                  <Typography variant="h3">20</Typography>
                  <p>
                    <span>Applicants</span>
                  </p>
                </Item>
              </Grid>
            </Grid>
          </Card>
        </Scrollbar>
      </Container>
    </>
  );
};

export default ManageItems;
