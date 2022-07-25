
     function ReturnColorBack()
     {
      let e = document.getElementsByClassName('top-left-circle clear');
      for(let i=0;i<e.length;i++)
      e[i].style.background='#5286ad'
          
     }
    function toggleColor() {   
      let e = document.getElementsByClassName('top-left-circle clear');
      let temp;
      for(let i=0;i<e.length;i++)
      {
      temp=  e[i].style.background;
      e[i].style.background='#0013ff';
      }
      setTimeout(ReturnColorBack,1000)
 
    }
    function start() {
      setTimeout(toggleColor,1000)
    }
  
