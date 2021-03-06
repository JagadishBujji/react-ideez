// component
import { color } from '@mui/system';
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} sx={{ color: '#00EAD9' }} />;

const navConfigRecruiter = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Job Post',
    path: '/dashboard/jobs',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Event Post',
    path: '/dashboard/events',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'chats',
    path: '/dashboard/chats',
    icon: getIcon('ant-design:message-filled'),
  },
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: getIcon('eva:file-text-fill'),
  },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: getIcon('eva:person-add-fill'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

const navConfigAdmin = [
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'user list',
    path: '/admin/userlist',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'recruiter List',
    path: '/admin/recruiter',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'Profile',
    path: '/admin/profile',
    icon: getIcon('bxs:user'),
  },
];

export { navConfigRecruiter, navConfigAdmin };
