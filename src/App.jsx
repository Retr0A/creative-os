import './App.scss';

import Desktop from './Desktop';
import Taskbar from './Taskbar';

function App() {
  return (
    <div className="app">
      <Desktop/>
      <Taskbar/>
    </div>
  );
}

export default App;
