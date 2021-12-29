import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../../components";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [],
        quantity:0,
        total:0,
        path:"",
    },
    reducers:{
        addProduct:(state, action) => {
            if(state.quantity == 0){
                let prd = {
                    id: action.payload.product.IDProduct,
                    quantity: 1,
                    name: action.payload.product.NameProduct,
                    image: action.payload.product.Image,
                    price: action.payload.product.Price,
                }
                state.products.push(prd);
                state.total += prd.price * prd.quantity;
                state.quantity += 1;
            }
            else{
                let check = false;
                state.products.map((item, key) => {
                    if(item.id == action.payload.product.IDProduct){
                        state.products[key].quantity++;
                        state.total += action.payload.product.Price;
                        check=true;
                    }
                });
                if(!check){
                    let _cart = {
                        id: action.payload.product.IDProduct,
                        quantity: 1,
                        name: action.payload.product.NameProduct,
                        image: action.payload.product.Image,
                        price: action.payload.product.Price,
                    }
                    state.products.push(_cart);
                    state.total += _cart.price * _cart.quantity;
                    state.quantity += 1;
                }

            }
            // state.quantity += 1;
            // state.products.push(action.payload.product);
            state.path = action.payload.path;
            
        },
        clearCart: (state, action) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
            localStorage.setItem("product", JSON.stringify(state.products));

        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.products.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            state.products[itemIndex].quantity += 1;
                let ttl = 0;
                state.products.map(prd => {ttl += prd.price * prd.quantity});
                state.total = ttl;
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.products.findIndex(
                cartItem => cartItem.id === action.payload.id
            )
            if(state.products[itemIndex].quantity > 1){
                state.products[itemIndex].quantity -= 1;
                let ttl = 0;
                state.products.map(prd => {ttl += prd.price * prd.quantity});
                state.total = ttl;
            } else if (state.products[itemIndex].quantity === 1){
                const nextCartItems = state.products.filter(
                    product => product.id !== action.payload.id
                );
                state.products = nextCartItems;
                state.quantity -= 1;
                let ttl = 0;
                state.products.map(prd => {ttl += prd.price * prd.quantity});
                state.total = ttl;
                localStorage.setItem("product", JSON.stringify(state.products));
            }
        },
        removeFromCart: (state, action) => {
            const nextCartItems = state.products.filter(
                product => product.id !== action.payload.id
            )
            state.products = nextCartItems;
            state.quantity -= 1;
            let ttl = 0;
            state.products.map(prd => {ttl += prd.price * prd.quantity});
            state.total = ttl;
            localStorage.setItem("product", JSON.stringify(state.products));
        }
    },
});

export const {addProduct, clearCart, decreaseQuantity, increaseQuantity, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;