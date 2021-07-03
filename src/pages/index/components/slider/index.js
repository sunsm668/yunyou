import './slider.css';
import './btn.css';
import { getData } from '../../../../api/getData';
import { URL } from './config';

//导入模板
import  render  from './slider.art';

import Slider from './module';


const layoutEl = document.getElementById('slider-layout');


getData(URL).then( data => {
    //向模板中传入data
    // console.log(data)
    // [
    //     {url: "http://alimc.img.imooc.com/class/muyun/mall-PC/slide/banner_01.jpg"},
    //     {url: "http://alimc.img.imooc.com/class/muyun/mall-PC/slide/banner_02.jpg"},
    //     {url: "http://alimc.img.imooc.com/class/muyun/mall-PC/slide/banner_03.jpg"},
    //     {url: "http://alimc.img.imooc.com/class/muyun/mall-PC/slide/banner_04.jpg"},
    //     {url: "http://alimc.img.imooc.com/class/muyun/mall-PC/slide/banner_05.jpg"},
    // ]
    length: 5
    layoutEl.innerHTML = render({
        items: data
    })
    

    const leftbtnEl = document.getElementById('leftbtn');
    const rightbtnEl = document.getElementById('rightbtn');
    const bannerEl = document.getElementById('banner');

    //左右按钮功能
    leftbtnEl.addEventListener('click', () => {
        slider.prev();
    },false)
    rightbtnEl.addEventListener('click', () => {
        slider.next();
    },false)

    //鼠标进入停止切换
    bannerEl.addEventListener('mouseenter', () => {
        slider.pause();
    },false)
    //鼠标离开自动切换
    bannerEl.addEventListener('mouseleave', () => {
        slider.autoplay();
    },false)
    const slider = new Slider(document.querySelector('.slider'),{
        initialIndex: 0,
        // 切换时是否有动画
        animation: true,
        // 切换速度，单位 ms
        speed: 800,
        // 自动切换，单位 ms
        autoplay: 1800
    });
});





