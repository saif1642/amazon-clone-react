export const initialState = {
    basket:[]
}

export const getBasketTotal = (basket) => {
   return basket?.reduce((amount,item) => item.price + amount,0);
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.types){
        case 'ADD_TO_BASKET':
          return {
              ...state,
              basket:[...state.basket,action.item]
          };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((item) => item.id === action.id);
            if(index >= 0){
                console.log(index);
                newBasket.splice(index,1);
            }else{
                console.warn('Could not remove the product from basket');
            }
            return {
                ...state,
                basket:newBasket
            };
        default:
          return state;
    }
}

export default reducer;