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
import ManageDesc from '../ManageJobs/ManageDesc';
import Scrollbar from '../Scrollbar';

const ManageEvent = () => {
  return (
    <>
      <Container>
        <Scrollbar sx={{ padding: '20px' }}>
          <Card
            sx={{ display: 'flex', background: '#fff', borderRadius: '5px', position: 'relative', boxShadow: 'none' }}
          >
            <ManageDesc />
          </Card>
        </Scrollbar>
      </Container>
    </>
  );
};

export default ManageEvent;
