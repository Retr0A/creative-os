import React,{ ReactDOM, useState } from 'react'
import './WindowManager.scss'
import TextWriter from './BuildinApps/TextWriter'

function WindowManager() {
    
    const [openedWindows, setOpenedWindows] = useState([
    ]);
    
    const handleWindowAdd = () => {
        setOpenedWindows([...openedWindows, { openedWindow: "" }]);
    }

    const handleWindowRemove = (index) => {
        const list = [...openedWindows];
        list.splice(index, -1);
        setOpenedWindows(list);
        //alert(index);
    }

    return (
        <div className="windowManager">
            <button onClick={handleWindowAdd}>Test Button</button>
            
            {openedWindows.map((singleWindow, index) => (
                <TextWriter index={index} closeFunc={handleWindowRemove} />
            ))}
        </div>
    )
}

export default WindowManager