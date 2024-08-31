import {
    INCREMENT,
    DESCREMENT,
    REFRESH
} from './ConterActionsType'

const initiolState = {
    count : 0
}

const reducer = (state = initiolState , action )=>{
    switch(action.type){
        case INCREMENT : return {
            ...state,
            count : state.count + 1
        }
        case DESCREMENT : return {
            ...state,
            count : state.count - 1
        }
        case REFRESH : return {
            ...state,
            count : state.count =0
        }
        default : return state
    }
}

export default reducer