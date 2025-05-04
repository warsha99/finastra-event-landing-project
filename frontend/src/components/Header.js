import { CogentLogo } from './Logos';

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 lg:px-12 bg-white shadow-sm">
      <CogentLogo className="h-10" />
      <nav className="hidden md:flex space-x-8">
        <a href="#about" className="text-gray-700 hover:text-finastra-blue">About</a>
        <a href="#agenda" className="text-gray-700 hover:text-finastra-blue">Agenda</a>
        <a href="#register" className="text-gray-700 hover:text-finastra-blue">Register</a>
      </nav>
  
    </header>
  );
}