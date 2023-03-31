export enum ActionType {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    EDIT_TODO = 'EDIT_TODO',
}

export interface Action {
    type: ActionType;
    payload: any;
}



