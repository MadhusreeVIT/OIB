function dis(val){
    document.getElementById("result").value+=val
    }
    function solve(){
    let a = document.getElementById("result").value
    let b = eval(a)
    document.getElementById("result").value = b
    }
    function clr(){
    document.getElementById("result").value = ""
    }
    function del(){
    x = document.getElementById("result").value;
    document.getElementById("result").value=x.substring(0,x.length-1);
    }



















