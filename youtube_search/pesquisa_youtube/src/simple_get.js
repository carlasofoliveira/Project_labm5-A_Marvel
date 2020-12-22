/*function my_get() {
    const axios = require('axios');
    axios.get('http://webcode.me').then(resp => {
        //console.log('Pedido com AXIOS');
        //console.log(resp.data);
    });
}

export {my_get};*/

function search() {
    const axios = require('axios');
    /*const my_headers = {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer meu-token'
        }
    };*/

    axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=marvel&type=video&key=AIzaSyB49f04HJbUHZal32G-tfl_XiypcynqWfY').then(resp => {
        console.log('Pedido com AXIOS');
        console.log(resp.data);
    });
}

export {search};