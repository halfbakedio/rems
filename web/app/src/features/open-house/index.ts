import {
  fetchOpenHouseById,
  selectOpenHouses,
  selectStatus,
  slice,
} from "./slice";

const {
  createOpenHouse,
  updateOpenHouse,
  deleteOpenHouse,
} = slice.actions;

const { reducer } = slice;

export {
  reducer,
  slice,
  // reducers
  createOpenHouse,
  deleteOpenHouse,
  fetchOpenHouseById,
  updateOpenHouse,
  // selectors
  selectStatus,
  selectOpenHouses,
};
