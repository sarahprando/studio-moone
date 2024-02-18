// ---- search ---- // 

const lupaSearch = document.querySelector('.search img');
const search = document.querySelector('.search input');
let check = 0;

function searchOpen(event) {
    search.classList.toggle('ativo');
}

function searchCheck(event) {
    check = 1;
}

function searchClose(event) {
    if (check == 0) {
        search.classList.toggle('ativo');
    }
}

lupaSearch.addEventListener('mouseover', searchOpen);

search.addEventListener('mouseout', searchClose);

search.addEventListener('click', searchCheck);


