export const actionSplitterMiddleware = () => (next) => (action) => {
    if (Array.isArray(action)) {
        return action.forEach(_action => next(_action));
    }
    next(action);
};