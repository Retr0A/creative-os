import './App.scss';

import Desktop from './Desktop';
import Taskbar from './Taskbar';
import WindowManager from './WindowingSystem/WindowManager';

function App() {
  return (
    <div className="app">
      <Desktop/>
      <WindowManager/>
      <Taskbar/>
    </div>
  );
}

export default App;
