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
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '../../theme/overrides/IconButton';
import ApplicantSkills from '../Applicant/ApplicantSkills';

const ManageDesc = (props) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const managejob = {
    textAlign: 'left',
    padding: '30px',
    boxShadow:
      '0px 3px 1px -2px rgb(145 158 171 / 20%), 0px 2px 2px 0px rgb(145 158 171 / 14%), 0px 1px 5px 0px rgb(145 158 171 / 12%)',
  };

  const managedesc = {
    marginBottom: '20px',
  };

  return (
    <>
      <Item sx={managejob}>
        <div className="row manage">
          <h2>
            {props.heading}
            {/* Job description */}
          </h2>

          <EditIcon />
        </div>

        <div className="row manage">
          <h4>
            {props.head}
            {/* Job description  */}
          </h4>
          <div>
            <p>
              {props.type}
              {/* Employement Type */}
            </p>
            <p>
              {props.employer}
              {/* Full-time */}
            </p>
          </div>
        </div>
        <p style={managedesc}>
          {props.desc}
          {/* We are looking for enthusistic who have the willingness to join our
          <br />
          our organization within 15 days. 40k - 45K per month.{' '} */}
        </p>
        <div>
          <Typography variant="h6">{props.candidateprofile}
          {/* Desired Candidate Profile for Javascript Developer */}
          </Typography>
          <ul className="experience">
            <li>
              0-2 years of experience with woriking on web-based projects using ReactJs, React, Java, Javascript
              </li>
            <li>Hands on experience with popuar ReactJs Workflows (such as Redux or flux )</li>
            <li>0-2 years of experince with woriking on web-based projects using ReactJs, React, Java, Javascript</li>
            <li>0-2 years of experince with woriking on web-based projects using ReactJs, React, Java, Javascript</li>
          </ul>
        </div>
        <div>
          {/* <Typography variant="h6">skills</Typography> */}
          <ApplicantSkills />
        </div>
      </Item>
    </>
  );
};

export default ManageDesc;
