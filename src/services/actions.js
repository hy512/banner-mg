import { createActions } from 'redux-actions';



export const {
    imgs: {
        replace: imgsRplc
    },
    visible: {
        replace: visibleRplc
    },
    discard: discardRplc
} = createActions({
    Imgs: {
        Replace: null
    },
    Visible: {
        Replace: null
    },
    Discard: {
        Replace: null
    }
});