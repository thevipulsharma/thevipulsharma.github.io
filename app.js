// Rename it 'Navbar' and you'll get a f*****g lexical declaration error
const navbar = new Navbar();
const footer = new Footer();

document.getElementById('vip-header').innerHTML = navbar.content;
document.getElementById('vip-footer').innerHTML = footer.content;