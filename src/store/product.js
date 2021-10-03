import faker from 'faker'
let product ={
    products:[
        {
            category: 'food',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
        },{
            category: 'food',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
        },{
            category: 'food',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
        },{
            category: 'electronic',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price}`,
            description: `${faker.commerce.productDescription()}`,
        }  ,{
            category: 'electronic',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
        },{
            category: 'electronic',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
        },{
            category: 'console',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
        },{
            category: 'console',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
        },  {
            category: 'console',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
        },{
            category: 'phones',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
        },{
            category: 'phones',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
        },{
            category: 'phones',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
        }

    ],








   
}

export default (state=product,action)=>{
    let {type,payload}=action;
    let categore=product
    switch (type) {
        case 'food':
              categore=product.food.map(food=>{
                if (food.name === payload){
                    return{
                        name:food.name,
                        description:food.description
                    }
                };
                return food
            });
            return categore
        /////////////////////////    
        case 'electronic':
              categore=product.electronic.map(electronic=>{
                if (electronic.name === payload){
                    return{
                        name:electronic.name,
                        description:electronic.description
                    }
                };
                return electronic
            });
            return categore
        /////////////////////////    

        case 'console':
              categore=product.console.map(console=>{
                if (console.name === payload){
                    return{
                        name:console.name,
                        description:console.description
                    }
                };
                return console
            });
            return categore
        /////////////////////////    

        case 'phones':
              categore=product.phones.map(phones=>{
                if (phones.name === payload){
                    return{
                        name:phones.name,
                        description:phones.description
                    }
                };
                return phones
            });
            return categore
            
      
    
        default:
            return state
    }
};
 

export const food = (name) => {
    return {
        type: 'food',
        payload: name
    };
};

export const electronic = (name) => {
    return {
        type: 'electronic',
        payload: name
    };
};
export const console = (name) => {
    return {
        type: 'console',
        payload: name
    };
};
export const phones = (name) => {
    return {
        type: 'phones',
        payload: name
    };
};




// food:[
//     {name:'food'},
//     {description:"All kind of food are here"},
//     {price:'price'},
//     {inventoryCount:'inventory count'}

// ],
// electronic:[
//     {name:'electronic'},
//     {description:"All kind of food are here"},
//     {price:'price'},
//     {inventoryCount:'inventory count'}

// ]
// ,console:[
//     {name:'console'},
//     {description:"All kind of food are here"},
//     {price:'price'},
//     {inventoryCount:'inventory count'}

// ]
// ,phones:[
//     {name:'phones'},
//     {description:"All kind of food are here"},
//     {price:'price'},
//     {inventoryCount:'inventory count'}

// ],