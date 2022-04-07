const me= document.querySelector("nav .me");
const meBtn=document.getElementById("me");
const info_icon=document.querySelector(".alumni-news .news-area .head-bar img");
const info_box=document.querySelector(".alumni-news .news-area .head-bar .info-desc");
const news_seeMoreBtn=document.querySelector(".alumni-news .news-area .see-more-btn");
const news_list=document.querySelector(".alumni-news .news-area .all-news");
// me method....
meBtn.addEventListener('click',()=>{
    if(me.style.display=='none'){
        me.style.display='block';
    }
    else{
        me.style.display='none';
    }
});
//.........showing info box
info_icon.addEventListener('click',()=>{
  if(info_box.style.display=='none'){
      info_box.style.display='block';
    }else{
        info_box.style.display='none';   
  }   
});
news_seeMoreBtn.addEventListener('click',(e)=>{
    if(news_list.style.height!='fit-content'){
         news_list.style.height='fit-content';
        e.target.innerHTML='..see less';
    }
    else{
        news_list.style.height='140px';
       e.target.innerHTML='..see more';
    }
})