/////////const home = document.querySelector('#home');
const menu = document.querySelector('#menu');

menu.addEventListener('click',(e)=>{
    let target = e.target;

    switch(target.id) {
        case 'home':
            console.log('Home item menu was cliked');
            break;
        case 'dashboard':
            console.log('Dashboard item menu was clicked');
            break;
        case 'report':
            console.log('Report item menu was clicked');
            break;

    }
})