const { createApp } = Vue;
createApp({
  data(){
    return{
      tasks:[
        {
          text: 'fare la spesa',
          done: false
        },
        {
          text:  'dare da mangiare al cane',
          done: false
        },
        {
          text:'andare in america',
          done: false
        }
       
       
      ],

       message:''
    } 
  },
  
  methods:{
    removeTask(i){
      this.tasks.splice(i, 1)

    },

    addTask(){
      this.tasks.unshift({text:this.message, done:false});
      console.log(this.tasks)
      this.message='';
    },

  }



}).mount('#app');