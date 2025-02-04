import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, FolderKanban, GraduationCap, Mail, Menu, X } from 'lucide-react';
export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    {
      path: '/',
      name: 'Home',
      icon: <Home size={20} />,
    },
    {
      path: '/projects',
      name: 'Projects',
      icon: <FolderKanban size={20} />,
    },
    {
      path: '/education',
      name: 'Education',
      icon: <GraduationCap size={20} />,
    },
    {
      path: '/contact',
      name: 'Contact',
      icon: <Mail size={20} />,
    },
  ];
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 md:hidden text-gray-300 bg-[#112240] p-2 rounded"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <aside
        className={`fixed md:static w-[240px] h-screen bg-[#112240] p-6 S
                   transform transition-transform duration-200 ease-in-out z-40
                   ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                   md:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#64ffda]">SOKNA CS.</h1>
          </div>
          <nav className="flex-1">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({
                      isActive,
                    }) => `flex items-center space-x-3 p-2 rounded transition-colors duration-200 
                      ${
                        isActive
                          ? 'text-[#64ffda] bg-[#0a192f]/50'
                          : 'text-gray-300 hover:text-[#64ffda]'
                      }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
