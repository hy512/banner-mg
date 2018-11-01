import React from 'react';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            tabs: [
                { to: "/", text: "预览" },
                { to: "/visible", text: "修改" },
                { to: "/upload", text: "添加" }
            ]
        };
    }
    switch(index) {
        this.setState({active: index});
    }
    render() {
        let tabs = this.state.tabs;
        let active = this.state.active;
        return (
            <div>
                <ul className="nav nav-tabs">
                    {tabs.map((i, p) => (
                        <li key={p} role="presentation" className={active === p ? "active" : ""} onClick={() => this.switch(p)}>
                            <Link to={i.to}>{i.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}