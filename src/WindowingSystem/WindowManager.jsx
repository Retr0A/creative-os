import React,{ setState, useState } from 'react'
import './WindowManager.scss'
import TextWriter from './BuildinApps/TextWriter'


function WindowManager() {

    return (
        <div className="windowManager">
            <button>Test Button</button>
            <TextWriter/>
        </div>
    )
}

export default WindowManager