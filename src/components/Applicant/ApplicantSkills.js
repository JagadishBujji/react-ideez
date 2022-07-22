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

const ApplicantSkills = (props) => {
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
          <Typography variant="h6" sx={{mb: 2}}>Skills</Typography>
          <div className="row skills">
            {/* <p className="java">Java</p>
            <p className="react">ReactJS</p>
            <br/>
            <p className="javascript">Javascript</p>
            <p className="html">HTML</p>
            <p className="css">CSS</p> */}
            {props.skills.map((m)=>(
              <p className="javascript">{m.title}</p>
            ))}
          </div>
        </header>
      </Item>
    </>
  );
};

export default ApplicantSkills;
