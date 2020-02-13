
var slider = document.getElementById('my-range')
var output = document.getElementById('range-value')


output.innerHTML - slider.value



slider.oninput = function(){
    

    output.innerHTML = parseFloat(this.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    if(slider.value > 100){
        slider.setAttribute('step','25')
        }else{
            if(slider.value > 250){
            slider.setAttribute('step','50')
            }else{
                if(slider.value > 500){
                slider.setAttribute('min','100')
                slider.setAttribute('step','100')
            }else{
                if(slider.value > 1000){
                slider.setAttribute('min','250')
                slider.setAttribute('step','250')
            }else{
                if(slider.value > 5000){
                slider.setAttribute('min','500')
                slider.setAttribute('step','500')
                    }
                }
            }
        }
    }
}


slider.addEventListener("mousemove", function(){
    var x = slider.value / 100
    var color = 'linear-gradient(90deg, rgb(24, 172, 196)'+ x +'%, rgb(204, 204,204)'+ x +'%)'
    slider.style.background = color
})
