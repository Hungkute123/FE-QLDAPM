import { createSlice } from "@reduxjs/toolkit";

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
        deleteCart: (state, action) => {
            return{
                ...state,
                quantity: state.quantity - 1,
                products:state.products.filter(item => {
                    return item.id!=state.products[action.payload].id
                })
            }
        }
    },
});

export const {addProduct, deleteCart} = cartSlice.actions;
export default cartSlice.reducer;