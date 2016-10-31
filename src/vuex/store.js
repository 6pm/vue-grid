import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// initial state
const state = {

    testStoreState: 'store state'
}


const mutations = {
    // A mutation receives the current state as the first argument
    // You can make any modifications you want inside this function
    CHANGE_TAB (state, amount) {
        state.testStoreState = amount
    },



}


// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
    strict: true,
    state,
    mutations
})