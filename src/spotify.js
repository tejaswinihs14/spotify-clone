export const authEndpoint = 
"https://accounts.spotify.com/authorize";
const redirecturi = "http://localhost:3000/";

const clientId = "532c8eb11e344b19a055519ff6f62b11";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) =>
    {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
         
        return initial;
    }, {});
}

export const loginurl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirecturi}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;