import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    //token: null,
    discover_weekly: null,
    top_artists: null,

    //remove this later
    //token: "BQDmJPRPxo3FihcnUpBB7sdk3m8siscz0ltdtABLFpIrOv5sgDTn6N-GJoBvG3YRdzYJeDtDZOa5UvNduoLs--3Ko9uH6rbXdiXm93ZluUuOapzbRKtsoYXzm1UMJ24nDi8hwuvQvImBJ-EA8SCOWpd9_d9hjpBBPTCFLPndXR-aPzZr"
}

const reducer = (state, action) => {
    console.log(action);
    console.log("this is item", action.item)
    
    //action -> type, [payload]
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }
        case "SET_PLAYING":
            return{
                ...state,
                playing: action.playing
            }
        case "SET_ITEM":
            return{
                ...state,
                item: action.item,
                
            }
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            }
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        default:
            return state;
            
    }
    
}

export default reducer;