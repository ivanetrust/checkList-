// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
//   // Remove task event
//   taskList.addEventListener('click', removeTask)
}

// Add task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  };

  // Create Li element 
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append to the link to li
  li.appendChild(link);
  // Append li to ul 
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
 
  e.preventDefault();
}

// // Remove task
// function removeTask();