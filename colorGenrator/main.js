const hexBtn = document.querySelector('.hex-button')
const hexValue = document.querySelector('.hex-color-value')
const hexColorContainer = document.querySelector('.hex-color-container')
const hexCopyBtn = document.querySelector('.hex-copy-color')
hexBtn.addEventListener('click',()=>{
    let characterSet = '0123456789ABCDEF'
    let hexColorOutput = ''

    for(let i=0,charSetLength = characterSet.length;i<6;++i){
        hexColorOutput+= characterSet.charAt(Math.floor(Math.random()*charSetLength));
    }

    hexValue.textContent = `#${hexColorOutput}`
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`
    hexBtn.style.color = `#${hexColorOutput}`
    console.log(hexColorOutput)
})



//rgb color generation 
const rgbContainer = document.querySelector('.rgb-color-container')
const rgbBtn = document.querySelector('.rgb-btn')
const getRedInputRange = document.querySelector('#red')
const getGreenInputRange = document.querySelector('#green')
const getBlueInputRange = document.querySelector('#blue')
const rgbCopyBtn = document.querySelector('.rgb-copy-color')
const rgbColorValue = document.querySelector('.rgb-color-value')
rgbBtn.addEventListener('click',()=>{
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;

    let bgColor = `rgb(${extractRedValue},${extractGreenValue},${extractBlueValue})`
    rgbColorValue.textContent = bgColor
    rgbContainer.style.backgroundColor = bgColor
    rgbBtn.style.color = bgColor
})


function copyHexColor(){
    console.log(hexValue.textContent)
    navigator.clipboard.writeText(hexValue.textContent)
    alert('Color is copied to clipborad')
}
hexCopyBtn.addEventListener('click',copyHexColor)

function copyRgbColor(){
    navigator.clipboard.writeText(rgbColorValue.textContent)
    alert('Rgb Color is Copied to clipboard')
}

rgbCopyBtn.addEventListener('click',copyRgbColor)