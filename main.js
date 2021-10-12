const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');

const searchIconHide =()=>{
    searchIcon.classList.remove('show-icon');
    searchIcon.classList.add('hide-icon');
}

const showSearchIcon = ()=>{
    if(searchInput.value ===''){
        searchIcon.classList.remove('hide-icon');
        searchIcon.classList.add('show-icon');
    }
}