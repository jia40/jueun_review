// 초기 상태 객체(이렇게 객체구조로 해두어야 확장하기가 쉽다.)
const initialState={
    items: []
};

function cartReducer(state,action){
// state: 현재 상태 객체 
// action: dispatch에 의해 전달되는 객체{type:"액션타입(상태변경타입)", payload: 상태변경에 필요한 데이터}
    switch(action.type){
        case 'ADD_CART':
            const existingItem = state.items.find((item) => item.id===action.payload.id);
            // 현재 아이템들에서 내가 누른 아이템 id와 id가 일치하는 item을 찾아서 existingItem에 넣는것.

            if(existingItem){
                return{
                    ...state,
                    items: state.items.map((item) => 
                        item.id === action.payload ? {...item, quantity: quantity+1}
                                                   : item
                    )
                }
            }else{
                return{
                    ...state,
                    items: [
                        ...state.items,
                        {...action.payload, quantity:1}
                    ]
                }
            }
        case 'REMOVE_CART' :
            return{
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)

            }

        case 'INCREASE_QUANTITY':
            return{
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload ? {...item, quantity: item.quantity+1}
                                               : item
                )
            }    
        case 'DECREASE_QUANTITY':
             return{
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload ? {...item, quantity: Math.max(item.quantity -1, 1)} // Math.max() 두개값을 줘서 최댓값 비교
                                               : item
                )
            }
        case 'CLEAR_CART':
            return initialState; //payload 전달할 것도 없이 그냥 빈배열로 초기화한다.

        default:
            return state;
        
    }

}