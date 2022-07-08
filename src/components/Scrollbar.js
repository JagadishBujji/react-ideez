import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { dropRight } from 'lodash';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
  '& .location': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '& .location1': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '& .profile-avatra': {
    width: '100%',
  },
  '& .menu': {
    position: 'absolute',
    right: '5px',
  },

  '& .close': {
    marginRight: '10px',
    border: '1px solid #EEB5EB',
    color: '#EEB5EB',
  },
  '& .publish': {
    backgroundColor: '#EEB5EB',
    '&:hover': {
      backgroundColor: '#EEB5EB',
    },
  },
  '& .css-jjtu05': {
    backgroundColor: '#f2f2f2',
  },
  '& .d-flex': {
    display: 'flex',
  },
  '& .message-list': {
    textAlign: 'left',
    maxHeight: '700px',
    overflow: 'auto',
  },
  '& .message': {
    color: '#000',
    textDecoration: 'none',
  },
  '& ::-webkit-scrollbar ': {
    width: '5px',
  },
  '& ::-webkit-scrollbar-track  ': {
    boxShadow: 'inset 0 0 5px grey',
    borderRadius: '10px',
  },
  '& ::-webkit-scrollbar-thumb  ': {
    background: '#ccc',
    borderRadius: '10px',
  },
  '& ::-webkit-scrollbar-thumb:hover': {
    background: '#CCC',
  },
  '& .jobpost:hover': {
    background: '#E7F6FC',
  },
  '& .jobpost1:hover': {
    background: '#fff',
  },
  '& .message-content': {
    textAlign: 'left',
  },
  '& .insights': {
    marginTop: '10px',
    textAlign: 'left',
    boxShadow:
      '0px 3px 1px -2px rgb(145 158 171 / 20%), 0px 2px 2px 0px rgb(145 158 171 / 14%), 0px 1px 5px 0px rgb(145 158 171 / 12%)'
  },
  '& .skills': {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    
  },
  '& .java,.react,.javascript,.html,.css': {
    width: '20%',
    background: '#EEB5EB',
    color: '#fff',
    padding: '5px',
    textAlign: 'center',
    fontSize: '18px',
    marginRight: '10px',
    borderRadius: '15px',
    marginBottom: '10px',
  },
  '& .Certificate': {
    marginTop: '10px',
    textAlign: 'left',
    boxShadow:
      '0px 3px 1px -2px rgb(145 158 171 / 20%), 0px 2px 2px 0px rgb(145 158 171 / 14%), 0px 1px 5px 0px rgb(145 158 171 / 12%)',
  },
  '& .Resume': {
    marginTop: '10px',
    textAlign: 'left',
    boxShadow:
    '0px 3px 1px -2px rgb(145 158 171 / 20%), 0px 2px 2px 0px rgb(145 158 171 / 14%), 0px 1px 5px 0px rgb(145 158 171 / 12%)',
  },
  '& .resume-download': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '& .pdf': {
    fontSize: '18px',
  },
  // '& .css-1byr0tz': {
  // background: "#f2f2f2"
  // },
  '& .manage': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: "20px"
  },
  '& .experience': {
    padding: '15px',
  },
}));
// css-jjtu05

// ----------------------------------------------------------------------

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default function Scrollbar({ children, sx, ...other }) {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}
