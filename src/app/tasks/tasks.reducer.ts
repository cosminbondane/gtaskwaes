import { TasksActionsTypes } from './tasks.actions';
import { ListModel } from './models/list.model';
import { ListItemModel } from './models/list.item.model';

export interface State {
    loading: boolean
    userLists: ListModel[],
    selectedListId: string,
    selectedListItems: ListItemModel[]
}

export const initialState: State = {
    loading: false,
    userLists: [],
    selectedListId: null,
    selectedListItems: []
}

export function reducer(state = initialState, action): State {
    switch (action.type) {
        case TasksActionsTypes.LOAD_LISTS:
        case TasksActionsTypes.ADD_LIST:
        case TasksActionsTypes.ADD_LIST_ITEM:
        case TasksActionsTypes.CHANGE_LIST_ITEM_STATUS:
            return { ...state, loading: true };

        case TasksActionsTypes.LOAD_LISTS_END:
            return { ...state, loading: false, userLists: action.payload };

        case TasksActionsTypes.ADD_LIST_END: {
            return { ...state, loading: false, userLists: [...state.userLists, action.payload] };
        }

        case TasksActionsTypes.SELECT_LIST: {
            return { ...state, selectedListId: action.payload, loading: true };
        }

        case TasksActionsTypes.LOAD_LIST_ITEMS: {
            return { ...state, loading: false, selectedListItems: action.payload }
        }

        case TasksActionsTypes.ADD_LIST_ITEM_END: {
            return { ...state, loading: false, selectedListItems: [action.payload, ...state.selectedListItems] };
        }

        case TasksActionsTypes.CHANGE_LIST_ITEM_STATUS_END: {
            const itemIndex = state.selectedListItems.findIndex(item => item.id === action.payload.id);
            const item = state.selectedListItems[itemIndex];
            item.status = 'completed';
            
            return {
                ...state,
                loading: false,
                selectedListItems: [
                    ...state.selectedListItems.slice(0, itemIndex),
                    item,
                    ...state.selectedListItems.slice(itemIndex + 1)
                ]
            }
        }

        default:
            return state;
    }
}

export const getUserLists = (state: State) => state.userLists;
export const getSelectedListId = (state: State) => state.selectedListId;
export const getSelectedListItems = (state: State) => state.selectedListItems;
export const getLoading = (state: State) => state.loading;