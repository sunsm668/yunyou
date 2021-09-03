// 垂直菜单的实现

// 获取菜单模块DOM
const vmenubox = document.getElementById('v-menu-box');
// 获取菜单列表DOM
const menu_lis = document.querySelectorAll('#v-menu li[data-n]');
// 获取二级菜单列表DOM
const menus = document.querySelectorAll('#menus .menu');


// 遍历菜单列表
for (var i = 0; i < menu_lis.length; i++) {
    // 鼠标触碰某个菜单项
    menu_lis[i].onmouseenter = function () {
        // 所有二级菜单项去掉active类
        for (var j = 0; j < menus.length; j++) {
            menu_lis[j].className = '';
        }
        // 自己加active类
        this.className = 'active';
        // 让所有二级菜单隐藏，去掉active类
        for (var j = 0; j < menus.length; j++) {
            menus[j].className = 'menu';
        }
        // 让序号相同的菜单项添加menu类
        menus[i].className = 'menu active';
    }
}

// 鼠标离开整个vmenubox盒子
vmenubox.onmouseleave = function () {
    // 给所有菜单项添加 menu 隐藏
    for (var j = 0; j < menus.length; j++) {
        menus[j].className = 'menu';
    }
    // 所有菜单项去掉active
    for (var j = 0; j < menus.length; j++) {
        menu_lis[j].className = '';
    }
}