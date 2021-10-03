// food electronic console phones 
let categories={
    food:[
        {name:'food'},
        {description:"All kind of food are here"}
 
    ],
    electronic:[
        {name:'electronic'},
        {description:"All kind of food are here"}
 
    ]
    ,console:[
        {name:'console'},
        {description:"All kind of food are here"}
 
    ]
    ,phones:[
        {name:'phones'},
        {description:"All kind of food are here"}
 
    ],
    activeCategory:''
};
let activeCategory=categories.activeCategory;
let categore=categories
export default (state=categories,action)=>{
    let {type,payload}=action;
    switch (type) {
        case 'food':
              activeCategory=categories.activeCategory;
              categore=categories.food.map(food=>{
                if (food.name === payload){
                    return{
                        name:food.name,
                        description:food.description
                    }
                };
                return food
            });
            return {activeCategory,categore}
        /////////////////////////    
        case 'electronic':
              activeCategory=categories.activeCategory;
              categore=categories.electronic.map(electronic=>{
                if (electronic.name === payload){
                    return{
                        name:electronic.name,
                        description:electronic.description
                    }
                };
                return electronic
            });
            return {activeCategory,categore}
        /////////////////////////    

        case 'console':
              activeCategory=categories.activeCategory;
              categore=categories.console.map(console=>{
                if (console.name === payload){
                    return{
                        name:console.name,
                        description:console.description
                    }
                };
                return console
            });
            return {activeCategory,categore}
        /////////////////////////    

        case 'phones':
              activeCategory=categories.activeCategory;
              categore=categories.phones.map(phones=>{
                if (phones.name === payload){
                    return{
                        name:phones.name,
                        description:phones.description
                    }
                };
                return phones
            });
            return {activeCategory,categore}
            
        case 'active':
            categories.activeCategory=payload    
            
    
        default:
            return state
    }
};
 

// we will add action here but idealt=y we need to seprate them into their own file 

// food electronic console phones 

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

export const active =(name)=>{
    return {
        type: 'active',
        payload: name
    }
}