import React from 'react';
import { connect } from 'react-redux';
import {Visible} from '../../services';
import "./banner.js";

// imgsF
export @connect(({ visible }) => ({ visible }))  class Banner extends React.Component {
  constructor(props) {
      super(props);
      Visible.instance().retrieve();
  }
    render() {
        let imgs = this.props.visible;
        return (
            <div className="banner">
                {(imgs instanceof Array) ?
                    imgs.map(i => <Image src={i} key={i} />) : null}
            </div>
        );
    }
}

// src
function Image(props) {
    let src = props.src;
    return (
        <div>
            <image src={src} />
        </div>
    );
}