import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CartState {
    contents: {
        [key: string]: {
            name: string;
            price: number;
            imgSrc: string;
            amount: number;
        };
    };
}

const initialState: CartState = {
    contents: {}
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{ id: string; name: string; price: number; imgSrc: string }>) => {
            const { id, name, price, imgSrc } = action.payload;
            state.contents[id] = {
                name,
                price,
                imgSrc,
                amount: 1
            };
        },
        increment: (state, action: PayloadAction<string>) => {
            state.contents[action.payload].amount++;
        },
        decrement: (state, action: PayloadAction<string>) => {
            if (state.contents[action.payload].amount === 1) delete state.contents[action.payload];
            else state.contents[action.payload].amount--;
        }
    }
});

export const { add, increment, decrement } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
