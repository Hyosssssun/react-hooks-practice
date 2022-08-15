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
			<Title text='useCallback' />
			<p>
				Open the console. <br /> When you press the button, the only part using
				changed states are being rendered.
			</p>
			<Count text='Plus' count={numForPlus} />
			<Button handleClick={plus} text='Plus-callback'>
				PLUS 100
			</Button>
			<br />
			<Count text='Minus' count={numForMinus} />
			<Button handleClick={minus} text='Minus-callback'>
				MINUS 1
			</Button>
			<p>--------------------------------------</p>
		</div>
	);
};

export default ForUseCallback;
