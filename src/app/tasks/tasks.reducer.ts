import { TasksActionsTypes } from './tasks.actions';
import { ListModel } from './models/list.model';
import { ListItemModel } from './models/list.item.model';

export interface State {
    loading: boolean;
    lists: ListModel[];
    selectedListId: string;
    listItems: ListItemModel[];
}

export const initialState: State = {
    loading: false,
    lists: [],
    selectedListId: null,
    listItems: []
};

export function reducer(state = initialState, action): State {
    switch (action.type) {
        case TasksActionsTypes.LOAD_LISTS:
        case TasksActionsTypes.ADD_LIST:
        case TasksActionsTypes.ADD_LIST_ITEM:
        case TasksActionsTypes.CHANGE_LIST_ITEM_STATUS:
        case TasksActionsTypes.REMOVE_LIST_ITEM:
            return { ...state, loading: true };

        case TasksActionsTypes.LOAD_LISTS_END:
            return { ...state, loading: false, lists: action.payload };

        case TasksActionsTypes.ADD_LIST_END: {
            return { ...state, loading: false, lists: [...state.lists, action.payload] };
        }

        case TasksActionsTypes.SELECT_LIST: {
            return { ...state, selectedListId: action.payload, loading: true };
        }

        case TasksActionsTypes.LOAD_LIST_ITEMS: {
            return { ...state, loading: false, listItems: action.payload };
        }

        case TasksActionsTypes.ADD_LIST_ITEM_END: {
            return { ...state, loading: false, listItems: [action.payload, ...state.listItems] };
        }

        case TasksActionsTypes.CHANGE_LIST_ITEM_STATUS_END: {
            const itemIndex = state.listItems.findIndex(listItem => listItem.id === action.payload.id);
            const item = state.listItems[itemIndex];
            item.status = 'completed';

            return {
                ...state,
                loading: false,
                listItems: [
                    ...state.listItems.slice(0, itemIndex),
                    item,
                    ...state.listItems.slice(itemIndex + 1)
                ]
            };
        }

        case TasksActionsTypes.REMOVE_LIST_ITEM_END: {
            const itemIndex = state.listItems.findIndex(listItem => listItem.id === action.payload);
            return {
                ...state,
                loading: false,
                listItems: [
                    ...state.listItems.slice(0, itemIndex),
                    ...state.listItems.slice(itemIndex + 1)
                ]
            }
        }

        default:
            return state;
    }
}

export const getLists = (state: State) => state.lists;
export const getSelectedListId = (state: State) => state.selectedListId;
export const getListItems = (state: State) => state.listItems;
export const getLoading = (state: State) => state.loading;