let 네브바열림 = 0;





function navbaronoff(){
    if (document.getElementById('navdrop').style.display === 'none') {        
        document.getElementById('navdrop').style.display = 'block';
        document.getElementById('navdrop').style.display = 'flex';
        document.getElementById('navdrop-uldiv').style.display = 'block';
        네브바열림 = 1;
    }else {
        document.getElementById('navdrop').style.display = 'none';
        document.getElementById('navdrop-uldiv').style.display = 'none';
        네브바열림 = 0;
    }
}


//function navbaronoff(){
//    if (document.getElementById('navbar-menu').style.display === 'none') {
        //document.getElementById('navbar-menu').style.display = 'block';
//        네브바열림 = 1;
//    }else {
        //document.getElementById('navbar-menu').style.display = 'none';
//        네브바열림 = 0;
//    }
//}
