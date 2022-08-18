import { useReducer } from 'react';
import Title from './Title';

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TG_COLOR: 'tgColor',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTION.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION.NEW_USER_INPUT:
      return { ...state, userInput: action.payload };
    case ACTION.TG_COLOR:
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
}

const ForUseReducer2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: false,
    userInput: '',
  });
  //   const [count, setCount] = useState(0);
  //   const [userInput, setUserInput] = useState('');
  //   const [color, setColor] = useState(false);

  return (
    <div>
      <Title text='useReducer2' />
      <section>
        <input
          type='text'
          value={state.userInput}
          //   value={userInput}
          onChange={(e) =>
            dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
          }
          //   onChange={(e) => setUserInput(e.target.value)}
        />
        <p style={{ color: state.color ? '#000' : '#898' }}>
          {state.userInput}
        </p>
        {/* <p style={{ color: color ? '#000' : '#898' }}>{userInput}</p> */}
      </section>
      <section>
        <button onClick={() => dispatch({ type: ACTION.TG_COLOR })}>
          Change color
        </button>
        {/* <button onClick={() => setColor(!color)}>Change color</button> */}
      </section>
      <section>
        <p style={{ color: state.color ? '#000' : '#898' }}>{state.count}</p>
        {/* <p style={{ color: color ? '#000' : '#898' }}>{count}</p> */}
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>
          PLUS
        </button>
        {/* <button onClick={() => setCount((prev) => prev + 1)}>PLUS</button> */}
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>
          MINUS
        </button>
        {/* <button onClick={() => setCount((prev) => prev - 1)}>MINUS</button> */}
      </section>
    </div>
  );
};

export default ForUseReducer2;
