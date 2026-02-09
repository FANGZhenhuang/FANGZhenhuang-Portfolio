import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { personalInfo } from '../data';
import { ArrowLeft } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleScroll = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete and component to mount
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-black selection:text-white w-full max-w-[100vw] overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full">
        {/* Updated for more transparency and stronger frosted effect (backdrop-blur-2xl, lower opacity) */}
        <div className="absolute inset-0 bg-zinc-50/80 backdrop-blur-xl border-b border-zinc-200/40 supports-[backdrop-filter]:bg-zinc-50/40" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            {!isHome && (
              <Link 
                to="/" 
                className="p-2 -ml-2 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-black transition-all duration-300"
              >
                <ArrowLeft size={20} />
              </Link>
            )}
            <Link to="/" className="flex items-center gap-1.5 text-lg font-semibold tracking-tight text-zinc-900 group">
              <div className="w-11 h-11">
                <img 
                  src="https://portfolio-image-1401308004.cos.ap-guangzhou.myqcloud.com/UploadforWEB/webicon2.png" 
                  alt="Logo"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span>{personalInfo.name}</span>
            </Link>
          </div>

          <nav className="flex items-center gap-6 md:gap-8">
            <button 
              onClick={() => handleScroll('portfolio')}
              className="text-sm font-medium text-zinc-500 hover:text-black transition-colors tracking-wide cursor-pointer"
            >
              WORK
            </button>
            <button 
              onClick={() => handleScroll('contact')}
              className="text-sm font-medium text-zinc-500 hover:text-black transition-colors tracking-wide cursor-pointer"
            >
              CONTACT
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-20 w-full max-w-full overflow-x-hidden relative">
        {children}
      </main>

      <footer className="border-t border-zinc-100 bg-zinc-50/50 mt-1 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            <div className="break-words">
              <h2 className="text-2xl font-semibold tracking-tight mb-6">🤝Contact</h2>
              <div className="space-y-2 text-zinc-500">
                <p>📞Tel: <a href={`tel:${personalInfo.contact.phone}`} className="hover:text-black hover:underline underline-offset-4 decoration-zinc-300">{personalInfo.contact.phone}</a></p>
                <p>📧Email: <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-black hover:underline underline-offset-4 decoration-zinc-300 break-all">{personalInfo.contact.email}</a></p>
                <p>📍{personalInfo.location}</p>
              </div>
            </div>
            <div className="flex flex-col justify-end md:items-end">
              <p className="text-zinc-400 text-sm">
                © {new Date().getFullYear()} {"FANG Zhenhuang Portfolio"}. All Rights Reserved.
              </p>
              <p className="text-zinc-300 text-xs mt-2">
                Website Designed & Made by FANG Zhenhuang.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;