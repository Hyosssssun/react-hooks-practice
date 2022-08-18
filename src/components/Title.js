import React from 'react';

const Title = ({ text }) => {
	console.log('-------------------------Title rendered');
	return (
		<div>
			<p>--------------------------------------</p>
			<h2>{text}</h2>
		</div>
	);
};

export default React.memo(Title);
// export default Title;
