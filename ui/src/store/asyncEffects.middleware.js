export const asyncEffects = ({ dispatch, getState }) => (next) => async (action) => {
    next(action);
    if (action.hasOwnProperty('sideEffects')) {
        action.sideEffects.forEach(effect => {
            dispatch(effect);
        });
    }
};
