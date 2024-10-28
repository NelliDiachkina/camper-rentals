export const selectCampers = state => state.campers.items;
export const selectCamperById = state => state.campers.itemById;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.isError;
export const selectPage = state => state.campers.page;
export const selectLimit = state => state.campers.limit;
export const selectHasNextPage = state => state.campers.hasNextPage;
export const selectTotalItems = state => state.campers.totalItems;
