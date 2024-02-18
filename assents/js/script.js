// ---- search ---- // 

const lupaSearch = document.querySelector('.search img');
const search = document.querySelector('.search input');

function searchOpen(event) {
    search.classList.toggle('ativo');
}

lupaSearch.addEventListener('mouseover', searchOpen)

search.addEventListener('mouseout', searchOpen)