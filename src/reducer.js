
const reducer = (state = {items:[{label:'Drink',done:true, id:'1'},{label:'Read',done:false,id:'2'}], 
                          searchText:'',
                          newItemLabel:'',
                        }, action) => {
                            console.log(action);
                            
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT': {
            return {
                ...state, searchText: action.text, items: [...state.items]
            };
        }
        case 'CHANGE_NEW_ITEM_LABEL': {
            return {
                ...state, newItemLabel: action.label, items: [...state.items]
            };
        }
        case 'ITEM_DONE_TOGGLE': {
            const searchItemIndex = state.items.find((item) => {
                return item.id === action.id;
            });
            const searchItem = state.items[searchItemIndex];
            const newItem = { ...searchItem, done: action.done };
            return { 
                ...state,
            };
                
        }
        case 'ADD_NEW_ITEM': {
            return {
            ...state, 
            items: [...state.items, {label: action.label,
                                    id: action.id}],
            newItemLabel: '',
            };
        }
        default: {
            return state;
        }
    }
}

export default reducer;