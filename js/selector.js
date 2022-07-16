var count = 0;
const container = document.querySelector('#container');

const next = () => {
    count++;
    // console.log(count);
    start(count);
}

const new_ele = (parent, ele, txt, classes, attribute) => {
    // element, append in parent, class, textcontent, setattribute
    const myEle = document.createElement(ele)
    parent.appendChild(myEle)
    if (classes) myEle.className = classes
    if (txt) myEle.textContent = txt
    if (attribute) myEle.setAttribute(attribute.name, attribute.val) // {name:"id", val:"1"}
    return myEle
}

const start = () => {
    clearall();

    const anc = new_ele(container, 'a', null,null, { name: 'href', val: '#' })
    const div = new_ele(anc, 'div', null, 'card mb-3', null);
    const div2 = new_ele(div, 'div', null, 'card-body', null);
    new_ele(div2, 'h5', data[count].question, 'card-title', null);

    arr = Object.keys(data[count].answers);

    for (let i = 0; i < arr.length; i++) {
        const anc2 = new_ele(container, 'a', null,null, { name: 'href', val: '#' })
        const div3 = new_ele(anc2, 'div', null, 'card mb-3', { name: 'onclick', val: `next()` });
        const div4 = new_ele(div3, 'div', null, 'card-body', null);
        new_ele(div4, 'h5', data[count].answers[arr[i]], 'card-title', null);
    }
}

const clearall = () => { container.innerHTML = ''; }

start();