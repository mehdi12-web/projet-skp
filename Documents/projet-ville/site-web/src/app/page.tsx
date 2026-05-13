import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-bold text-text">Projet SKP - Besançon</h1>
      
      <Card className="max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Bienvenue</h2>
        <p className="text-text mb-6">
          Ceci est un exemple de carte avec un rayon de courbure de 16px et une ombre portée personnalisée.
        </p>
        <div className="flex gap-4">
          <Button variant="primary">Principal</Button>
          <Button variant="secondary">Secondaire</Button>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Card>
          <h3 className="text-xl font-medium mb-2">Inter & Poppins</h3>
          <p className="font-inter">Ce texte utilise la police Inter.</p>
          <p className="font-poppins font-bold mt-2">Ce titre utilise Poppins.</p>
        </Card>
        
        <Card>
          <h3 className="text-xl font-medium mb-2">Couleurs</h3>
          <div className="flex gap-2 mt-4">
            <div className="w-10 h-10 bg-primary rounded-full" title="Primary"></div>
            <div className="w-10 h-10 bg-secondary rounded-full" title="Secondary"></div>
            <div className="w-10 h-10 bg-background border border-gray-200 rounded-full" title="Background"></div>
            <div className="w-10 h-10 bg-text rounded-full" title="Text"></div>
          </div>
        </Card>
      </div>
    </main>
  );
}
