
export function getData(data: any){
    return fetch(`https://places.ls.hereapi.com/places/v1/discover/explore?apiKey=${'fBQybpHx6xku2N8C2TtV3lY0nGz0Ph2tmpwkTmnxwyM'}&in=${data}&cat=${'hotel'}`, {
        method: 'GET',
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}