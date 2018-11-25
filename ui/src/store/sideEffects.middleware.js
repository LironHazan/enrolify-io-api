export const sideEffects = ({ dispatch, getState }) => (next) => (action) => {
    next(action);
    if (action.hasOwnProperty('sideEffects')) {
        action.sideEffects.forEach(effect => {
            dispatch(effect);
        });
    }
};
