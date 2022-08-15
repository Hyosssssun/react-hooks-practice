import React from 'react';

const Title = () => {
	console.log('Title rendered');
	return <h2>useCallback</h2>;
};

export default React.memo(Title);
