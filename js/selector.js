var count = 0;
var correct_count = 0;
const container = document.querySelector('#container');

const new_ele = (parent, ele, txt, classes, attribute) => {
    const myEle = document.createElement(ele)
    parent.appendChild(myEle)
    if (classes) myEle.className = classes
    if (txt) myEle.textContent = txt
    if (attribute) myEle.setAttribute(attribute.name, attribute.val) // {name:"id", val:"1"}
    return myEle
}

const next = (choice) => {
 
    checker(choice);

     
     count++;
     start();
}



const start = () => {
    
    clearall();

    // question part 
    const anc = new_ele(container, 'a', null,null, { name: 'href', val: '#' })
    const div = new_ele(anc, 'div', null, 'card mb-3', null);
    const div2 = new_ele(div, 'div', null, 'card-body', null);
    new_ele(div2, 'h5', data[count].question, 'card-title', null);

    arr = Object.keys(data[count].answers);
  
    for (let i = 0; i < arr.length; i++) {
        const anc2 = new_ele(container, 'a', null,null, { name: 'href', val:'#' }   )
        switch (i) {
            case 0: f = "next('a')";break;
            case 1: f = "next('b')";break;
            case 2: f = "next('c')";break;
            case 3: f = "next('d')";break;
            default:  break;
        }
        const div3 = new_ele(anc2, 'div', null, 'card mb-3 ans', { name: 'onclick', val:f });
        const div4 = new_ele(div3, 'div', null, 'card-body', null);
        new_ele(div4, 'h5', data[count].answers[arr[i]], 'card-title', {name:'id', val:'ans'});
    }
    
 }

 const checker = (choice) => {

    console.log(count);
    const correct_index = data[count].correctAnswer;

    console.log(correct_index);
    console.log(choice);

    if(choice == correct_index){
 
        correct_count++;
        console.log("correct_count :"+correct_count);
        // div3.style.color = 'lightgreen';
        // div3[i].style.color = 'red';
    }
    // else{
    //     console.log("correct_count :"+correct_count);
    // }

    res = `عدد الاجابات الصحيحة هي: ${correct_count}`;

    start();
    display_result(res);
 }

 const display_result = (res) => {
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
       
             
             btn.innerHTML = res;

        
    // clearall();
    // const result = document.querySelector('#correct');

 
    
 }  )}
           
const clearall = () => { container.innerHTML = ''; }

start();
 