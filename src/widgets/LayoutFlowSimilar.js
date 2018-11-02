import React from 'react';



// import { calculateUnit } from '~/util/adapt';

// items 元素的数组
// elWidth 每个元素的预计宽度
// @calculateUnit
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: null,
            height: null
        };
    }
    // static getDerivedStateFromProps(props, state) {
    //     let next;
    //     state.items = props.children;
    //     return next || state;
    // }
    renderCount() {
        let container: HTMLElement = this.container;
        if (!container) return;
        // l.print("开始计算.")
        let width = this.container.clientWidth,
            // items = newItems || this.props.children || this.items;
            items = this.props.children ? [...this.props.children] : [];

        if (!width || !(items instanceof Array) || items.length === 0) return;
        let elWidth = this.props.elWidth,
            rowCount = Math.floor(width / elWidth),
            mod = items.length % rowCount,
            supply = mod === 0 ? 0 : (rowCount - items.length % rowCount);

        // l.print("width: " + width, "elWidth: " + elWidth, "length: " + items.length, "rowCount: " + rowCount, "supply: " + supply);
        // alert(["width: " + width, "elWidth: " + elWidth, "length: " + items.length, "rowCount: " + rowCount, "supply: " + supply].join("\n"));
        while (supply-- > 0) {
            items.push(<div key={String(0 - supply)} style={{
                width: elWidth + "rem",
                // height: 1,
                // backgroundColor: "rgba(0,0,0,0)" 
                backgroundColor: "red"
            }}></div>);
        }

        return items;
    }
    render() {
        // if (!this.props.children || this.props.children.length === 0) return null;
        let items = this.renderCount();

        return (
            <div
                ref={r => {
                    if (!this.state.width) this.setState({ width: r.clientWidth });
                    this.container = r;
                }}
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    display: "flex"
                }}>
                {items}
            </div>
        )
    }
}