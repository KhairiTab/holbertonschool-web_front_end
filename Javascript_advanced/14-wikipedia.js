function createElement(data) {
    let p = document.createElement('p');
    p.textContent = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            callback(data.query.pages['21721040'].extract);
        }
    }
    xhttp.open('GET',url);
    xhttp.send();

}

queryWikipedia(createElement)