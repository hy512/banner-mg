

import { handleActions } from 'redux-actions';

import {imgs, visible, discard} from '../services/reducer';

export const reducer = handleActions(new Map([
    imgs,
    visible,
    discard
]), null);