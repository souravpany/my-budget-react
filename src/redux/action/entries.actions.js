export const addEntryRedux = (payload) => {
    return { type: 'ADD_ENTRY', payload: payload };
}

export const removeEntryRedux = (payload) => {
    return { type: 'REMOVE_ENTRY', payload: payload }
}

export const updateEntryRedux = (id, entry) => {
    return { type: 'UPDATE_ENTRY', payload: { id, entry } }
}