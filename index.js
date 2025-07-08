const img = document.querySelector('#images')

console.log(img)

img.addEventListener('click', function(e){
    // console.log(e.target.parentNode)

    if( e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

})
