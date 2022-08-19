import './App.css';
import ForUseCallback from './components/ForUseCallback';
import ForUseMemo from './components/ForUseMemo';
import ForUseReducer from './components/ForUseReducer';
import ForUseReducer2 from './components/ForUseReducer2';
import ForUseContext from './components/ForUseContext';

function App() {
  return (
    <div className='App'>
      <ForUseCallback />
      <ForUseMemo />
      <ForUseReducer />
      <ForUseReducer2 />
      <ForUseContext />
    </div>
  );
}

export default App;
