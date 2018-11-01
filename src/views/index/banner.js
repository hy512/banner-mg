import React from 'react';
import { connect } from 'react-redux';
import { Visible } from '../../services';

// imgsF

class OBanner extends React.Component {
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
export const Banner = connect(state => ({ visible: state.visible }))(OBanner);

// src
function Image(props) {
    let src = props.src;
    return (
        <div>
            <img src={src} />
        </div>
    );
}

