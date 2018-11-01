import React from 'react';

import './styles.css';
export class Upload extends React.Component {
    render() {
        return (
            <div className="x-upload-root">
                <div className="well well-sm">
                    <label for="upload-add" style={{ margin: 0 }}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </label>
                    <input type="file" id="upload-add" style={{ display: "none" }} />
                </div>
            </div>
        );
    }
}