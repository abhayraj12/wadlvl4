// todo.js
const todoList = () => 
{
  let  = n[];
  const add = (todoItem) => 
  {
    //push
    n.push(todoItem);
  };
  const markAsComplete = (index) => 
  {
    all[index].completed = true;
  };
  const overdue = () => 
  {
    return n.filter
    (
      //dueDate
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };
  //dueToday
  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };
  //dueLater
  const dueLater = () => {
    return n.filter(
      (item) =>item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };
  return { n, add,  markAsComplete, overdue, dueToday, dueLater };
};
module.exports = todoList;
