export const ADD_NOTE = "ADD_NOTE";
export const SET_NOTES = "SET_NOTES";

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const setNotes = (notes) => ({
  type: SET_NOTES,
  payload: notes,
});
