
function numbGenerate(from, to){
    const arr = []
    for(let i = from; i <= to; i++){
        arr.push(i)
    }
    return arr;
}

const createSector = () =>{
    const container = document.querySelector('.container');
    const lines = createLine();
    const sector = numbGenerate(1,3).map(el => 
        `<div class="sector" data-sector=${el}>${lines}</div>`)
    .join('');
    container.innerHTML = sector;
    
};

const createLine = () =>
    numbGenerate(1, 10).map(el =>
        `<div class="line" data-line=${el}>${createPlace()}</div>`)
    .join('');

const createPlace = () => 
    numbGenerate(1, 10).map(el =>
        `<div class="place" data-place=${el}></div>`)
    .join('');


createSector();

function showPlace(){
    document.querySelector('.container')
    .addEventListener('click', (e) =>{
        if(!e.target.classList.contains('place')){
            return;
        }
        const numPlace = e.target.dataset.place;
        const numLine = e.target.closest('.line').dataset.line;
        const numSector = e.target.closest('.sector').dataset.sector;
        console.log(numSector);
        
    })
    
}
showPlace()