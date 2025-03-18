import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

function App() {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Explore',
      description: "Peek at your data or do quick visualizations to verify its usefulness",
      buttonText: 'Explore',
      buttonRoute: '/explore',
    },
    {
      title: 'Convert',
      description: 'Convert files from one type to another',
      buttonText: 'Convert',
      buttonRoute: '/convert',
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center bg-[#0f0618] overflow-hidden">
      <div className="text-white text-5xl font-bold mb-12">Transitus</div>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {cards.map((card) => (
          <Card
            key={card.title}
            className="w-80 h-96 bg-[#1a0d2e] text-white flex flex-col justify-between"
          >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Additional content can be added here if needed */}
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => navigate(card.buttonRoute)}
              >
                {card.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default App;
