let cart =[];


export default(state=cart,action)=>{
    let {type,payload}=action;
    switch (type) {
        case 'add':
            cart.push(payload)
    
        default:
            return state;
    }

}




export const addToCart=(payload)=>{
    return{
        type:'add',
        payload:payload
    }
}