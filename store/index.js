import pages from "~/static/pages.json"
import classes from "~/static/classes.json"
export const state = () => ({
  posts: [],
  classes: ''
});

export const mutations = {
  posts(state, posts) {
    state.posts = posts;
  },
  classes(state, classes) {
    state.classes = classes;
  }
};
export const actions = {
  // async getPage(context, id) {
  //   const posts = await this.$axios.$get('/wp-json/wp/v2/product');
  //   commit('posts',posts);
  // },
  async nuxtServerInit({commit}) {
    if(process.env.NODE_ENV=='development') {
      const posts = await this.$axios.$get('/wp-json/wp/v2/pages');
      commit('posts',posts);
    } else {
      commit('posts',pages);
    }
      commit('classes',classes);
  }
};