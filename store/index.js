import pages from "~/static/pages.json"
export const state = () => ({
  posts: []
});

export const mutations = {
  posts(state, posts) {
    state.posts = posts;
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
      // commit('posts',pages);
  }
};