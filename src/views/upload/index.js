import React from 'react';

import Layout from '../../widgets/LayoutFlowSimilar';
import { Service } from '../../services';

import './styles.css';

type layer = {};

export class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectImgs: []
        };
        this.formIndex = 0;
        this.form = new FormData();
        this.select = this.select.bind(this);
        this.submit = this.submit.bind(this);
        this.reset = this.reset.bind(this);
    }
    select(event) {
        let file = event.target.files[0];
        this.form.append(this.formIndex++ + "", file);
        let reader = new FileReader();
        reader.onload = event => this.setState(p => ({ selectImgs: [...p.selectImgs, { data: event.target.result, name: file.name }] }));
        reader.onerror = error => console.error(error);
        reader.readAsDataURL(file);

    }
    reset() {
        this.form = new FormData();
        this.setState({selectImgs: []});
        this.formIndex = 0;
    }
    submit() {
        var index = layer.load(1, {
            shade: [0.1, '#fff'] //0.1透明度的白色背景
        });
        Service.instance().upload(this.form)
            .then(r => {
                if (r && r.status == 0)
                    this.reset();
                layer.close(index);
                layer.alert((r && r.msg) ? r.msg : "请求错误 !", {
                    title: "提交结果",
                    // icon: 5,
                    skin: 'layer-ext-moon' 
                  });
            })
            .catch(e =>  {
                console.error("upload", e);
                layer.close(index);                
            });
    }
    render() {
        let imgs = this.state.selectImgs;
        return (
            <div className="x-upload-root">
                <div>
                    <div >
                        <div className="btn btn-default">
                            <label htmlFor="upload-add" style={{ margin: 0 }}>添加
                        <input onChange={this.select} type="file" id="upload-add" style={{ display: "none" }} />
                            </label>
                        </div>
                    </div>

                    <div>
                        <button className="btn btn-primary" onClick={this.submit}>提交</button>
                    </div>
                </div>
                <div>
                    <Layout elWidth={32}>
                        {imgs.map(({ data, name }, p) => (
                            <div key={name} style={{ width: "32rem", height: "18rem" }} className="well well-sm">
                                <img src={data} style={{ width: "100%", height: "100%" }} alt="" />
                            </div>
                        ))}
                    </Layout>
                </div>
            </div>
        );
    }
}