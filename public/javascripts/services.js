app.service('TodoService', function ($http) {
	return {
		createTodo: (content)=>{
			var req = {
				method: 'POST',
				url: '/todos',
				data: {todo: {todo: content}}
			}

			return $http(req);
		},
		showTodos: ()=>{
			var req = {
				method: 'GET',
				url: '/todos'
			}

			return $http(req);
		},
		deleteTodo: (id)=>{
			var req = {
				method: 'DELETE',
				url: '/todos/'+id,
			}

			return $http(req)
		}
	}
})


// app.service("TodoService", function($http){

// })