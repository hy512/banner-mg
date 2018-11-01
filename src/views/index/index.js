import React from 'react';
import "./style.css";

import {Banner} from './banner';
export class Index extends React.Component {
    
    render() {
        return (
            <div className="root">
              <Banner />  
            </div>
        );
    }
}