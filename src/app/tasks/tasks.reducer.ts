import { TasksActionsTypes } from './tasks.actions';
import { ListModel } from './models/list.model';
import { ListItemModel } from './models/list.item.model';

export interface State {
    loading: boolean
    userLists: ListModel[],
    selectedListId: number,
    selectedListItems: ListItemModel[]
}

const initialState: State = {
    loading: false,
    userLists: [],
    selectedListId: -1,
    selectedListItems: []
}

export function reducer(state = initialState, action): State {
    switch (action.type) {
        case TasksActionsTypes.LOAD_LISTS:
        case TasksActionsTypes.ADD_LIST:
            return { ...state, loading: true };

        case TasksActionsTypes.LOAD_LISTS_END:
            return { ...state, loading: false, userLists: action.payload };

        case TasksActionsTypes.ADD_LIST_END: {
            const newList = new ListModel();
            newList.id = action.payload.id;
            newList.name = action.payload.name;
            
            return { ...state, loading: false, userLists: [...state.userLists, newList] };
        }

        case TasksActionsTypes.SELECT_LIST: {
            return { ...state, selectedListId: action.payload, loading: true };
        }

        case TasksActionsTypes.LOAD_LIST_ITEMS: {
            return { ...state, loading: false, selectedListItems: action.payload }
        }

        case TasksActionsTypes.ADD_LIST_ITEM: {
            const newListItem = new ListItemModel();
            newListItem.id = Math.floor((1 + Math.random()) * 0x10000);
            newListItem.listId = state.selectedListId;
            newListItem.position = state.selectedListItems.length + 1;
            newListItem.text = action.payload;

            return { ...state, selectedListItems: [...state.selectedListItems, newListItem] };
        }

        default:
            return state;
    }
}

export const getUserLists = (state: State) => state.userLists;
export const getSelectedListId = (state: State) => state.selectedListId;
export const getSelectedListItems = (state: State) => state.selectedListItems;
export const getLoading = (state: State) => state.loading;