import * as actions from '../consts/actions'
export function changeNumber(vagon, num){
    return {
        type: actions.CHANGE_NUMBER,
        vagon,
        num
    }
}
export function setTrain(newVagons){
    return {
        type: actions.SET_TRAIN,
        newVagons
    }
}
export function station(){
    return {
        type: actions.STATION,
    }
}
export function play(){
    return {
        type: actions.PLAY
    }
}
export function forward(){
    return {
        type: actions.FORWARD
    }
}
export function fast(){
    return {
        type: actions.FAST
    }
}
export function pause(){
    return {
        type: actions.PAUSE
    }
}
export function stop(){
    return {
        type: actions.STOP
    }
}
export function reset(){
    return {
        type: actions.RESET
    }
}
export function clearNotify(){
    return {
        type: actions.CLEAR_NOTIFY
    }
}

export function setLevel(id) {
    return {
        type: actions.SET_LEVEL,
        id
    }
}