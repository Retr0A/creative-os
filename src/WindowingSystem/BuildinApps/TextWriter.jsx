import React from 'react'
import Draggable from 'react-draggable'
import '../Window.scss'
import './TextWriter.scss'

export default class TextWriter extends React.Component {
  
  constructor(props) {
    super(props);
    this.closeFunc = props.closeFunc;
    this.index = props.index;
  }

  render() {
    return (
      <Draggable
      defaultPosition={{x: 80, y: 80}}
      handle=".topSideWindowBar"
      bounds=".windowManager">
      <div className="window">
          <div className="topWindowBar">
              <button onClick={() => this.closeFunc(this.index)} className="closeWindowButton">X</button>
              <div className="topSideWindowBar">
                <h4 className="windowTitle">Text Writer</h4>
              </div>
          </div>
          <div className="windowContent">
            { /*Content Here*/ }
            <textarea className="textwriterText"></textarea>
            { /*---*/ }
          </div>
      </div>
      </Draggable>
    )
  }
}
