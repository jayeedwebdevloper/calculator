let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('button');
let value = document.getElementById('value');

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(){
        if(this.innerText == '='){
            value.innerText = eval(value.innerText);
        } else {
            if(this.innerText == 'Clear') {
                value.innerText = '';
            } else{
                value.innerText += this.innerText;
            }
        }
    })
}