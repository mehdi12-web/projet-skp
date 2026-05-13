import { Search, MapPin, Ticket, Utensils, TreePine } from 'lucide-react';

export default function HomePage() {
  const categories = [
    { name: "Lieux", icon: <MapPin size={20} /> },
    { name: "Événements", icon: <Ticket size={20} /> },
    { name: "Restos", icon: <Utensils size={20} /> },
    { name: "Parcs", icon: <TreePine size={20} /> },
  ];

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-[#F8FAFB] pb-20">
      
      {/* 1. Hero : Message de bienvenue */}
      <div className="px-6 pt-10 pb-6">
        <h1 className="text-3xl font-extrabold text-[#1A1A2E] leading-tight">
          Découvrez <br />
          <span className="text-[#00B4C8]">Besançon</span>
        </h1>
        <p className="text-gray-500 mt-2">Que voulez-vous explorer aujourd'hui ?</p>
      </div>

      {/* 2. Barre de recherche (L'élément que tu as testé dans ta capture) */}
      <div className="px-6 mb-8">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#00B4C8] transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher un monument, une rue..." 
            className="w-full h-14 pl-12 pr-4 bg-white rounded-[16px] shadow-sm border-none outline-none focus:ring-2 focus:ring-[#00B4C8] transition-all text-sm"
          />
        </div>
      </div>

      {/* 3. Filtres horizontaux (Pills) */}
      <div className="flex gap-3 overflow-x-auto px-6 pb-4 no-scrollbar">
        {categories.map((cat) => (
          <button 
            key={cat.name}
            className="flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-full bg-white text-[#1A1A2E] font-semibold shadow-sm border border-gray-100 hover:bg-[#00B4C8] hover:text-white transition-all"
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* 4. Section À la Une (Ta carte de 16px avec ombre portée) */}
      <div className="px-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#1A1A2E]">À la une</h2>
          <button className="text-[#00B4C8] text-sm font-bold">Voir tout</button>
        </div>

        {/* La Carte SKP */}
        <div className="bg-white rounded-[16px] overflow-hidden shadow-lg border border-black/5">
          <div className="h-48 bg-gray-200 relative">
            <img 
              src="https://images.unsplash.com/photo-1595101683110-39485188f615?q=80&w=800" 
              className="w-full h-full object-cover"
              alt="Citadelle"
            />
            <div className="absolute top-4 right-4 bg-[#00B4C8] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-lg">
              Incontournable
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-[#1A1A2E]">Citadelle de Besançon</h3>
            <p className="text-gray-500 text-sm mt-1 mb-4 line-clamp-2">
              Explorez les remparts de Vauban et profitez d'une vue unique sur la boucle du Doubs.
            </p>
            <button className="w-full py-3 bg-[#00B4C8] text-white rounded-xl font-bold transition-transform active:scale-95 shadow-md shadow-[#00B4C8]/20">
              Découvrir
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}