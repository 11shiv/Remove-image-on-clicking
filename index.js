const img = document.querySelector('#images')

console.log(img)

img.addEventListener('click', function(e){
    // console.log(e.target.parentNode)

    let removeIt = e.target.parentNode
    removeIt.remove()

})