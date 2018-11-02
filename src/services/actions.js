import { createActions } from 'redux-actions';



export const {
    imgs: {
        replace: imgsRplc,
        remove: imgsRmv
    },
    visible: {
        replace: visibleRplc,
        toggle: visibleTgl
    },
    discard: discardRplc
} = createActions({
    Imgs: {
        Replace: null,
        Remove: null
    },
    Visible: {
        Replace: null,
        Toggle: null
    },
    Discard: {
        Replace: null
    }
});