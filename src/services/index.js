import { store } from '../conf/redux';
import { visibleRplc, imgsRplc } from './actions'

export class Service {
    static _instance;
    static _destination;

    constructor() {
        let location = window.location;
        Service._destination = location.pathname;
    }

    static destination(args) {
        let search = window.location.search;
        if (search)
            return Service._destination + search + "&" + args;
        else
            return Service._destination + "?" + args;
    }

    static instance(): Service {
        if (!this._instance) this._instance = new Service();
        return this._instance;
    }

    async retrieve() {
        let des = Service.destination("require=imgs");
        let data = await fetch(des).then(r => r.json()).catch(e => console.error(des, e));
        if (data) {
            if (data.visible)
                store.dispatch(visibleRplc(data.visible));
            if (data.imgs)
                store.dispatch(imgsRplc(data.imgs));
        }


        // store.dispatch(imgsRplc([
        //     { id: "f1", url: "https://cn.bing.com/az/hprichbg/rb/OyamaLeaves_ZH-CN10033445271_1920x1080.jpg" }
        // ]));
    }

    async upload(form) {
        let des = Service.destination("require=upload");

        // console.log("执行请求, ", des, {
        //     body: form,
        //     method: "POST",
        // });

        let res = await fetch(des, {
            body: form,
            method: "POST",

        })
            .then(r => r.json())
            .catch(e => console.error(des, e));

        Service.instance().retrieve();

        return res;
    }
    async update(visible, discard) {
        let des = Service.destination("require=update");


        // console.log("执行请求, ", des, {
        //     method: "POST",
        //     // body: JSON.stringify({visible, discard})
        //     body: "discard=" + encodeURIComponent(JSON.stringify(discard)) + "&visible=" + encodeURIComponent(JSON.stringify(visible))
        // });

        let res = await fetch(des, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            method: "POST",
            body: "discard=" + encodeURIComponent(JSON.stringify(discard)) + "&visible=" + encodeURIComponent(JSON.stringify(visible))
            // body: JSON.stringify({visible, discard})
        })
            .then(r => r.json())
            .catch(e => console.error(des, e));

        Service.instance().retrieve();

        return res;
    }
}