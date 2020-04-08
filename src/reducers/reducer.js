
 

export const initialState = [
  {
    task: "",
    id: "",
    completed: false,
  },
];

export const reducer = (state, action) => {

    
  let newState;


  switch (action.type) {

        case "ADD_TODO": 
            newState = [...state, action.payload];
            return newState;
            break;
        case "COMPLETED_TODO":
            newState = state.map((item) => {
            if (item.id === action.payload) {
                return { ...item, completed: !item.completed };
             } else {
                    return item;
                    }
            })
            return newState;
            break;

        case "DELETED_TODO": 
            newState = state.filter((item) => {
                  return !item.completed;
                });
            
                return newState;
            break;
        default:
            return newState

  }

//   if (action.type === "ADD_TODO") {
//     newState = [...state, action.payload];

//     return newState;
//   } else if (action.type === "COMPLETED_TODO") {
//     newState = state.map((item) => {
//       if (item.id === action.payload) {
//         return { ...item, completed: !item.completed };
//       } else {
//         return item;
//       }
//     });

//     return newState;
//   } else if (action.type === "DELETED_TODO") {
//     newState = state.filter((item) => {
//       return !item.completed;
//     });

//     return newState;
//   }
};
