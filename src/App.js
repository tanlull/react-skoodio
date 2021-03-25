import logo from './logo.svg';
import './App.css';

function Cell(props) {
  return (
    <div className="cell">{props.number}</div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="board">
        <Cell number={3} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
        <Cell number={4} />
      </div >
    </div >
  );
}

export default App;
