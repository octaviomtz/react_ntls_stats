import './App.css';
import { TextBlock } from '../src/components/TextBlock.jsx';
import { PlotTest } from '../src/components/PlotTest.jsx';
import { DataParser } from '../src/components/DataParser.jsx';
import { Chart } from '../src/components/Chart.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>measurements analysis</p>
        <Chart />
      </header>
    </div>
  );
}

export default App;
