const checker = (choice) => {

    const correct_index = data[count].correctAnswer;
    var arr = [] ; 

    const test = data;

    for (let i = 0; i < test.length; i++) {
        arr.push(i+1+":"+test[i].correctAnswer+"<br>");
    }

     if(choice == correct_index){
        correct_count++;
    }
    
    desc="عدد الاجابات الصحيحة : " +correct_count;
    desc2="عدد الاسئلة المجاب عنها : "+ parseInt(count+1);
    desc3="اضغط مرة اخري لعرض الاجابات الصحيحة"
    all = `${desc} <br> ${desc2} <br> ${desc3}`;
    start();
    display_result(all,arr);
 }