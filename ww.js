
  let num
let game_st= {
  Color_order:[],
  Color_order_player:[],
  control_player:false
  }
  
  let top_left_c={
    Initial_color:'#5286ad',
    highlight_color:'#0013ff',
    value:1,
    name:"top-left-circle clear"
  }
  let top_right_c={
    Initial_color:'#ac5359',
    highlight_color:'#ff0003',
    value:2,
    name:"top-right-circle"
    
  }
  let bottom_left_c={
    Initial_color:'#59a67f',
    highlight_color:'#00ff74',
    value:3,
    name:"bottom-left-circle"
  }
  let bottom_right_c={
    Initial_color:'#c4c639',
    highlight_color:'#fff000',
    value:4,
    name:"bottom-right-circle"
  } 
  let start=document.querySelector('.btn-alt')
  let t_l= document.querySelector('.top-left-circle')
  let t_r= document.querySelector(".top-right-circle")
  let b_l= document.querySelector(".bottom-left-circle")
  let b_r= document.querySelector(".bottom-right-circle") 
  let feedback= document.querySelector("h3")
      function toggleColor(a,b)
       {
          return new Promise((resolve,reject)=>{ 
            setTimeout(()=>{  
             b.style.background =a.highlight_color
            },1000 ) 
            setTimeout(()=>{
             b.style.background=a.Initial_color  
          resolve(game_st)
           },1700 )   
          })
      } 
     t_l.addEventListener('click',()=>{ 
      click_player(t_l,top_left_c)
      })
     t_r.addEventListener('click',()=>{ 
      click_player(t_r,top_right_c)
     })
     b_l.addEventListener('click',()=>{ 
      click_player(b_l,bottom_left_c)
     })
     b_r.addEventListener('click',()=>{ 
      click_player(b_r,bottom_right_c)
    })
   function click_player(element,side_c)
   {
    if (control_player())
    {
      game_st.Color_order_player.push(side_c.value)
      element.style.background =side_c.highlight_color
      
      setTimeout(()=>{
       element.style.background =side_c.Initial_color
       console.log(game_st)
       if (game_st.Color_order.length==game_st.Color_order_player.length)
       { 
         console.log (check_result())
         if( check_result())
         {
          Feedback()
          game_st.Color_order_player.length=0
         add_new_color()
         }
         else
         feedback.innerHTML='נסה שוב חבר'
      } },500)  
    }
  }
  function Feedback()
  { 
    switch (game_st.Color_order.length) {
      case 1:
          feedback.innerHTML='קל מידי '
          break;
      case 2:
        feedback.innerHTML='עדיין קל'
          break;
      case 3:
        feedback.innerHTML='יפה לך'
          break;
          case 4:
        feedback.innerHTML='הופה התחלנו'
          break;
      case 5:
        feedback.innerHTML='ענק.תמשיך לבד'
        break;
  }
}

  
  function control_player()
  {
    if (game_st.control_player&& game_st.Color_order.length>game_st.Color_order_player.length)
    return true
  } 
 function init_status(){
 game_st.Color_order.length=0
 game_st.Color_order_player.length=0
 game_st.control_player=false
 } 
    function check_result(){
      for(let i=0;i<game_st.Color_order.length;i++)
      {
        if (game_st.Color_order[i]!=game_st.Color_order_player[i])  
         return false
      }
      return true 
    }
      start.addEventListener('click', () => {
        init_status()
        add_new_color()
        })
  
  
       function next_round(num){ 
        return new Promise((resolve, reject) => {
        if (num==1)
       { 
        toggleColor(top_left_c,t_l)
        .then (()=>   resolve())
       }
        else if (num==2) 
        { 
        toggleColor(top_right_c,t_r)
        .then (()=>   resolve())
        }
        else if (num==3)
        {
        toggleColor(bottom_left_c,b_l)
        .then (()=>   resolve())
        }
        else
        {
        toggleColor(bottom_right_c,b_r)
        .then (()=>   resolve())
   
      }
        })
      } 
       function add_new_color()
       {
        game_st.control_player=false
        num= Math.floor(Math.random() * 4)+ 1;
        game_st.Color_order.push(num)
        computer_control()
       }

      computer_control = async () => {
        for ( let i=0;i<game_st.Color_order.length;i++)
       await next_round(game_st.Color_order[i])
       game_st.control_player=true
       console.log(game_st.control_player)
      }

      
 
  

 
    

     

      
       
          
      
      
  
      





