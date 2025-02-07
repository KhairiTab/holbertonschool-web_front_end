const userName = document.querySelector('input[name="user_name"]');
        const email = document.querySelector('input[name="email"]');
        const loginForm = document.querySelector('#loginForm');
        const showCookiesBtn = document.querySelector('#showCookiesBtn');
        const cookiesContainer = document.querySelector('#cookiesContainer');

        loginForm.addEventListener('submit', setCookies);
        showCookiesBtn.addEventListener('click', showCookies);

        function setCookies(e) {
            e.preventDefault();
            document.cookie = `username=${userName.value}; path=/;`;
            document.cookie = `email=${email.value}; path=/;`;
            console.log(document.cookie);
        }

        function showCookies(e) {
            e.preventDefault();
            const cookies = document.cookie.split(';').map(cookie => cookie.trim());
            let cookiesList = 'Cookies:<br>' + cookies.map(c => c.replace('=', ': ')).join('<br>');
            cookiesContainer.innerHTML = cookiesList;
        }