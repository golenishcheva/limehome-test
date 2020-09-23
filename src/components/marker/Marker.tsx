import React from 'react';
import './Marker.css';

interface Props {
  id: string,
  isMarkerClicked: string,
  active: boolean,
  cb: Function
  text: string,
  lat: number,
  lng: number
};

class Marker extends React.Component <Props>{

  render() {

    return (
      <div onClick={() => this.props.cb(this.props.id)}>
        <img className={this.props.isMarkerClicked.length > 0 && this.props.active ? 'active' : 'inactive'} src={this.props.active ? 'home_icon-active.svg': 'home_icon-default.svg'} alt='Marker'/>
      </div>
    );
  }
}

export default Marker;