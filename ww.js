
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
  let pidback= document.querySelector("h3")
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
        if (game_st.control_player&& game_st.Color_order.length>game_st.Color_order_player.length)
        {
          game_st.control_player=false
        t_l.style.background =top_left_c.highlight_color
        game_st.Color_order_player.push(top_left_c.value)
        setTimeout(()=>{
          game_st.control_player=true
          t_l.style.background =top_left_c.Initial_color
          console.log(game_st)
          if (game_st.Color_order.length==game_st.Color_order_player.length)
          { 
            console.log (check_result())
           if( check_result())
            { 
             if (game_st.Color_order.length==1)
             {
              pidback.innerHTML='הדסה  ברעוז'
              round_two()
              .then(()=>{
                game_st.control_player=true
               }
               )
             }
            else if(game_st.Color_order.length<6)
            {
              pidback.innerHTML='הדסה אלופה'
            round_three() 
            }
            else  pidback.innerHTML='הדסה ענקיתתת'
            }
            else
            pidback.innerHTML='נכשלת '
        }
        },500)
        }
      })
      
     t_r.addEventListener('click',()=>{ 
      if (game_st.control_player&& game_st.Color_order.length>game_st.Color_order_player.length)
      {
      t_r.style.background =top_right_c.highlight_color
      game_st.Color_order_player.push(top_right_c.value)
      game_st.control_player=false
      setTimeout(()=>{
        game_st.control_player=true
        t_r.style.background =top_right_c.Initial_color
        console.log(game_st)
        if (game_st.Color_order.length==game_st.Color_order_player.length)
        { 
          console.log (check_result())
         if( check_result())
          { 
           if (game_st.Color_order.length==1)
           {
              pidback.innerHTML='הדסה  ברעוז'
              round_two()
              .then(()=>{
                game_st.control_player=true
               }
               )
      
           }
          else if(game_st.Color_order.length<6)
          {
            pidback.innerHTML='הדסה אלופה'
            round_three() 
          }
          else  pidback.innerHTML='הדסה ענקיתתת'
          }
          else
          pidback.innerHTML='נכשלת '
      }
      },500)
      }
    })
    
   
   b_l.addEventListener('click',()=>{ 
    if (game_st.control_player&& game_st.Color_order.length>game_st.Color_order_player.length)
    {
      game_st.Color_order_player.push(bottom_left_c.value)
      game_st.control_player=false
      b_l.style.background =bottom_left_c.highlight_color
    setTimeout(()=>{
      game_st.control_player=true
      b_l.style.background =bottom_left_c.Initial_color

      console.log(game_st)
    
      if (game_st.Color_order.length==game_st.Color_order_player.length)
      { 
        console.log (check_result())
       if( check_result())
        { 
         if (game_st.Color_order.length==1)
         {
          pidback.innerHTML='הדסה  ברעוז'
          round_two()
          .then(()=>{
           game_st.control_player=true
          }
          )
       
         }
        else if(game_st.Color_order.length<6)
        {
          pidback.innerHTML='הדסה אלופה'
        round_three() 
        }
        else  pidback.innerHTML='הדסה ענקיתתת'
        }
        else
        pidback.innerHTML='נכשלת '
    }
    },500)
    }
  })
 
  
  b_r.addEventListener('click',()=>{ 
    if (game_st.control_player&& game_st.Color_order.length>game_st.Color_order_player.length)
    {
      b_r.style.background =bottom_right_c.highlight_color
      game_st.Color_order_player.push(bottom_right_c.value)
      game_st.control_player=false
    setTimeout(()=>{
      game_st.control_player=true
      b_r.style.background =bottom_right_c.Initial_color
      console.log(game_st)
      if (game_st.Color_order.length==game_st.Color_order_player.length)
      { 
        console.log (check_result())
       if( check_result())
        { 
         if (game_st.Color_order.length==1)
         {
          pidback.innerHTML='הדסה  ברעוז'
         round_two()
         .then(()=>{
          game_st.control_player=true
         }
         ) 
         
         }
        else if(game_st.Color_order.length<6)
        {
          pidback.innerHTML='הדסה אלופה'
       
        round_three() 
        }
        else  pidback.innerHTML='הדסה ענקיתתת'
        }
        else
        pidback.innerHTML='נכשלת '
    }
    },500)
    }
  })
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
       
        toggleColor(top_left_c,t_l)
       .then((game_st)=>{
        init_status()
         game_st.control_player=true
         game_st.Color_order.push(top_left_c.value)
         console.log(game_st)
        })
       })
    
       function round_two(){
        return new Promise((resolve, reject) => {
          game_st.control_player=false
          toggleColor(top_left_c,t_l)
          .then(()=>{
            game_st.Color_order.push(top_left_c.value)
      
            toggleColor(bottom_right_c,b_r)
            .then(()=>{
              game_st.Color_order.push(bottom_right_c.value)
              resolve(game_st)
          })
          })
         
        })
  
      }
      function round_three(){
        game_st.control_player=false
        round_two()
        .then(()=>{
          toggleColor(bottom_left_c,b_l) 
        .then(()=>{
          game_st.Color_order.push(bottom_left_c.value)
          game_st.control_player=true
        })
    
        })
       
      }

     

      
       
          
      
      
  
      





