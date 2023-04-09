import LocalStorApp from '../components/myLib/LocalStorApp';
import { createAction, createReducer } from '@reduxjs/toolkit';

const myStorage = new LocalStorApp('phoneBook');

var initContactsState = myStorage.getData();
if (initContactsState === false || initContactsState === null) {
  initContactsState = [];
}

const initFilterlState = '';

function checkEqualStr(val1, val2) {
  if (val1.toLowerCase() === val2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
//------------------------------------------------------------------------------
const addContact = createAction('contacts/addContact');
const delContact = createAction('contacts/delContact');
const setFilter = createAction('filter/setFilter');

export const contactsReducer = createReducer(initContactsState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      if (
        state.findIndex(item => {
          if (checkEqualStr(action.payload.name, item.name)) {
            alert(`object with name=${item.name} is already exists`);
            return true;
          }
          if (checkEqualStr(action.payload.number, item.number)) {
            alert(`object with number=${item.number} is already exists`);
            return true;
          }
          return false;
        }) < 0
      ) {
        myStorage.setData([...state, action.payload]);
        return [...state, action.payload];
      }
    })
    .addCase(delContact, (state, action) => {
      myStorage.setData(state.filter(contact => contact.id !== action.payload));
      return state.filter(contact => contact.id !== action.payload);
    })
    .addDefaultCase((state, action) => {
      return state;
    });
});

export const filterReducer = createReducer(initFilterlState, builder => {
  builder
    .addCase(setFilter, (state, action) => {
      return action.payload;
    })
    .addDefaultCase((state, action) => {
      return state;
    });
});
