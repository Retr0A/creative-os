import React from 'react'
import Draggable, {DraggableCore} from 'react-draggable'
import '../Window.scss'

export default class TextWriter extends React.Component {
  render() {
    return (
      <Draggable
      defaultPosition={{x: 80, y: 80}}
      handle=".topWindowBar">
      <div className="window">
          <div className="topWindowBar">
              <button className="closeWindowButton">X</button>
              <h4 className="windowTitle">Text Writer</h4>
          </div>
          <div className="windowContent">
            <h1>Window Content</h1>
          </div>
      </div>
      </Draggable>
    )
  }
}
