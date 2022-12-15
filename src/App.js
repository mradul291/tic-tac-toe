import { useState } from 'react';
import Table from './components/Table';
import Description from "./components/Description";
import "./assets/css/App.css";


function App() {

	const [reset, setReset] = useState(false);
	const [winner, setWinner] = useState('');

	const resetTable = () => {
		setReset(true);
	}

	return (
		<div className="App">
			<div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
				<div className='winner-text'>{winner}</div>
				<button onClick={resetTable}>
					Restart
				</button>
			</div>
      <Description />
			<Table reset={reset} setReset={setReset} winner={winner}
				setWinner={setWinner} />
			
		</div>
	);
}

export default App;
