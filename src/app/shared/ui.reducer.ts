import { createReducer, on } from "@ngrx/store";
import * as Uiactions from './ui.actions';

export interface State {
    isLoading: boolean;
}

export const uiInitialState: State = {
    isLoading: false
}

const _uiReducer = createReducer(
    uiInitialState,

    on(Uiactions.isLoading, state => ({
        ...state,
        isLoading: true
      })
    ),

    on(Uiactions.stopLoading, state => ({
        ...state,
        isLoading: false
      })
    )

);

export function uiReducer(state, action) {
    return _uiReducer(state, action);
}