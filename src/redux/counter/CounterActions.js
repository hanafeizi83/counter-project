import {
    INCREMENT,
    DESCREMENT,
    REFRESH
} from './ConterActionsType'

const Increment = () => {
    return {
        type: INCREMENT
    }
}

const Descrement = () => {
    return {
        type: DESCREMENT
    }
}

const Refresh = () => {
    return {
        type: REFRESH
    }
}

export {
    Increment,
    Descrement,
    Refresh
}