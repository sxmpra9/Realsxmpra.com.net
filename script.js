function toggleMenu() {
  document.body.classList.toggle('menu-open');
  let socialIcons = document.querySelector('.social-icons');
  if (document.body.classList.contains('menu-open')) {
    socialIcons.style.zIndex = '500';
  } else {
    socialIcons.style.zIndex = '9999';
  }
}
function abrirCarta() {
    document.getElementById("carta").style.display = "flex";
    document.getElementById("carta-conteudo").style.display = "block";
}
function fecharCarta() {
    document.getElementById("carta").style.display = "none";
    document.getElementById("carta-conteudo").style.display = "none";
}