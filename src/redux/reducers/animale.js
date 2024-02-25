import { GET_ANIMALE} from "../action/animale"


const initialState = {
    animali: [],
}

const animaleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ANIMALE:
            return {
                ...state,
                animali: action.payload
            }
       
        default:
            return state
    }
}
export default animaleReducer