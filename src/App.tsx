import "./App.css";
import Card from "./components/ui/card";

function App() {
  return (
    <main className="container">
      <div className="title">Transitus</div>
      <div className="card-container">
        <Card title="Explore" description="Peak at your data or do quick visualizations to verify it's usefulness" />
        <Card title="Convert" description="Convert files from one type to another" />
      </div>
    </main>
  );
}

export default App;
