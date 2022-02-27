import React, { useState } from 'react'
import './Taskbar.scss'

function Taskbar() {

  const [openedWindows, setOpenedWindows] = useState([
    //{ openedWindow: "" }
  ]);

  /*const handleWindowRemove = (index) => {
    const list = { ...openedWindows };
    list.splice(index, 1);
    setOpenedWindows(list);
  }

  const handleWindowAdd = () => {
    setOpenedWindows([...openedWindows, { openedWindow: "" }]);
  }*/

  return (
    <div className="taskbar">
      <button className="menuButton">+</button>

      {openedWindows.map((singleWindow, index) => (
        <h1>Sus</h1>
      ))}
    </div>
  )
}

export default Taskbar