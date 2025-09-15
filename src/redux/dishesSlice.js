import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
  dishes: [
    {
      id: 1,
      image: "pizza.jpg",
      title: "Pizza",
      description: "Deliciosa pizza con queso y pepperoni.",
      price: 12.99,
    },
    {
      id: 2,
      image: "pasta.jpg",
      title: "Pasta",
      description: "Pasta italiana con salsa de tomate.",
      price: 10.99,
    },
  ],
};

const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  reducers: {
  },
});

export const { actions, reducer } = dishesSlice;
