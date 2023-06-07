const todolist = [];

function renderTodoList(){
    
    let todolistHTML = '';
    // function(todoObject,i){} can be written as (todoObject,i) => {}
    todolist.forEach(function(todoObject, i){
        const activityName = todoObject.Name;
        const activityDate = todoObject.Date;

        const html = `
        <div class="div-js-activity">${activityName}</div>
        <div class="div-js-date">${activityDate}</div>
        <button onclick="todolist.splice(${i},1); renderTodoList(); " class="del-button">
            Delete
        </button> `
        todolistHTML += html;
    })

    // for (let i = 0; i < todolist.length; i++){
    //     const todoObject = todolist[i];
    //     const activityName = todoObject.Name;
    //     const activityDate = todoObject.Date;

    //     const html = `
    //     <div>${activityName}</div>
    //     <div>${activityDate}</div>
    //     <button onclick="todolist.splice(${i},1); renderTodoList(); " class="del-button">
    //         Delete
    //     </button> `
    //     todolistHTML += html;
    // }
    // console.log(todolistHTML);   
    document.querySelector('.js-addActivity').innerHTML = todolistHTML;
}

// //Normal Function method
// function addTodo(){
//     const inputElement = document.querySelector('.js-activity')
//     const name = inputElement.value;

//     const inputDate = document.querySelector('.js-date');
//     const date = inputDate.value;

//     todolist.push({
//         Name: name,
//         Date: date
//     });

//     //it will reset the text in text box after clicking on Add button.
//     inputElement.value = '';
//     inputDate.value = '';

//     // adding this after creating function above. and it recalls the function inside the function.
//     renderTodoList();
    
// }


// Arrow Function method
addTodo = () => {
    const inputElement = document.querySelector('.js-activity')
    const name = inputElement.value;

    const inputDate = document.querySelector('.js-date');
    const date = inputDate.value;

    todolist.push({
        Name: name,
        Date: date
    });

    //it will reset the text in text box after clicking on Add button.
    inputElement.value = '';
    inputDate.value = '';

    // adding this after creating function above. and it recalls the function inside the function.
    renderTodoList();
}



