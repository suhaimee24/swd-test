import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export interface DataType {
  id: string | null;
  birthday: string | dayjs.Dayjs;
  citizenId: string;
  expectedSalary: string;
  firstname: string;
  gender: string;
  lastname: string;
  nationality: string;
  passportNo: string | null;
  phone: string;
  prefix: string;
  title: string;
}

export interface FormState {
  data: DataType[];
  selectedData: DataType | null;
}

const initialState: FormState = {
  data: [],
  selectedData: null,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getData: (state) => {
      const dataJson = localStorage.getItem("data") || "[]";
      state.data = JSON.parse(dataJson);
    },
    addData: (state, action: PayloadAction<DataType>) => {
      state.data.push({ ...action.payload, id: crypto.randomUUID() });
      const dataJson = JSON.stringify(state.data);
      localStorage.setItem("data", dataJson);
    },
    updateData: (state, action: PayloadAction<DataType>) => {
      const tempData = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.data = tempData;
      const dataJson = JSON.stringify(state.data);
      localStorage.setItem("data", dataJson);
    },
    deleteData: (state, action: PayloadAction<string[]>) => {
      state.data = state.data.filter(
        (item) => !action.payload.includes(item.id || "")
      );
      const dataJson = JSON.stringify(state.data);
      localStorage.setItem("data", dataJson);
    },
    setSeletedData: (state, action: PayloadAction<DataType>) => {
      state.selectedData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getData, addData, deleteData, updateData, setSeletedData } =
  formSlice.actions;

export default formSlice.reducer;
