const checker = (choice) => {

    const correct_index = data[count].correctAnswer;
 
    if(choice == correct_index){
 
        correct_count++;
        // console.log("correct_count :"+correct_count);
    }
  
    desc="عدد الاجابات الصحيحة : " +correct_count;
    desc2="عدد الاسئلة المجاب عنها : "+ parseInt(count+1);
    all = `${desc} <br> ${desc2}`;
    start();
    display_result(all);
 }