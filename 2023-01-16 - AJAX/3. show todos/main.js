const displayTodosAsync = async () => {
    try{
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const response = await fetch(url);
        const todos = await response.json();

        displayTodos(todos);
        displayStats(todos);
    }catch(err){
        console.log('error',err);
    }
}


const displayTodos = (todos) => {
    let content = "";
    for(const todo of todos){
        const {title,completed} = todo;
        const completedInfo = completed ? "completed" : "not completed";
        const li = `<li>${title}-${completedInfo}</li>`;
        content += li;
    }

    todoList.innerHTML = content;
   
}

const displayStats = (todos) => {
    const total = todos.length;
    const completedItems = todos.filter((todo) => todo.completed );
    // const nonCompletedItems = todos.filter((todo) => !todo.completed );


    stats.innerHTML = `
        Total Todos: ${total} <br>
        completed: ${completedItems.length} <br>
        non completed : ${total - completedItems.length}
    `;
}

