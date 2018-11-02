import React from 'react';
import { connect } from 'react-redux';
import { Service } from '../../services';

// imgsF

class OBanner extends React.Component {
    constructor(props) {
        super(props);
        if (!props.visible)
            Service.instance().retrieve();

        this.state = {
            imgHeight: 0
        };
        this.calcul = this.calcul.bind(this);
    }

    calcul(el: HTMLElement) {
        if (el)
            this.setState({ imgHeight: 9 / 18 * (el.clientWidth) })
    }
    render() {
        let imgs = this.props.visible || [];
        if (imgs.length === 0)
            return (
                <div className="panel panel-default">
                    <div className="panel-body" style={{ 
                        minHeight: 360, 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        fontSize: 22 }}>
                        没有图片被展示
                    </div>
                </div>
            );
        return (
            <div style={{ display: "flex", width: "100%", justifyContent: "center", flexDirection: "row" }}>
                <div ref={this.calcul} style={{ width: "60%" }} id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    {/* <ol className="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol> */}

                    <div className="carousel-inner" role="listbox">

                        {imgs.map(({ url }, p) => (
                            <div key={p} className={"item" + (!p ? " active" : "")}>
                                <img src={url} alt="" style={{ width: "100%", height: this.state.imgHeight }} />
                                <div className="carousel-caption">
                                </div>
                            </div>
                        ))}
                    </div>

                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
        // return (
        //     <div className="banner">
        //         {(imgs instanceof Array) ?
        //             imgs.map(i => <Image src={i} key={i} />) : null}
        //     </div>
        // );
    }
}
export const Banner = connect(state => ({ visible: state.visible }))(OBanner);

// src
function Image(props) {
    let src = props.src;
    return (
        <div>
            <img src={src} alt="" />
        </div>
    );
}

