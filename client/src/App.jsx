import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Layout from './sections/Layout';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Toaster position='top-right'/> */}
      <Routes>
        {/* Parent Route with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}