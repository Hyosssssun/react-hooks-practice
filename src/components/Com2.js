import { useContext } from 'react';
import { makePink } from './ForUseContext';

const Com2 = () => {
  const { isPink, setIsPink } = useContext(makePink);
  return (
    <div>
      <button onClick={() => setIsPink(!isPink)}>Make it pink!</button>
      {isPink ? (
        <p style={{ color: 'pink' }}>hi I am Component2 in pink</p>
      ) : (
        <p>hi I am Component2 not in pink</p>
      )}
    </div>
  );
};

export default Com2;
