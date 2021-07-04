import './menu.css';
import './menu'

import { URL } from './config';
import { getData } from 'api/getData';
import render from './items.art';


const layoutEl = document.getElementById('v-menu');

getData(URL).then( data => {
    // console.log(data);
    layoutEl.innerHTML = render({
        items: data
    })
});
