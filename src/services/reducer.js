import {handleActions} from 'redux-actions';

import {imgsRplc, visibleRplc, discardRplc} from './actions';

export const imgs = handleActions(new Map([
    [imgsRplc, (state, {payload})=> {
        return payload;
    }]
]), null);

export const visible = handleActions(new Map([
    [visibleRplc, (state, {payload})=> {
        return payload;
    }]
]), null);

export const discard = handleActions(new Map([
    [discardRplc, (state, {payload})=> {
        return payload;
    }]
]), null);