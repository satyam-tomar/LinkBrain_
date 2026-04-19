import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    /* We use min-h-screen instead of h-screen so the page can grow.
       We remove overflow-hidden to allow natural browser scrolling. */
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* 1. FIXED HEADER
          Since it's fixed, it stays at the top of the viewport 
          regardless of where the rest of the content is. */}
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <Navbar />
      </header>
      
      {/* 2. SCROLLABLE CONTENT + FOOTER
          We add pt-20 so the content doesn't hide under the fixed navbar.
          flex-1 ensures this area pushes the footer down if content is short. */}
      <main className="flex-1 flex flex-col pt-20 bg-[#fdfcff]">
        
        {/* Page Content */}
        <div className="flex-grow min-h-screen">
          <Outlet />
        </div>

        {/* 3. NATURAL FOOTER
            It sits at the end of the main content. 
            If the page is long (like your Showroom showcase), 
            you scroll down to see it. */}
        <footer className="border-t border-purple-50 bg-white">
          <Footer />
        </footer>
        
      </main>
    </div>
  )
}

export default Layout;