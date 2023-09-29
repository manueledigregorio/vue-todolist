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

       message:'',
       iserror:false,
       errorTask: false

    } 
  },
  
  methods:{
    removeTask(i){
      if(!this.tasks[i].done){
        this.errorTask = true

      }else{
        this.errorTask = false
        this.tasks.splice(i, 1)
      }

      
    },

    addTask(){
      if(this.message.length < 5){
      this.iserror = true

      }else{
        const newTaskObject = {text:this.message, done:false}
        this.tasks.unshift(newTaskObject)
        this.iserror = false
        this.message = ''
        
      }
      
    }


   



  }



}).mount('#app');