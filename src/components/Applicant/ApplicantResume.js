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
//   import ApplicantExperinceCard from './ApplicantExperinceCard';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const ApplicantResume = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Item className="Resume">
        <header>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Resume
          </Typography>
          <div className='row resume-download' >
            <p className="pdf"><b>Jagadish kumar.pdf</b></p>
            <DownloadForOfflineIcon fontSize='large'/>
          </div>
        </header>
      </Item>
    </>
  );
};

export default ApplicantResume;
