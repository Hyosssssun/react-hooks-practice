import './App.css';
import ForUseCallback from './components/ForUseCallback';
import ForUseMemo from './components/ForUseMemo';
import ForUseReducer from './components/ForUseReducer';
import ForUseReducer2 from './components/ForUseReducer2';

function App() {
  return (
    <div className='App'>
      <ForUseCallback />
      <ForUseMemo />
      <ForUseReducer />
      <ForUseReducer2 />
    </div>
  );
}

export default App;
