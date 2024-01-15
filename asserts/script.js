function menuopen(a) {
    const nav = document.getElementById('nav');
    const burgerlist = document.getElementById('burgerlist');
    const searchlist = document.getElementById('searchlist');
    const searchin = document.getElementById('searchin');
    if (a === 0) {
        nav.style.display = 'flex';
        burgerlist.style.display = 'none';
        searchlist.style.display = 'flex';
        setTimeout(function () {
            searchin.focus();
        }, 200);
    } else if (a === 1) {
        nav.style.display = 'flex';
        burgerlist.style.display = 'none';
        searchlist.style.display = 'none';
    } else if (a === 2) {
        nav.style.display = 'flex';
        burgerlist.style.display = 'flex';
        searchlist.style.display = 'none';
    }
}

function burgerlistinner(b) {
    const backarr = document.getElementById('backarr');
    const collectionlist = document.getElementById('collectionlist');
    const toplist = document.getElementById('toplist');
    const bottomlist = document.getElementById('bottomlist');
    const footwarelist = document.getElementById('footwarelist');
    const accessorieslist = document.getElementById('accessorieslist');
    const accountlist = document.getElementById('accountlist');
    burgerlist.style.display = 'none';
    backarr.style.display = 'block';
    if (b === 0) {
        collectionlist.style.display = 'flex';
    } else if (b === 1) {
        toplist.style.display = 'flex';

    } else if (b === 2) {
        bottomlist.style.display = 'flex';

    } else if (b === 3) {
        footwarelist.style.display = 'flex';

    } else if (b === 4) {
        accessorieslist.style.display = 'flex';

    } else if (b === 5) {
        accessorieslist.style.display = 'flex';

    } else if (b === 6) {
        accountlist.style.display = 'flex';
    } else if (b === 7) {

    }
}

function profile(c) {
    const userdetails = document.getElementById('userdetails');
    const myorders = document.getElementById('myorders');
    const profilebtn = document.getElementById('profilebtn');
    const editbtn = document.getElementById('editbtn');
    const logoutcon = document.getElementById('logoutcon');
    if (c === 0) {
        userdetails.style.display = 'none';
        myorders.style.display = 'flex';
        profilebtn.style.display = 'flex';
        editbtn.style.display = 'none';
    } else if (c === 1) {
        userdetails.style.display = 'none';
        myorders.style.display = 'none';
        profilebtn.style.display = 'flex';
        editbtn.style.display = 'none';

    } else if (c === 2) {
        profilebtn.style.display = 'flex';
        editbtn.style.display = 'none';
        logoutcon.style.display = 'grid';
    }
    else if (c === 3) {
        userdetails.style.display = 'block';
        myorders.style.display = 'none';
        profilebtn.style.display = 'none';
        editbtn.style.display = 'flex';
    }
}
function cancelbtn() {
    logoutcon.style.display = 'none';
    profilebtn.click();
}
function menuback() {
    const burgerlistinner = document.querySelectorAll('.burgerlistinner');
    burgerlistinner.forEach(element => {
        element.style.display = 'none';
    });
    burgerlist.style.display = 'flex';
    backarr.style.display = 'none';
    logoutcon.style.display = 'none';
}
function menuclose() {
    const burgerlistinner = document.querySelectorAll('.burgerlistinner');
    burgerlistinner.forEach(element => {
        element.style.display = 'none';
    });
    nav.style.display = 'none';
    backarr.style.display = 'none';
    logoutcon.style.display = 'none';

}
function search() {
    const searchin = document.getElementById('searchin').value.toLowerCase().trim();
    const suggestedContainer = document.getElementById('Suggested');
    const trendContainer = document.getElementById('trend');
    const suggestLinks = suggestedContainer.querySelectorAll('.Suggestlink');
    const notfound = document.getElementById('notfound');
    const sughead = document.getElementById('sughead');

    let a = false;
    if (searchin.trim() == "") {
        suggestedContainer.style.display = 'none';
        trendContainer.style.display = 'flex';
    }
    else {
        suggestedContainer.style.display = 'flex';
        trendContainer.style.display = 'none';
    }
    suggestLinks.forEach(link => {
        const textValue = link.textContent.toLowerCase().trim();
        if (textValue.includes(searchin)) {
            link.style.display = 'flex';
            a = true;
        } else {
            link.style.display = 'none';
        }
    });
    if (!a) {
        sughead.style.display = 'none'
        notfound.style.display = 'flex';
    } else {
        notfound.style.display = 'none';
        sughead.style.display = 'block'

    }
}
function usereditOrders() {
    const fields = ['username', 'address', 'city', 'pin', 'phone'];
    const editbtn = document.getElementById('editbtn');
    userdetails.style.display = 'block';
    myorders.style.display = 'none';
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field.contentEditable === 'false') {
            field.contentEditable = 'true';
            editbtn.innerHTML = '<img src="asserts/save.svg" alt="Save">Save';
            editbtn.style.color = '#007BFF';
            field.style.color = '#007BFF';
            field.focus();
            field.click();
        } else {
            field.contentEditable = 'false';
            editbtn.innerHTML = '<img src="asserts/edit.svg" alt="Edit">Edit';
            field.style.color = 'white';
            editbtn.style.color = 'white';
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.orderstype p');

    function selectTab(event) {
        tabs.forEach(tab => {
            tab.style.borderBottom = 'none';
        });

        const selectedTab = event.currentTarget;
        selectedTab.style.borderBottom = '1px solid rgb(147, 147, 147)';
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', selectTab);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.orderstype p');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(otherTab => {
                if (otherTab !== this) {
                    otherTab.style.borderBottom = 'none';
                }
            });

            this.style.borderBottom = '1px solid rgb(147, 147, 147)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.optionstopaccount p');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(otherTab => {
                if (otherTab !== this) {
                    otherTab.style.backgroundColor = '';
                }
            });

            if (!this.isSameNode(tabs[tabs.length - 1])) {
                this.style.backgroundColor = '#666666';
            }
        });
    });
});


// ---------------------------------collection
function goback() {
    window.history.back();
}

let isFavourite = false;

function favourite() {
    const fav = document.getElementById('fav');
    const favim = document.getElementById('favim');
    if (isFavourite) {
        fav.style.backgroundColor = '#f1f1f1';
        favim.src = 'asserts/fav.svg';
    } else {
        fav.style.backgroundColor = '#ffd3da';
        favim.src = 'asserts/favpink.svg';
    }
    isFavourite = !isFavourite;
}
