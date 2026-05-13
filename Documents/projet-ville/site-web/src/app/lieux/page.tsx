import Image from 'next/image';

export default function LieuxPage() {
  const lieux = [
    { name: "La Citadelle", cat: "Monuments", img: "https://images.unsplash.com/photo-1595101683110-39485188f615?q=80&w=400" },
    { name: "Musée des Beaux-Arts", cat: "Musées", img: "https://images.unsplash.com/photo-1554941068-a252680d25d9?q=80&w=400" },
    { name: "Parc Micaud", cat: "Parcs", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400" },
    { name: "Théâtre Ledoux", cat: "Théâtres", img: "https://images.unsplash.com/photo-1503095396549-80705bc068d0?q=80&w=400" },
    { name: "Horloge Astronomique", cat: "Historique", img: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=400" },
    { name: "Porte Noire", cat: "Historique", img: "https://images.unsplash.com/photo-1548502499-ef49e8cf98d4?q=80&w=400" }
  ];

  const categories = ["Tous", "Monuments", "Musées", "Parcs", "Théâtres", "Historique"];

  return (
    <div className="px-4 pt-8 pb-20">
      <h1 className="text-3xl font-bold text-skp-black mb-6">Lieux <span className="text-skp-turquoise">Incontournables</span></h1>

      {/* Filtres Catégories (2 lignes de pills comme demandé) */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium border ${cat === 'Tous' ? 'bg-skp-turquoise text-white border-skp-turquoise' : 'bg-white text-skp-gray border-gray-200'}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {lieux.map((lieu) => (
          <div key={lieu.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-black/5 flex flex-col">
            <div className="h-32 bg-gray-200 relative">
              <Image src={lieu.img} alt={lieu.name} fill style={{ objectFit: 'cover' }} />
              <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-md text-[10px] font-bold text-skp-turquoise uppercase">
                {lieu.cat}
              </div>
            </div>
            <div className="p-3 flex-grow flex flex-col justify-between">
              <h2 className="font-bold text-sm text-skp-black mb-2 leading-tight">{lieu.name}</h2>
              <button className="w-full py-2 bg-skp-light text-skp-turquoise rounded-xl text-xs font-bold hover:bg-skp-turquoise hover:text-white transition-colors">
                Détails
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}