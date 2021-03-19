import React, {useEffect, useState} from "react"
import './App.css';
import Login from "./Login"
import { getTokenFomUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player"
import {useDataLayerValue} from "./DataLayer"


const spotify = new SpotifyWebApi();

function App() {

  //const [token, setToken] = useState(null);
  const [{user, token}, dispatch] = useDataLayerValue();

  //run code based on a given condition
  useEffect(() => {
    const hash = getTokenFomUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){

      spotify.setAccessToken(_token)

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify
      })

      

      spotify.getUserPlaylists()
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists
          })
        })
      
      spotify.getPlaylist('37i9dQZF1DWVGdX9MUCxQC')
        .then((response) => 
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response
          })
        )
      
      spotify.getMyTopArtists()
          .then((response) => 
            dispatch({
              type: "SET_TOP_ARTIST",
              top_artists: response
            })
          )

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      })

    }
  }, [token, dispatch])

  //console.log("User", user);
  //console.log("Token", token);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }    
    </div>
  );
}

export default App;
