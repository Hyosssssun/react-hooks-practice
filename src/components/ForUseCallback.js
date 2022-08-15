import { useState, useCallback } from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';

const ForUseCallback = () => {
	const [numForPlus, setNumForPlus] = useState(1000);
	const [numForMinus, setNumForMinus] = useState(1000);

	// const plus = () => setNumForPlus(numForPlus + 100);
	// const minus = () => setNumForMinus(numForMinus - 1);

	const plus = useCallback(() => setNumForPlus(numForPlus + 100), [numForPlus]);
	const minus = useCallback(
		() => setNumForMinus(numForMinus - 1),
		[numForMinus]
	);

	return (
		<div>
			<Title />
			<Count text='Plus' count={numForPlus} />
			<Button handleClick={plus}>PLUS 100</Button>
			<Count text='Minus' count={numForMinus} />
			<Button handleClick={minus}>MINUS 1</Button>
		</div>
	);
};

export default ForUseCallback;
