app.controller('homeController', ['TodoService', function(TodoService) {

 var vm = this;

 vm.name = 'Hamlet';


 var showTodos = function() {
 	TodoService.showTodos()
 		.then((info)=>{
			console.log(info)
			vm.todos = info.data.todos;
	})
 }

showTodos();


 vm.submitTodo = ($event)=>{
 	// $event.target.contentEditable = true;

 	TodoService.createTodo(vm.todo)
 		.then(()=>{
 			showTodos();
 		})
 }

 vm.deleteTodo = (id)=>{
 	TodoService.deleteTodo(id)
 		.then(()=>{
 			showTodos();
 		})
 }

vm.editable = ($event, item)=>{
	debugger
	if(event.target.parentElement.children[0].hasAttribute('contentEditable') === false) {
 		event.target.parentElement.children[0].setAttribute('contentEditable', true);
 		event.target.innerHTML = 'Submit';
	}
	else {
		event.target.parentElement.children[0].setAttribute('contentEditable', false);	
		event.target.innerHTML = 'Edit';
	}
 }

 vm.updateItem = ($event, item)=>{
 	var text = $event.target.outerText;

 	// $event.target.contentEditable = true;
 	console.log(item)
 	console.log(vm)
 	console.log($event)

	

 	// debugger
 }

}]);
	