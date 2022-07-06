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
import ApplicantExperinceCard from './ApplicantExperinceCard';

const ApplicantInsights = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Item className="insights">
        <header>
          <Typography variant="h6">Insights from profile</Typography>
          <p>Experience</p>
          <ApplicantExperinceCard />
          <ApplicantExperinceCard />
          <ApplicantExperinceCard />
          <ApplicantExperinceCard />
        </header>
      </Item>
    </>
  );
};

export default ApplicantInsights;
