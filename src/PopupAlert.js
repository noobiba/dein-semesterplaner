import React from 'react';

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <p>
          ACHTUNG! <br />
          Für {this.props.returnUrgentModuleTitles + " "}
          läuft die Wiederholbarkeitsfrist ab. <br />
          Du musst dies in diesem Semester abschließen.
        </p>
        <button onClick={this.props.dismissPopup}> Ignorieren </button>
        <button onClick={this.props.selectUrgentModules}> Alle auswählen </button>
      </div>
    )
  }
}

export default Popup
