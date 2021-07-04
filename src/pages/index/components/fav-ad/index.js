import './fav-ad.css';

import { getData } from 'api/getData';
import { URL } from './config';
import render from './fav-ad.art'

const favAdEl = document.getElementById('fav-ad')
getData(URL).then( data => {
    // console.log(data);
    favAdEl.innerHTML = render({
        items: data
    });
});