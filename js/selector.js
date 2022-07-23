var count = 0;
var correct_count = 0;
const container = document.querySelector('#container');

const next = (choice) => {
    checker(choice);
     count++;
     start();}

const start = () => {
    
    clearall();

    if(data[count].question <=0){ data[count].question ="الإنتهاء من الاختبار"; }

    /*########################### Question part ###########################*/
    const anc =new_ele(container, 'a', null,null, { name: 'href', val: '#' })
    const div =new_ele(anc,'div',null,'card mb-3 question',null);
    const div2=new_ele(div,'div',null,'card-body',null);
    var qs = (count+1)+" . "+data[count].question;

    new_ele(div2,'h5',qs,'card-title',{name:"style",val:"direction:rtl;"});
    /*########################### Answer part ###########################*/
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
    /*########################### author part ###########################*/
    author = data[count].author;
    new_ele(container, 'h5', author, 'author', null);
    /*########################### Correct Ans part ###########################*/
    correct_ans = data[count].correctAnswer;    
    console.log("correct_ans : "+correct_ans);
 }

 const display_result = (res) => {
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
             
             btn.innerHTML = res;
 })}
           
const clearall = () => { container.innerHTML = ''; }

start();