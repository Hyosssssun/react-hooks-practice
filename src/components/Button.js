import React from 'react';

const Button = ({ handleClick, children, text }) => {
	console.log(`Rendering button - ${text}`);
	return (
		<div>
			<button onClick={handleClick}>{children}</button>
		</div>
	);
};

export default React.memo(Button);
// export default Button;
