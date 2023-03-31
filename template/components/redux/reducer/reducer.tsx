import { combineReducers } from "@reduxjs/toolkit";
import { Action, ActionType } from "../action/actionType";
import { State, initialState } from "../state/stateType";

// Next.js中 需要幫state加上一個初始化值
export function reducer(state: State = initialState, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case ActionType.ADD_TODO:
            return {
                ...state,
                toDoList: [...state.toDoList, payload]
            };
        case ActionType.DELETE_TODO:
            return {
                ...state,
                toDoList: state.toDoList.filter((todo, index) => index !== payload)
            };
        case ActionType.EDIT_TODO:
            return {
                ...state,
                toDoList: state.toDoList.map((todo, index) => index === payload.index ? payload.todo : todo)
            };
        default:
            return state;
    }
}
