function show(value){
    document.getElementById('display').value += value;
}
function cleardisp(){
    document.getElementById('display').value ='';
}
function equalto(){
    var exp=document.getElementById('display').value;
    var ans;
    try{
        ans=eval(exp);
        document.getElementById('display').value = ans;
    }
    catch(error){
        document.getElementById('display').value = 'Error';
    }
}