import { fetchContacts } from "./operations";

const contactsSlice = {
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
    extraReducers: {
      [fetchContacts.pending](state, action) {
        state.isLoading = true;
    },
      [fetchContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
      [fetchContacts.rejected](state, action) {
        state.isLoading = false;
        state.error = action.payload;
    },
  },
};

export const contactReducer = contactsSlice.reducer;