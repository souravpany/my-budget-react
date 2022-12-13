import entriesType from '../action/entries.actions';



function entriesReducer(state = initialEntries, action) {
    switch (action.type) {
        case entriesType.POPULATE_ENTRIES:
            return action.payload;
        case entriesType.ADD_ENTRY:
            const newEntries = state.concat({ ...action.payload });
            return newEntries;
        case entriesType.REMOVE_ENTRY_RESULT:
            const removeEntries = state.
                filter(entry => entry.id !== action.payload.id);
            return removeEntries;
        case entriesType.POPULATE_ENTRY_DETAILS:
        case entriesType.UPDATE_ENTRY:
            const updateEntries = [...state];
            const index = updateEntries.
                findIndex(entry => entry.id === action.payload.id)
            updateEntries[index] = { ...updateEntries[index], ...action.payload.entry };
            return updateEntries;
        default:
            return state;
    }
}

export default entriesReducer;


var initialEntries = []
