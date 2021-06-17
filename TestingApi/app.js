var app = new Vue({
    el:"#app",


    created: function(){
        fetch('https://highscoreapi.herokuapp.com/scores').then(function(response){
            response.json().then(function(data){
                console.log(data);
            })
        })
    },
    methods:{
        getScores: function(){
            fetch('https://highscoreapi.herokuapp.com/scores').then(function(response){
                response.json().then(function(data){
                    console.log(data);
                })
            })
        },
        getScores_2: function(){
            fetch('https://highscoreapi.herokuapp.com/scores')
                .then( response => response.json())
                .then( data => console.log(data));
        }
    }

})