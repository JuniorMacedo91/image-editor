const file = document.querySelector('#uploadFile-btn')
const uploadButtonWrapper = document.getElementById('uploadButtonWrapper')
const containerResizable = document.getElementById('container__resizable')
const download = document.querySelector('#download-btn')
const deletePicture = document.querySelector('.fa-trash')


file.addEventListener('change', uploadImage)
containerResizable.addEventListener('mousemove', handleResize)
containerResizable.addEventListener('touchmove', handleResize)
download.addEventListener('click', downloadPicture)
deletePicture.addEventListener('click', deleteImage)


function uploadImage(){
    let picture = this.files[0]

    if(picture){
        let reader = new FileReader();

        reader.addEventListener('load', ()=>{
            anchor = document.createElement('a')
            const image = document.createElement('img')

            anchor.href = reader.result
            anchor.download = picture.name;
            image.src = reader.result

            containerResizable.appendChild(anchor)
            anchor.appendChild(image)

        })
        reader.readAsDataURL(picture)
    }
}


function downloadPicture(){
    anchor.click()
}


function handleResize(){
    let width = document.getElementById('width').innerHTML = `${containerResizable.clientWidth} px`;
    let height = document.getElementById('height').innerHTML = `${containerResizable.clientHeight} px`;
}
handleResize()


function deleteImage(){
    containerResizable.removeChild(anchor)
}