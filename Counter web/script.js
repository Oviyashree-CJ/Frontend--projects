document.addEventListener('DOMContentLoaded',()=>{
    var count = document.getElementById('count');
    var increbut = document.getElementById('incre');
    var decrebut = document.getElementById('decre');
    var countval = 0;
    increbut.addEventListener('click',()=>{
        countval++;
        count.textContent = countval;
    })
    decrebut.addEventListener('click',()=>{
        if(countval>0){
            countval--;
            count.textContent = countval;
        }
        else{
            alert("The least number of this counter is zero(0)")
        }
    })
})