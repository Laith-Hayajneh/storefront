import faker from 'faker'
let product = {
    products: [
        {
            category: 'food',
            name: `Food  ${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,
            image: `${faker.image.technics()}`
        }, {
            category: 'food',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`, image: `${faker.image.city()}`
        }, {
            category: 'food',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`, image: `${faker.image.business()}`
        }, {
            category: 'electronic',
            name: ` electronic  >${faker.commerce.productName()}`,
            price: `${faker.commerce.price}`,
            description: `${faker.commerce.productDescription()}`, image: `${faker.image.city()}`
        }, {
            category: 'electronic',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`, image: `${faker.image.dataUri()}`
        }, {
            category: 'electronic',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`, image: `${faker.image.technics()}`
        }, {
            category: 'console',
            name: `console >>${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,image:`${faker.image.city()}`
        }, {
            category: 'console',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,image:`${faker.image.dataUri()}`
        }, {
            category: 'console',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,image:`${faker.image.technics()}`
        }, {
            category: 'phones',
            name: `phones  >>${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,image:`${faker.image.sports()}`
        }, {
            category: 'phones',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,image:`${faker.image.technics()}`
        }, {
            category: 'phones',
            name: `${faker.commerce.productName()}`,
            price: `${faker.commerce.price()}`,
            description: `${faker.commerce.productDescription()}`,image:`${faker.image.transport()}`
        }

    ],









}

export default (state = product, action) => {
    let { type, payload } = action;
    let categore = product
    switch (type) {
        case 'food':
            categore = categore.products.filter(products => products.category == payload).map(food => {
                if (food.name === payload) {
                    return {
                        name: food.name,
                        description: food.description
                    }
                };
                return food
            });
            return categore
        /////////////////////////    
        case 'electronic':
            categore = product.electronic.map(electronic => {
                if (electronic.name === payload) {
                    return {
                        name: electronic.name,
                        description: electronic.description
                    }
                };
                return electronic
            });
            return categore
        /////////////////////////    

        case 'console':
            categore = product.console.map(console => {
                if (console.name === payload) {
                    return {
                        name: console.name,
                        description: console.description
                    }
                };
                return console
            });
            return categore
        /////////////////////////    

        case 'phones':
            categore = product.phones.map(phones => {
                if (phones.name === payload) {
                    return {
                        name: phones.name,
                        description: phones.description
                    }
                };
                return phones
            });
            return categore



        default:
            return state
    }
};


// export const food = (name) => {
//     return {
//         type: 'food',
//         payload: name
//     };
// };

// export const electronic = (name) => {
//     return {
//         type: 'electronic',
//         payload: name
//     };
// };
// export const console = (name) => {
//     return {
//         type: 'console',
//         payload: name
//     };
// };
// export const phones = (name) => {
//     return {
//         type: 'phones',
//         payload: name
//     };
// };




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