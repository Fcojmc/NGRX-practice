import { ActionReducerMap } from "@ngrx/store";
import * as UiReducer from './shared/ui.reducer';

export interface AppState {
    ui: UiReducer.State
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: UiReducer.uiReducer
}