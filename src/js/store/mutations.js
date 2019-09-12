export default {
    addItem(state, payload) {
        // console.log("Mutation: loggin state " + state.toString);
        state.items.push(payload);

        return state;
    },
    clearItem(state, payload) {
        state.items.splice(payload.index, 1);

        return state;
    }
};