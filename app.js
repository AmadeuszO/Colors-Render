const newColor = document.querySelector('#generator-color-button');
const currentColor = document.querySelector('#display-color');

const valueHex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

const getHexRandom = () =>{
    const randomIndex = Math.floor(Math.random() * valueHex.length)
    return randomIndex
}

const getValueHexString = (lenght) =>{
    let hexString = '';
    for(let i = 0; i < lenght; i++){
        hexString += getHexRandom();
    }
    return hexString;
}

newColor.addEventListener('click', () => {
    const randomString = '#' +  getValueHexString(6);
    document.body.style.setProperty({
        'background-color',

    })
});