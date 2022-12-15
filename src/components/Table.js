import { useState, useEffect, useRef } from "react";
import "../assets/css/Table.css";

const Table = ({ reset, setReset, winner, setWinner }) => {

	const [change, setChange] = useState(0);

	const [value, setValue] = useState(['', '', '', '', '',
		'', '', '', ''])

	const TableRef = useRef(null);

	const draw = (event, index) => {
		if (value[index - 1] === '' && winner === '') {

			const current = change === 0 ? "X" : "O"

			value[index - 1] = current;

			event.target.innerText = current;

			setChange(change === 0 ? 1 : 0)
		}
	}

	useEffect(() => {

		setValue(['', '', '', '', '', '', '', '', '']);

		const coloum = TableRef.current.children

		for (let i = 0; i < 9; i++) {
			coloum[i].innerText = '';
		}

		setChange(0);

		setWinner('');
		setReset(false);
	}, [reset, setReset, setWinner])


	useEffect(() => {

		const checkHorizontal = () => {
			let ans = false;
			for (let i = 0; i < 9; i += 3) {
				ans |= (value[i] === value[i + 1] &&
				value[i] === value[i + 2] &&
				value[i] !== '')
			}
			return ans;
		}

		const checkVertical = () => {
			let ans = false;
			for (let i = 0; i < 3; i++) {
				ans |= (value[i] === value[i + 3] &&
				value[i] === value[i + 6] &&
				value[i] !== '')
			}
			return ans;
		}

		const checkDiagonal = () => {
			return ((value[0] === value[4] &&
			value[0] === value[8] && value[0] !== '') ||
			(value[2] === value[4] && value[2] === value[6] &&
			value[2] !== ''));
		}

		const checkWinner = () => {
			return (checkHorizontal() || checkVertical() || checkDiagonal());
		}

		const checkTie = () => {
			let count = 0;
			value.forEach((cell) => {
				if (cell !== '') {
					count++;
				}
			})
			return count === 9;
		}

		if (checkWinner()) {
			setWinner(change === 0 ? "Player B Wins!" :
			"Player A Wins!");
		} else if (checkTie()) {

			setWinner("It's a Tie!");
		}

	})

	return (
		<div ref={TableRef} className="Table">
			<div className="input inputValue1"
				onClick={(e) => draw(e, 1)}></div>
			<div className="input inputValue2"
				onClick={(e) => draw(e, 2)}></div>
			<div className="input inputValue3"
				onClick={(e) => draw(e, 3)}></div>
			<div className="input inputValue4"
				onClick={(e) => draw(e, 4)}></div>
			<div className="input inputValue5"
				onClick={(e) => draw(e, 5)}></div>
			<div className="input inputValue6"
				onClick={(e) => draw(e, 6)}></div>
			<div className="input inputValue7"
				onClick={(e) => draw(e, 7)}></div>
			<div className="input inputValue8"
				onClick={(e) => draw(e, 8)}></div>
			<div className="input inputValue9"
				onClick={(e) => draw(e, 9)}></div>
		</div>
	)
}

export default Table;
