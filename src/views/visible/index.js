import React from 'react';
import { connect } from 'react-redux';

import { Service } from '../../services';
import Layout from '../../widgets/LayoutFlowSimilar';
import { visibleTgl, imgsRmv } from '../../services/actions';

type layer = {};

class OVisible extends React.Component {
    static requesting = false;
    constructor(props) {
        super(props);
        this.discard = this.discard.bind(this);
        this.visible = this.visible.bind(this);
        this.reset = this.reset.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            visible: null,
            imgs: null,
            discard: []
        };
    }
    static getDerivedStateFromProps(props, state) {
        let visible, next = { ...state };

        // 没有图片，重新请求
        if (!props.imgs) {
            // 设置请求延时
            if (!OVisible.requesting) {
                Service.instance().retrieve();
                OVisible.requesting = true;
                window.setTimeout(() => OVisible.requesting = false, 3000);
            }
            return state;
        }

        if (!next.visible && props.visible) {
            visible = props.visible.map(i => i.id);
            next.visible = visible;
        }
        if (!next.imgs) next.imgs = props.imgs;


        return next;
    }

    discard(id) {
        // let res = window.confirm("确认删除图片?");
        // if (res) this.props.imgsRmv(id);
        this.setState(p => ({ imgs: p.imgs.filter(i => (i.id !== id)), discard: [...p.discard, id] }));
    }

    visible(id) {
        if (!this.state.visible) return;
        let next = [...this.state.visible];
        if (next.includes(id))
            next = next.filter(i => (i !== id));
        else
            next.push(id);
        this.setState({ visible: next });
    }
    reset() {
        this.setState({ visible: null, imgs: null });
    }
    submit() {
        var index = layer.load(1, {
            shade: [0.1, '#fff'] //0.1透明度的白色背景
        });
        Service.instance().update(this.state.visible || [], this.state.discard)
            .then(r => {
                if (r && r.status == 0)
                    this.reset();
                // alert((r && r.msg) ? r.msg : "请求错误 !");
                layer.close(index);
                layer.alert((r && r.msg) ? r.msg : "请求错误 !", {
                    title: "提交结果",
                    // icon: 5,
                    skin: 'layer-ext-moon'
                });
            })
            .catch(e => {
                console.error("upload", e);
                layer.close(index);
            });
    }

    render() {
        let imgs = this.state.imgs || [],
            visible: Array<string> = this.state.visible || [];

        return (
            <div className="x-visible-root">
                <div className="well well-sm">
                    <button className="btn btn-primary" onClick={this.submit} style={{ marginRight: 15 }}>保存</button>
                    <button className="btn btn-warning" onClick={this.reset}>重置</button>
                </div>
                <Layout elWidth={32}>
                    {imgs.map(({ id, url }, p) => (
                        <Image key={id}
                            src={url}
                            vis={visible.includes(id)}
                            discard={() => this.discard(id)}
                            visible={() => this.visible(id)} />
                    ))}
                </Layout>
            </div>
        );
    }
}
export const Visible = connect(
    ({ imgs, visible }) =>
        ({ imgs, visible }),
    dispatch =>
        ({ imgsRmv: id => dispatch(imgsRmv({ id })) }))(OVisible);

// src: string 图片地址
// vis: boolean 是否可见表示
// discard: Function 删除按钮回调
// visible: Function 可见性按钮回调
class Image extends React.Component {

    render() {
        let { src, visible, vis, discard } = this.props;
        let btn = {
            display: "flex",
            flex: 1,
            borderRadius: 0,
            justifyContent: "center",
            alignItems: "center"
        };
        if (vis)
            Object.assign(btn, {
                color: "white",
                backgroundColor: "#9f9f9f"

            });
        return (
            <div>
                <div style={{ width: "32rem", height: "18rem", position: "relative", margin: 0 }} className="well well-sm">
                    <img src={src} style={{ width: "100%", height: "100%" }} alt="" />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "6rem",
                    padding: 8,
                    paddingTop: 0
                }}>
                    <button onClick={visible} className={"btn btn-" + (vis ? "default" : "success")} style={btn}>{vis ? "隐藏" : "显示"}</button>
                    <button onClick={discard} className="btn btn-danger" style={{
                        display: "flex", flex: 1, borderRadius: 0, justifyContent: "center", alignItems: "center"
                    }}>删除</button>
                </div>
            </div>
        );
    }
}