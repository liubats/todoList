const reducer = (state = {
    items: [{ label: 'Drink', done: false, id: '1' }, { label: 'Read', done: false, id: '2' }],
    searchText: '',
    newItemLabel: '',
}, action) => {
    console.log(action);

    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT':
            {
                return {
                    ...state,
                    searchText: action.text,
                    items: [...state.items]
                };
            }
        case 'CHANGE_NEW_ITEM_LABEL':
            {
                return {
                    ...state,
                    newItemLabel: action.label,
                    items: [...state.items]
                };
            }
        case 'ITEM_DONE_TOGGLE':
            {
                const searchItemIndex = state.items.findIndex((item) => {
                    return item.id === action.id;
                });
                const searchItem = state.items[searchItemIndex];
                const newItem = {...searchItem, done: action.done };
                let leftPart = state.items.slice(0, searchItemIndex);
                let rightPart = state.items.slice(searchItemIndex + 1);
                const newItems = [...leftPart, {...newItem }, ...rightPart];

                return {
                    ...state,
                    items: newItems
                };

            }
        case 'ADD_NEW_ITEM':
            {
                return {
                    ...state,
                    items: [...state.items, {
                        label: action.label,
                        id: action.id
                    }],
                    newItemLabel: '',
                };
            }
        default:
            {
                return state;
            }
    }
}

///asdadasd
export default reducer;