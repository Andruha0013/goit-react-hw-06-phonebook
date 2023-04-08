import { nanoid } from "nanoid";

//------------example----------------
/*export const addTask = text => {
    return {
      type: "tasks/addTask",
      payload: {
        id: nanoid(),
        completed: false,
        text,
      },
    };
  };
*/
export const addContact=contact=>{
    return {
        type:"contacts/addContact",
        payload:{
            id:nanoid(),
            name:   contact.name,
            number: contact.number,
        },
    };
}

export const delContact=id=>{
    return {
        type:   "contacts/delContact",
        payload: id,
    };
}
//------------------------------------------
export const setFilter=str=>{
  return {
        type: "filter/setFilter",
        payload: str,
  }
}
