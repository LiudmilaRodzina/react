import { createBrowserRouter } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import MainPage from '../pages/MainPage/MainPage';
import HookFormPage from '../pages/HookFormPage/HookFormPage';
import Layout from '../layouts/Layout';
import UncontrolledFormPage from '../pages/UncontrolledFormPage/UncontrolledFormPage';
import { PATH } from '../shared/constants';
import TermsPage from '../pages/TermsPage/TermsPage';

const router = createBrowserRouter([
  {
    path: PATH.ROOT_PAGE,
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: PATH.HOOK_FORM, element: <HookFormPage /> },
      { path: PATH.UNCONTROLLED, element: <UncontrolledFormPage /> },
      { path: PATH.TERMS_PAGE, element: <TermsPage /> },
      { path: PATH.ERROR_PAGE, element: <NotFoundPage /> },
    ],
  },
]);

export default router;
