const initialData = {
  list: [],
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_ITEAMS": {
      const { id, data } = action.payload;

      return {
        ...state,
        list: [...state.list, { id: id, data: data }],
      };
    }

    case "DELETE_ITEAMS": {
      const deletedItemId = action.payload.id;
      const updatedList = state.list.filter(
        (item) => item.id !== deletedItemId
      );

      return {
        ...state,
        list: updatedList,
      };
    }

    case "REMOVE_ITEAMS": {
      return {
        ...state,
        list: [],
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
