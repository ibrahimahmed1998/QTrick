const  container = document.querySelector('#container');

address=[
    {
        question:"ما هو أكبر سورة في القرآن الكريم؟",
    },
    {
        question:"ما هو أكبر سورة في  ",
    },
    {
        question:"ما ه ي القرآن الكريم؟",
    },
    {
        question:"ما هو أكبر سورة في ال كريم؟",
    },
    {
        question:"ما هو  لقرآن الكريم؟",
    },

]




console.log(address);

address.forEach( element  => {

      new_ele( container, 'div', element.question , 'alert alert-danger col col-lg-5', null );
 
});





