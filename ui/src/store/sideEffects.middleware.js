export const sideEffects = ({ dispatch, getState }) => (next) => (action) => {
    next(action);
    const { sideEffects } = action;
    if (sideEffects) {
        sideEffects.map(effect =>  dispatch(effect));
    }
};
