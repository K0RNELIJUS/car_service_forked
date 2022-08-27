import { lazy } from 'react';
// Constants imports
import NAV_LINKS from './constants/navLinks';
// Assets imports
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/StyledGuide';
// Page imports
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const SingleServicePage = lazy(() => import('./pages/SingleServicePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
// Component imports
const Header = lazy(() => import('./components/organisms/Header'));
const Footer = lazy(() => import('./components/organisms/Footer'));

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUsPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/services/service' element={<SingleServicePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer navLinks={NAV_LINKS} />
      </ThemeProvider>
    </>
  );
}

export default App;
