import React from 'react';

const Title = ({ text }) => {
	console.log('-------------------------Title rendered');
	return <h2>{text}</h2>;
};

export default React.memo(Title);
// export default Title;
