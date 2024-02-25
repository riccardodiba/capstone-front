import { GET_ANIMALI} from "../action/animali"


const initialState = {
    animali: [],
}

const animaliReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ANIMALI:
            return {
                ...state,
                animali: action.payload
            }
       
        default:
            return state
    }
}
export default animaliReducer