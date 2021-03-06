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
    comments:[],
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
    addBlog(state, blog){
      state.blogs.push(blog)
    },
    removeBlog(state, id){
      state.blogs = state.blogs.filter(b => b.id != id)
    },
    setComment(state, comment){
      state.comments.push(comment)
    },
    setComments(state, comments){
      state.comments = comments
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
    },
    async createBlog({commit}, newBlog){
      try {
        let res = await api.post("blogs", newBlog)
        commit("addBlog", res.data)
        commit("setActiveBlog", res.data)
        router.push({name: "ActiveBlog", params:{id: res.data.blogId}})
      } catch (error) {
        console.error(error);
      }
    },
    async deleteBlog({commit}, blogId){
      try {
        await api.delete('blogs/' + blogId)
        commit("removeBlog", blogId)
        commit("setActiveBlog", {})
      } catch (error) {
        console.error(error );
      }
    },
    async editBlog({commit}, blogData){
      try {
        let res = await api.put("blogs/" + blogData.id, blogData)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createComment({commit, dispatch}, commentData){
      try {
        let res = await api.post("comments", commentData)
        commit("setComment", res.data)
        dispatch("getComments", commentData.blog)
      } catch (error) {
        console.error(error);
      }
    },
    async getComments({commit}, blogId){
      try {
        let res = await api.get('blogs/' + blogId + '/comments')
        commit("setComments", res.data)
      } catch (error) {
        console.error(error);
      }
    },
    async deleteComment({commit , dispatch}, commentData){
      try {
        let res = await api.delete('comments/'+ commentData.id)
        dispatch("getComments", commentData.blog)
      } catch (error) {
        console.error();
      }
    },
    async editComment({commit, dispatch}, commentData){
      try {
        let res = await api.put("comments/" + commentData._id, commentData.body)
        dispatch("getComments", commentData.blog)
      } catch (error) {
        console.error(error);
      }
    }
  },
});
