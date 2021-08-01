var count = 1
setInterval(()=>{  
    let btn = document.getElementById('radio'+ count)
    btn.checked ='true'
    count ++;
    if(count > 4)
    {
        count =1
    }
   

},3000)