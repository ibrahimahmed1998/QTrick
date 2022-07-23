const  container = document.querySelector('#container');

address=[
    {
        question:"انا عايز اعرف كل حاجة عن البطاقة الائتمانية و عايز اعرف كل الفروق ما بينهم كلهم",
    },
    {
        question:"انا عامل اكتر من 5 تعزيزات لشكوي بقالها شهرين و مفيش رد !",
    },
    {
        question:"انا اتصلت اكتر من 5 مرات علي الانترنت البنكي و مش هقفل غير لما يشتغل معايا",
    },
    {
        question:"انا مش هقفل معاك غير لما تديني مسئول",
    },
    {
        question:"اقتراحات",
    },
    {
        question:"اقتراحات",
    },
    {
        question:"اقتراحات",
    },
    {
        question:"اقتراحات",
    },
    {
        question:"اقتراحات",
    },
    {
        question:"اقتراحات",
    },

]


// console.log(address);

 
address.forEach( element  => {

    const div= new_ele( container, 'div', null , 'alert alert-danger col col-lg-5', null  );
    new_ele( div, 'a', element.question , null, {name:"href",val:"test"} );

});





