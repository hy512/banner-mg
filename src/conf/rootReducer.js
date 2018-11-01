
import { combineReducers } from 'redux';

import { imgs, visible, discard } from '../services/reducer';


export const reducer = combineReducers({
    imgs,
    visible,
    discard
});