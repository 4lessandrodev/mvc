
const tig = {};
tig.$ = document.querySelector.bind(document);
tig.$$ = document.querySelectorAll.bind(document);
tig.$id = document.getElementById.bind(document);

export const tg = tig;