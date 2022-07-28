import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Profile from './pages/Profile';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Event from './pages/Event';
import DashboardApp from './pages/DashboardApp';
import ItemDescription from './components/ItemDescription';
import JobReview from './components/JobReview';
import ManageItems from './components/ManageJobs/ManageItems';
import AdminUserList from './pages/AdminUserList';
import AdminRecruiterList from './pages/AdminRecruiterList';
import Chat from './pages/Chat';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout roles="recruiter" />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'jobs', element: <User /> },
        {
          path: 'jobs/:jobId',
          element: (
            <ItemDescription
              profile="/images/profile.png"
              jobtitle="Digital Associate, Alexa shopping"
              Company="Tech Solutions chennai avadi"
              desc="Lorem ipsum dolor sit amet"
              type="job"
            />
          ),
          children: [
            { path: 'view-applicants', element: <JobReview type="job" /> },
            { path: 'manage-job', element: <ManageItems /> },
          ],
        },
        {
          path: 'events',
          element: <Event />,
        },
        {
          path: 'events/:eventId',
          element: (
            <ItemDescription
              profile="/images/profile.png"
              jobtitle="Event Planning Program"
              Company="TCS Technologies"
              desc="Lorem ipsum dolor sit amet"
              type="event"
            />
          ),
          children: [
            { path: 'view-applicants', element: <JobReview /> },
            { path: 'manage-event', element: <ManageItems /> },
          ],
        },
        {
          path: 'chats',
          element: <Chat />,
        },
        { path: 'profile', element: <Profile /> },
      ],
    },
    {
      path: '/admin',
      element: <DashboardLayout roles="admin" />,
      children: [
        { path: '/admin', element: <Navigate to="/admin/dashboard" /> },
        { path: 'dashboard', element: <DashboardApp /> },
        { path: 'userlist', element: <AdminUserList /> },
        { path: 'recruiter', element: <AdminRecruiterList /> },
        { path: 'profile', element: <Profile /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
