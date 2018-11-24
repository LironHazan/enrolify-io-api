export const asyncEffects = ({ dispatch, getState }) => (next) => async (action) => {
    next(action);
    // handle async operations
  //  if (action.hasOwnProperty('asyncFn')) {
      //  try {
           // const payload = await action.asyncFn();
           // if (action.payload) {};
            if (action.hasOwnProperty('sideEffects')) {
                action.sideEffects.forEach(effect => {
                    dispatch(effect);
                });
            }
        // } catch (err) {
        //     dispatch({type: `${action.type}_ERROR`, payload: err.message || 'Error'})
        // }
   // }
};

// const incrementMiddleware = store => next => action => {
//     if(action.type === 'INCREMENT') {
//       alert(`Increment button was clicked, current state is ${store.getState()} \nI will now add to it`);
//     }
//     next(action);
//   }