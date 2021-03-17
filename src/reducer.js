export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: null

    //remove this later
    token: "BQDmJPRPxo3FihcnUpBB7sdk3m8siscz0ltdtABLFpIrOv5sgDTn6N-GJoBvG3YRdzYJeDtDZOa5UvNduoLs--3Ko9uH6rbXdiXm93ZluUuOapzbRKtsoYXzm1UMJ24nDi8hwuvQvImBJ-EA8SCOWpd9_d9hjpBBPTCFLPndXR-aPzZr"
}

const reducer = (state, action) => {
    console.log(action)


    //action -> type, [payload]
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists
            }
        default:
            return state;
    }
}

export default reducer;