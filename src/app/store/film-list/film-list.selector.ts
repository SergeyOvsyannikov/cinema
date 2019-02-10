import {AppState} from '../app-state';

export const filmListSelector = (state: AppState) => state.filmList;
export const filmListSelectorObjectIds = (state: AppState) => filmListSelector(state).objectIds;
