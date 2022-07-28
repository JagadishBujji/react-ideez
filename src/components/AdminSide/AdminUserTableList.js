import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import Page from '../Page';
import AdminTableUser from './AdminTableUser';

const AdminUserTableList = () => {
  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User List
          </Typography>
          {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
          New Post
        </Button> */}
        </Stack>
        <AdminTableUser />
      </Container>
    </Page>
  );
};

export default AdminUserTableList;
