import { store } from '../conf/redux';
import { visibleRplc } from './actions'

export class Visible {
    static _instance;
    static instance() {
        if (!this._instance) this._instance = new Visible();
        return this._instance;
    }
    async retrieve() {
        store.dispatch(visibleRplc([
            "https://cn.bing.com/az/hprichbg/rb/OyamaLeaves_ZH-CN10033445271_1920x1080.jpg",
            "http://img5.imgtn.bdimg.com/it/u=2198746125,2255961738&fm=26&gp=0.jpg",
            "http://img3.imgtn.bdimg.com/it/u=3534289497,3677101726&fm=26&gp=0.jpg",
            "http://img1.imgtn.bdimg.com/it/u=1193474556,1223904415&fm=26&gp=0.jpg"
        ]));
    }
}