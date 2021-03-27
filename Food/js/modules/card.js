function card(){
    //Card

    class Card{
        constructor(img, alt, title, text, price, parentSection, ...classesName){
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.text = text;
            this.price = price;
            this.parent = document.querySelector(parentSection);
            this.classesName = classesName;
        }
        render(){
            const element = document.createElement('div')
            if(this.classesName.length == 0){
                element.classList.add("menu__item");
            }else{
                element.classList.add(this.classesName);
            }
            element.innerHTML = `
            <img src=${this.img} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}"</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;
            this.parent.append(element);
        }
    }
    async function createCard(){
        const res = await fetch('http://localhost:3000/menu').then(data => data.json())
        .then (data => data.forEach(({img, altimg, title, descr, price}) => {
        new Card(img, altimg, title, descr, price, ".menu .container").render();
    }))
        return res
    }
    createCard();
}
module.exports = card;