import './ddwl.css';

import { URL } from './config';
import { getData } from 'api/getData';
import render from './items.art';

const layoutEl = document.querySelector('.ddwl .bd');

getData(URL).then( data => {
    console.log(data);
    layoutEl.innerHTML = render(data);
})