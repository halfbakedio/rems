import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import PropertyService from "@services/property";
import { RootState } from "@store/index"; // FIXME
import { ErrorMessage, OpenHouse } from "~types/index"; // FIXME

export type OpenHouseState = {
  entities: OpenHouse[];
  error: string | null;
  status: "loading" | "idle";
};

const initialState: OpenHouseState = {
  entities: [],
  error: null,
  status: "idle",
};

export const fetchOpenHouseById = createAsyncThunk<
  OpenHouse[],
  number,
  { rejectValue: ErrorMessage }
>(
  "openHouse/fetchById",
  async (openHouseId: number, thunkAPI) => {
    try {
      const response = await PropertyService.getOpenHouse(openHouseId);
      if (response.status !== 200) {
        return thunkAPI.rejectWithValue({ 
          message: "Failed to fetch open houses.",
        });
      }
      const data: OpenHouse[] = [response.data.openHouse];
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ 
        message: `Received error while fetching open house data: ${error}`,
      });
    }
  },
);

export const slice = createSlice({
  name: "openHouse",
  initialState,
  reducers: {
    createOpenHouse: (state) => {
      state.entities = [];
    },
    updateOpenHouse: (state, action: PayloadAction<OpenHouse>) => {
      // use action.payload as open house to op
      state.entities = [];
    },
    deleteOpenHouse: (state, action: PayloadAction<number>) => {
      // use action.payload as ID to op
      state.entities = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOpenHouseById.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchOpenHouseById.fulfilled, (state, { payload }) => {
      state.entities.push(...payload);
      state.status = "idle";
    });
    builder.addCase(fetchOpenHouseById.rejected, (state, { payload }) => {
      if (payload) {
        state.error = payload.message;
      }
      state.status = "idle";
    });
  },
});

export const selectOpenHouses = (state: RootState) => state.openHouses.entities;
export const selectOpenHouse = (entities: OpenHouse[], id: number) => {
  return entities.find((entity) => entity.id == id);
};
export const selectStatus = (state: RootState) => state.openHouses.status;

export const {
  createOpenHouse,
  updateOpenHouse,
  deleteOpenHouse,
} = slice.actions;

export default slice.reducer;
