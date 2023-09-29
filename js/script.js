const { createApp } = Vue;
createApp({
  data(){
    return{
      tasks:[
        'fare la spesa ',
        'dare da mangiare al cane',
        'andare in America'
      ],

       
    }
  },
  
  methods:{
    remuveTask(i){
      this.tasks.splice(i, 1)

    }

  }



}).mount('#app');