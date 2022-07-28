import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../Page';
import ChatsComponent from './ChatsComponent';

const RecruiterChat = () => {
  return (
    <>
      <Page title="Dashboard: Blog">
        <Container>
          <ChatsComponent />
        </Container>
      </Page>
    </>
  );
};

export default RecruiterChat;
