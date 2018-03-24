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
        case TasksActionsTypes.ADD_LIST: {
            const newList = new ListModel();
            newList.id = Math.floor((1 + Math.random()) * 0x10000);
            newList.name = action.payload;

            return { ...state, userLists: [...state.userLists, newList] };
        }

        case TasksActionsTypes.SELECT_LIST: {
            return { ...state, selectedListId: action.payload };
        }

        case TasksActionsTypes.LOAD_LIST_ITEMS: {
            return { ...state, selectedListItems: [] }
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