const the_animation =document.querySelectorAll('.animation');
// creating an observer function 
const Observer= new IntersectionObserver(
    (entries)=>{
        entries.forEach( (entry)=>{if(entry.isIntersecting){
            entry.target.classList.add('scroll_animation');
        }else{
            entry.target.classList.remove('scroll_animation')
        }
    });
    },
    {threshold:0.5}
);

for(let i =0 ; i< the_animation.length; i++){
    const element =the_animation[i]
    Observer.observe(element)
}