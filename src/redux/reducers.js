import LocalStorApp from "../components/myLib/LocalStorApp";


const myStorage=new LocalStorApp("phoneBook");

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
var initConstactsState=myStorage.getData();
if(initConstactsState===false||initConstactsState===null){
        initConstactsState=[];
}

const initFilterlState="";

function checkEqualStr(val1,val2){
    if(val1.toLowerCase()===val2.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
    
}

export const contactsReducer=(state = initConstactsState, action)=>{
        //----------------add-contact------------------------------------------
        if(action.type==="contacts/addContact"){
        //console.log(state);
            if(state.findIndex((item)=>{
                if(checkEqualStr(action.payload.name,item.name)){

                    alert(`object with name=${item.name} is already exists`)
                    return true;
                }
                if(checkEqualStr(action.payload.number,item.number)){

                    alert(`object with number=${item.number} is already exists`);
                    return true;
                }
                return false;
            })<0){
                myStorage.setData(state); 
                return [...state,action.payload];
            }
        }
        //-----------------------del-contact-----------------------------------
        if(action.type==="contacts/delContact"){
            myStorage.setData(state); 
            return state.filter(contact=>contact.id!==action.payload);
        }
            
        //====================================================================
        return state;
    
};
//------------------------filter-----------------------------------------------
export const filterReducer=(state=initFilterlState,action)=>{
    if(action.type==="filter/setFilter"){
        return action.payload;
    }
    return state;
    
}  
    /*switch(action.type){
        case "filter/setFilter":
            return action.payload;
        default: return state;
    }*/


/*export const contactsReducer=(state = initConstactsState, action)=>{
    switch(action.type){
        //----------------add-contact------------------------------------------
        case "contacts/addContact": 
        //console.log(state);
            if(state.findIndex((item)=>{
                if(checkEqualStr(action.payload.name,item.name)){
                    //console.log(`object with name=${item.name} is already exists`);
                    alert(`object with name=${item.name} is already exists`)
                    return true;
                }
                if(checkEqualStr(action.payload.number,item.number)){
                    //console.log(`object with number=${item.number} is already exists`);
                    alert(`object with number=${item.number} is already exists`);
                    return true;
                }
                return false;
            })<0){
                return [...state,action.payload];
            }
        //-----------------------del-contact-----------------------------------
        case "contacts/delContact":
            return state.filter(contact=>contact.id!==action.payload);
        //====================================================================
        default: myStorage.setData(state); return state;
    }
};*/