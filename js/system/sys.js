const  container = document.querySelector('#container');

address=[
    {
        question:"ازاي امسح التوكن ؟",
    },
    {
        question:"ازاي اراجع كل الشكاوي المفتوحة؟",
    },
    {
        question:"ازاي اطلع كل حركات الحساب من I.V ",
    },
    {
        question:"ازاي اوصل ال Auth List بسرعة",
    },
    {
        question:"اقتراحات",
    },

]




console.log(address);

address.forEach( element  => {

      const div= new_ele( container, 'div', null , 'alert alert-danger col col-lg-5', null  );
      new_ele( div, 'a', element.question , null, {name:"href",val:"test"} );
 
});





