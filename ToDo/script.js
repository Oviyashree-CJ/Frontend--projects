function add(){
    var input=document.getElementById("intask");
    var text=input.value.trim();
    if(input !== ""){
        var list=document.createElement("li");
        list.textContent=text;
        var del=document.createElement("button");
        del.textContent="x";
        del.classList.add("buttonclass");
        del.onclick=function(){
            list.remove();
        }
        list.appendChild(del);
        document.getElementById("list").appendChild(list);
    }
    input.value="";
}