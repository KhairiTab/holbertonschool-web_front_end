const userName = document.querySelector('input[name="user_name"]');
const email = document.querySelector('input[name="email"]');
const loginForm = document.querySelector('#loginForm');
const showCookiesBtn = document.querySelector('#showCookiesBtn');
const cookiesContainer = document.querySelector('#cookiesContainer');

loginForm.addEventListener('submit', setCookies);
showCookiesBtn.addEventListener('click', showCookies);

function setCookies(e) {
    e.preventDefault();
    
    // Get the current date
    const currentDate = new Date();
    // Set the expiration date to 10 days from now
    currentDate.setTime(currentDate.getTime() + (10 * 24 * 60 * 60 * 1000)); // 10 days in milliseconds
    
    // Format the expiration date as a GMT string
    const expires = `expires=${currentDate.toGMTString()}`;
    
    // Set the cookies with expiration
    document.cookie = `username=${userName.value}; path=/; ${expires}`;
    document.cookie = `email=${email.value}; path=/; ${expires}`;
    
    console.log(document.cookie);
}

function showCookies(e) {
    e.preventDefault();
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    let cookiesList = 'Cookies:<br>' + cookies.map(c => c.replace('=', ': ')).join('<br>');
    cookiesContainer.innerHTML = cookiesList;
}
