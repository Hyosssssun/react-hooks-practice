import { useContext } from 'react';
import { makePink } from './ForUseContext';

const Com1 = () => {
  const { isPink, setIsPink } = useContext(makePink);
  return (
    <div>
      <button onClick={() => setIsPink(!isPink)}>Make it pink!</button>
      {isPink ? (
        <p style={{ color: 'pink' }}>hi I am Component in pink</p>
      ) : (
        <p>hi I am Component not in pink</p>
      )}
    </div>
  );
};

export default Com1;
