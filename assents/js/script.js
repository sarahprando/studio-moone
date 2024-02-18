// ---- search ---- // 

const lupaSearch = document.querySelector('.search img');
const inputSearch = document.querySelector('.search input');
let check = 0;

function searchOpen(event) {
    inputSearch.classList.toggle('ativo');
}

function searchCheck(event) {
    check = 1;
}

function searchClose(event) {
    if (check == 0) {
        inputSearch.classList.remove('ativo');
    }
}

lupaSearch.addEventListener('mouseover', searchOpen);

inputSearch.addEventListener('mouseout', searchClose);

inputSearch.addEventListener('click', searchCheck);


