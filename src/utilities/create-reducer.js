export default (initialState, handlers) => (state = initialState, action) => {
    return handlers[action.type] ? handlers[action.type].call(null, state, action) : state;
};
