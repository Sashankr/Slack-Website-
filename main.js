const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-input');
const channelEdit = document.querySelector('.edit');
const channelTitle = document.querySelector('.channel-title');

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

const editChannel = ()=>{
    if(channelEdit.classList.contains('fa-pen')){
        channelEdit.classList.remove('fa-pen');
        channelEdit.classList.add('fa-check');
        channelTitle.disabled = false;
        channelTitle.focus();
        channelTitle.classList.add('title-edit');
    }
    else{
        channelEdit.classList.add('fa-pen');
        channelEdit.classList.remove('fa-check');
    }
}

