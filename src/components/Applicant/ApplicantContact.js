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
 
  
  const ApplicantContact = () => {
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
              Contact
            </Typography>
            <p>Email: <span>Jagadish00198@gmail.com</span></p>
            <p>Phone: <span>123456789</span></p>
          </header>
        </Item>
      </>
    );
  };
  
  export default ApplicantContact;
  