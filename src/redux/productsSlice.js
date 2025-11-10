import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
    reducers: {
        createProduct:(state, action) =>{ },
        readProducts:(state, action) =>{ },
        updateProduct:(state, action) =>{ },
        deleteProduct:(state, action) =>{ },
    }
});

export const { createProduct,readProducts, updateProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;