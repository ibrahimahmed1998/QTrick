
data = [
    {
        question: 'في كل الحسابات الدائنة بالجنيه المصري يكون الايداع النقدي حق يوم العمل التالي و لو اراد العميل ان يكون الايداع حق نفس اليوم',
        answers: {
            a:"سيتم خصم عمولة 0.1% ( واحد في الالف بحد ادني 5 ج )",
            b:"سيتم خصم عمولة 30 ج علي كل المبلغ",
            c:'سيتم خصم عمولة 30 ج علي كل الف',
            d:'لا شئ مما سبق'
        }, correctAnswer: 'a'
    },
    {
        question: 'لا يحق للعميل السحب النقدي من حساباته داخل الفرع بالرقم القومي منتهي الصلاحية',
        answers: {
            a: "يمكن السحب من الحساب بجواز السفر الساري و يجب ان يكون مسجل به الرقم القومي",
            b: "رخصة سلاح سارية موجود بها رقم قومي ",
            c: "بطاقة عسكرية للظباط / ضباط الصف",
            d: "جميع ما سبق",

        }, correctAnswer: 'd'
    },

    {
        question: '',
        answers: {
            a: " ",
            b: " ",
            c: " ",
            d: " ",

        }, correctAnswer: 'd'
    },

    {
        question: '',
        answers: {
            a: " ",
            b: " ",
            c: " ",
            d: " ",

        }, correctAnswer: 'd'
    },

    {
        question: '',
        answers: {
            a: " ",
            b: " ",
            c: " ",
            d: " ",

        }, correctAnswer: 'd'
    },

    {
        question: '',
        answers: {
            a: " ",
            b: " ",
            c: " ",
            d: " ",

        }, correctAnswer: 'd'
    },

    {
        question: '',
        answers: {
            a: " ",
            b: " ",
            c: " ",
            d: " ",

        }, correctAnswer: 'd'
    },

    {
        question: '',
        answers: {
            a: " ",
            b: " ",
            c: " ",
            d: " ",

        }, correctAnswer: 'd'
    },

]

var count = 0 ; 

const next = () => {

    count++;
    console.log(count);
    start(count);

}

const start = (id) => {

    const question = document.querySelector('#question');
    const a = document.querySelector('#a');
    const b = document.querySelector('#b');
    const c = document.querySelector('#c');
    const d = document.querySelector('#d');


    if (id) {
        question.innerHTML = data[id].question;
        a.innerHTML = data[id].answers.a;
        b.innerHTML = data[id].answers.b;
        c.innerHTML = data[id].answers.c;
        d.innerHTML = data[id].answers.d;

         
    }
    else
    {
        question.innerHTML = data[0].question;
        a.innerHTML = data[0].answers.a;
        b.innerHTML = data[0].answers.b;
        c.innerHTML = data[0].answers.c;
        d.innerHTML = data[0].answers.d;

    }
}

start();