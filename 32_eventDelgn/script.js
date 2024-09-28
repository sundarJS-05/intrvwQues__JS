
let tabs = document.querySelector('.tabs')

let gallery = document.querySelectorAll('.images')

tabs.addEventListener( 'click', (event)=>{

    if( event.target.dataset.category){
    filterSearch(event.target.dataset.category )
    }

})


let filterSearch = (dataValue)=>{

    gallery.forEach( 
        (elem)=> { console.log(elem.dataset.category) 

    if(elem.dataset.category == dataValue){
        elem.style.display='block'
    }
    else{
        elem.style.display='none'
    }

})

}