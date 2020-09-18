import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog:{},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs ){
      state.blogs = blogs
    },
    setActiveBlog(state, blog){
      state.activeBlog = blog
    },
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBlogs({commit}, dispatch){
      try {
        let res = await api.get("blogs")
        commit("setBlogs", res.data)
        console.log(res)
      } catch (error) {
        console.error(error);
      }
    },
    async getActiveBlog({commit}, blogId){
      try {
        let res = await api.get("blogs/" + blogId)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error);
      }
    }
  },
});
