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

const ApplicantDesc = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Item>
        <section className="message-content">
          <header>
            <h2>Jagadish Kumar .3rd</h2>
            <p>Font-End Developer| ReactJS</p>
            <p>Chennai</p>
            <small>1 week ago</small>
          </header>
        </section>
      </Item>
    </>
  );
};

export default ApplicantDesc;
