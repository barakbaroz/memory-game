
let game_st= {
  Color_order:[],
  Color_order_player:[],
  control_player:false
  }
  
  let top_left_c={
    Initial_color:'#5286ad',
    highlight_color:'#0013ff',
    value:'a',
    name:"top-left-circle clear"
  }
  let top_right_c={
    Initial_color:'#ac5359',
    highlight_color:'#ff0003',
    value:'b',
    name:"top-right-circle"
    
  }
  let bottom_left_c={
    Initial_color:'#59a67f',
    highlight_color:'#00ff74',
    value:'c',
    name:"bottom-left-circle"
  }
  let bottom_right_c={
    Initial_color:'#c4c639',
    highlight_color:'#fff000',
    value:'d',
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
             game_st.Color_order.push(a.value) 
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
      game_st.control_player=false
      element.style.background =side_c.highlight_color
      
      setTimeout(()=>{
       game_st.control_player=true
       element.style.background =side_c.Initial_color
       console.log(game_st)
       if (game_st.Color_order.length==game_st.Color_order_player.length)
       { 
         console.log (check_result())
         if( check_result())
         { 
            if (game_st.Color_order.length==1)
            {
              feedback.innerHTML='הדסה  ברעוז'
            round_two()
           .then(()=>{
            game_st.control_player=true
             })
            }
            else if(game_st.Color_order.length==2)
             {
              feedback.innerHTML='הדסה אלופה'
             round_three() 
             }
         else feedback.innerHTML='הדסה ענקיתתת'
        }
       else
       feedback.innerHTML='נכשלת '
      } },500)  
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
        round_one()
       .then(()=>{
         game_st.control_player=true
         console.log(game_st)
        })
       })

       function round_one(){
        return new Promise((resolve, reject) => {
        init_status()
        toggleColor(top_left_c,t_l)
        .then(()=>
        resolve())
        })
       }

       function round_two(){
        return new Promise((resolve, reject) => {
          round_one()
          .then(()=>
            toggleColor(bottom_right_c,b_r)
          )
            .then(()=>{
              resolve()
          })     
        })
      }
      function round_three(){
        game_st.control_player=false
        round_two()
        .then(()=>
          toggleColor(bottom_left_c,b_l) )
        .then(()=>
          game_st.control_player=true
        )
      }

     

      
       
          
      
      
  
      





