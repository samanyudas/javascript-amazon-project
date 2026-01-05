const request = new XMLHttpRequest();
request.open('GET', 'https://supersimplebackend.dev/akajwdnbk');
request.send();

request.addEventListener('load', () => { 
    console.log('success');
    console.log(request.response);
})

request.onload = function() {
    console.log('success');
    console.log(this.response);
}

request.onerror = function() {
    console.log('error');
}