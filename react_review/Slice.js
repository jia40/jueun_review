const cartSlice = createSlice({
    // (1) 슬라이스 이름
    name: 'cart',
    // (2) 초기 상태값
    initialState:{
        items:[],
        totalQuantity: 0,
        totalPrice: 0
    }, 
    // (3)리듀서 //Reducer.js와 같은 기능 but 좀 더 간략해진다.
    reducers : {
        addToCart: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if(existingItem){ 
                existingItem.quantity+=1;
            }else{ 
                state.items.push({...action.payload, quantity: 1});
            }
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
        },
        removeFromCart : (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload);
            state.items = state.items.filter((item) => item.id !== action.payload); // filter하면 배열이 새로 만들어진다. 그래서 일치하지 않는 것만 가져오니까 id일치값이 지워지고 나머지가 사라지는 것처럼 보인다.

            state.totalQuantity -= existingItem.quantity;
            state.totalPrice -= existingItem.quantity * existingItem.price;
        },
        increaseQuantity: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload);
            existingItem.quantity+=1; // 직접 state를 수정하는 식으로 변경

            state.totalQuantity += 1;
            state.totalPrice +=existingItem.price;
        },
        decreaseQuantity: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload);
            if(existingItem.quantity>1){
                existingItem.quantity-=1;

                state.totalQuantity -=1;
                state.totalPrice -= existingItem.price;
            }
        },  
        cleanCart: (state) => { 
            state.items=[];

             state.totalQuantity = 0;
            state.totalPrice = 0;
        }
    }
})


// 모든 액션 생성자 함수를 export 한다. (컴포넌트 dispatch 하기 위해)
export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity, cleanCart}=cartSlice.actions