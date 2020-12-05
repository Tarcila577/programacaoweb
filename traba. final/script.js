function menu() {
  if (document.querySelector('.nav').style.display == 'block') {
    document.querySelector('.nav-menu').style.opacity = 0;
    setTimeout(() => {
      document.querySelector('.nav').style.display = 'none';
    }, 200);
  }
  else {
    document.querySelector('.nav-menu').style.opacity = 0;
    document.querySelector('.nav').style.display = 'block';
    setTimeout(() => {
      document.querySelector('.nav-menu').style.opacity = 1;
    }, 200);
  }
}

let itens = document.querySelectorAll('.infoitens');
itens.forEach(e => {
  e.addEventListener('click', (e) => {
    let cln = e.path[2].cloneNode(true);
    document.querySelector('.itenscarrinho').appendChild(cln);
  });
});

document.querySelector('.areacarrinho').addEventListener('click', () => {
  document.querySelector('.areacarrinho').style.display = 'none';
})

document.querySelector('#cart').addEventListener('click', () => {
  document.querySelector('.areacarrinho').style.display = 'flex';

  if (document.querySelector('.itenscarrinho').innerHTML == "") {
    document.querySelector('.itenscarrinho').style.border = '0';
  }
});

