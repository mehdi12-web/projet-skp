import Link from 'next/link';
import { Home, MapPin as MapIcon, Calendar, User } from 'lucide-react';

export const BottomNav = () => (
  <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-100 flex items-center justify-around z-50 md:hidden">
    <Link href="/" className="flex flex-col items-center text-skp-turquoise"><Home size={20} /><span className="text-[10px]">Accueil</span></Link>
    <Link href="/carte" className="flex flex-col items-center text-gray-400"><MapIcon size={20} /><span className="text-[10px]">Carte</span></Link>
    <Link href="/calendrier" className="flex flex-col items-center text-gray-400"><Calendar size={20} /><span className="text-[10px]">Agenda</span></Link>
    <Link href="/compte" className="flex flex-col items-center text-gray-400"><User size={20} /><span className="text-[10px]">Profil</span></Link>
  </div>
);