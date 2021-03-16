//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//1) Click Login Button
//2) Redirect to Spotify Login Page
//3) Redirect to home page once logged in

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "630d7321153844b5b8fbfb3d29dc4895";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];
/*
export const getTokenFomUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
        })
}
*/
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;