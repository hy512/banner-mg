import { handleActions } from 'redux-actions';

import { imgsRplc, imgsRmv, visibleRplc, visibleTgl, discardRplc } from './actions';

export const imgs = handleActions(new Map([
    [imgsRplc, (state, { payload }) => {

        return payload;
    }],
    [imgsRmv, (state, { payload }) => {
        let id = payload.id,
            next = state.filter(i => (i.id !== id));
        return next;
    }]
]), null);

export const visible = handleActions(new Map([
    [visibleRplc, (state, { payload }) => {
        return payload;
    }],
    [visibleTgl, (state, { payload }) => {
        // let next = [...state],
        //     id = payload.id;
        // if (next.includes(id))
        //     next = next.filter(i => (i !== id));
        // else
        //     next.push(id);
        // return next;
        return state;
    }],
    [imgsRmv, (state, { payload }) => {
        let id = payload.id,
            next = state.filter(i => (i.id !== id));
        return next;
    }]
]), null);

export const discard = handleActions(new Map([
    [discardRplc, (state, { payload }) => {

        return payload;
    }]
]), null);