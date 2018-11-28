export const sideEffects = ({ dispatch, getState }) => (next) => (action) => {
    next(action);
    const { sideEffects } = action;
    if (sideEffects) {
        sideEffects.forEach(effect =>  dispatch(effect));
    }
};
