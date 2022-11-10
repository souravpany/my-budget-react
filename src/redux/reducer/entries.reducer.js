function entriesReducer(state = initialEntries, action) {
    switch (action.type) {
        case 'ADD_ENTRY':
            const newEntries = state.concat({ ...action.payload });
            return newEntries;
        case 'REMOVE_ENTRY':
            const removeEntries = state.filter(entry => entry.id !== action.payload.id);
            return removeEntries;
        case 'UPDATE_ENTRY':
            const updateEntries = [...state];
            const index = updateEntries.findIndex(entry => entry.id === action.payload.id)
            updateEntries[index] = { ...action.payload.entry };
            return updateEntries;
        default:
            return state;
    }
}

export default entriesReducer;


var initialEntries = [
    {
        id: 1,
        description: "Work income",
        value: "1000",
        isExpense: false
    },
    {
        id: 2,
        description: "Water bill",
        value: "20",
        isExpense: true
    },
    {
        id: 3,
        description: "Rent",
        value: "300",
        isExpense: true
    },
    {
        id: 4,
        description: "Power bill",
        value: "50",
        isExpense: true
    },
]
