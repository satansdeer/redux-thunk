import { ADD_NOTE, setNotes, SET_NOTES } from "./actions"

const initialState = {
  notes: []
}

export const notesReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_NOTE: {
      return {...state, notes: [...state.notes, action.payload]}
    }
    case SET_NOTES: {
      return {...state, notes: action.payload}
    }
    default:
      return state
  }
}

export const saveNotes = () => async (dispatch, getState) => {
  const notes = getState().notes;
  await fetch("http://localhost:4000/notes", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(notes)
  })
  alert("Success")
} 

export const loadNotes = () => async (dispatch, getState) => {
  const notes = await fetch("http://localhost:4000/notes").then(res => res.json())
  dispatch(setNotes(notes))
} 