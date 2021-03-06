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

const ApplicantCertificate = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Item className="Certificate">
        <header>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Certificate
          </Typography>
          <ApplicantExperinceCard />
          <ApplicantExperinceCard />
          <ApplicantExperinceCard />
        </header>
      </Item>
    </>
  );
};

export default ApplicantCertificate;
