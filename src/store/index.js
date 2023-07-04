

import { createStore } from 'vuex'
const dataURL = ("  https://tomlga.github.io/EompServerVue/data.json")
                

export default createStore({
  state: {
    testimonials:null,
  },
  getters: {
  },
  mutations: {
   
    setTestimonial(state,testimonials){
      state.testimonials = testimonials
    },
  },
  actions: {
    
    async fetchTestimonial(context){
        try {
          let test = await fetch(dataURL);
          let {testimonials}= await test.json();
          if (testimonials){
            context.commit('setTestimonial', testimonials)
          }
        } catch (e){
          console.log(e.message); 
        }
    }
  },
  modules: {
  }
})













