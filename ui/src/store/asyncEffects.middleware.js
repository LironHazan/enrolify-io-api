export const asyncEffects = ({ dispatch, getState }) => (next) => async (action) => {
    next(action);
    // handle async operations
    if (action.hasOwnProperty('asyncFn')) {
        try {
            const payload = await action.asyncFn();
            if (payload) return dispatch({type: `${action.type}_SUCCESS`, payload});
            if (action.hasOwnProperty('sideEffects')) {
                action.sideEffects.forEach(effect => {
                    dispatch(effect);
                });
            }
        } catch (err) {
            dispatch({type: `${action.type}_ERROR`, payload: err.message || 'Error'})
        }
    }
};