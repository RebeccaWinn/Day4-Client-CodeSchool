var url="http://todo2021.codeschool.cloud";

var app = new Vue ({
        el:"#app",
    data:{
        todos:[
            // {
            //     name:"Get groceries",
            //     description: "Go to this store blah blah",
            //     done: false,
            //     editing: false,
            //     deadline: new Date().toLocaleDateString()
            // },
            // {
            //     name:"Mow the lawn",
            //     description:"N/A",
            //     done: false,
            //     editing: false, 
            //     deadline:  new Date().toLocaleDateString()
            // },
            // {
            //     name:"Clean the house",
            //     description:"The kitchen and living room",
            //     done: false,
            //     editing: false,
            //     deadline: new Date().toLocaleDateString()
            // },
            // {
            //     name:"Take dog on walk",
            //     description:"N/A",
            //     done: false,
            //     editing: false,
            //     deadline: new Date().toLocaleDateString()
            // },
        ],
        new_todo_name: "",
        new_todo_description: "",
        new_todo_deadline: "",
 
        },
        created:function(){
            this.getTodos();
        },
  

    methods:{
        getTodos: function(){
            fetch(`${url}/todo`).then(function(response){
                response.json().then(function(data){
                    console.log(data);
                    app.todos = data;
                });
            })         
    
        },

     
        addNewTodo: function(){
            var request_body= { 
                name: this.new_todo_name,
                description: this.new_todo_description,
                done: false,
                deadline: this.new_todo_deadline
            };
            fetch(`${url}/todo`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(request_body)
            }).then(function(response){
                console.log(request_body)
                if(response.status == 400){
                    response.json().then(function(data){
                        alert(data.msg)
                    })
                }else if(response.status == 201){
                    app.new_todo_name="";
                    app.new_todo_description="";
                    app.new_todo_deadline="";
                    app.getTodos();
                }
            });
            
        },
        
        deleteTodo: function ( todo ) {
            fetch(`${url}/todo/`+todo,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(function(){
                app.getTodos()})

        },

   
        editTodo: function(todo){
            todo.editing = true;
            // this.$set(todo, 'editing', true);
        },
        saveTodo: function(todo){
            todo.editing = false;
    
        }
    }
});

