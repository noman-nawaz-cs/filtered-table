import FilterBar from './components/FilterNavigation/FilterBar';
import StagePopup from './components/StagePopup/StagePopup';
import Popup from './components/Popup/Popup';
import RangePopup from './components/RangePopup/RangePopup';
import './App.scss';
import TableLayout from './components/TableLayout/TableLayout';
import { DataProvider } from './context/DataContext';
import TableContainer from './components/TableContainer/TableContainer';

function App() {
  
  return (
    <DataProvider>
      <div className='App'>
        <TableContainer/>
      </div>
    </DataProvider>
    
    
  );
}

export default App;
