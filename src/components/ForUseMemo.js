import { useState, useMemo } from 'react';
import Title from './Title';

const ForUseMemo = () => {
	const [numForPlus, setNumForPlus] = useState(1000);
	const [numForMinus, setNumForMinus] = useState(1000);

	const plus = () => setNumForPlus(numForPlus + 100);
	const minus = () => setNumForMinus(numForMinus - 1);

	const isEven = useMemo(() => {
		let i = 0;
		while (i < 1000000000) i++;
		return numForMinus % 2 === 0;
	}, [numForMinus]);

	// const isEven = () => {
	// 	let i = 0;
	// 	while (i < 1000000000) i++;
	// 	return numForMinus % 2 === 0;
	// }

	return (
		<div>
			<Title text='useMemo' />
			<p>
				Press the button. <br /> When you pressed +100 button, it happenes very
				quick. <br /> But when you press -1 button, it takes longer than +
				button. <br /> The reason is, the heavy function 'isEven' is being
				rendered only when its parent div pressed because of useMemo.
			</p>
			<div>
				<button onClick={plus}>{numForPlus} + 100</button>
			</div>
			<br />
			<div>
				<button onClick={minus} text='Minus-memo'>
					{numForMinus} - 1
				</button>
				<span>{isEven ? 'EVEN' : 'ODD'}</span>
				{/* <span>{isEven() ? 'EVEN' : 'ODD'}</span> */}
			</div>
		</div>
	);
};

export default ForUseMemo;
