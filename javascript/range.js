
var inputCheck = document.querySelector('input[type=checkbox]')
var slider = document.getElementById('my-range')
var output = document.getElementById('value')


output.innerHTML - slider.value



slider.oninput = function(){
    
    output.innerHTML = parseFloat(this.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    var a = parseFloat(this.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
}


slider.addEventListener("mousemove", function(){
    var x = slider.value / 100
    var color = 'linear-gradient(90deg, rgb(24, 172, 196)'+ x +'%, rgb(204, 204,204)'+ x +'%)'
    slider.style.background = color
})
