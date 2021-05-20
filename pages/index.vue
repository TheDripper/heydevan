<template>
  <div id="root" class="flex">
    <div :class="classes"></div>
    <div id="tiles" class="w-full h-screen" data-push="test">
      <div
        :id="post.title.rendered"
        v-for="post in posts"
        :key="post.id"
        class="post"
        v-html="post.content.rendered"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import $ from "jquery";
export default {
  created() {},
  mounted() {
    // $("a").each(function () {
    //   $(this).attr("target", "_blank");
    // });
    $(".scroll a").on("click", function (e) {
      e.preventDefault();
      const hash = $(this).attr("href");
      console.log(hash);
      // const headerHeight = $header.outerHeight() + 500;
      const offset = $(hash).offset().top;
      $("html,body").animate({ scrollTop: offset }, 500);
    });
    let instance = this;
    $(".slider").each(function () {
      instance.$slider($(this).find(".blocks-gallery-grid"));
    });
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    classes() {
      return this.$store.state.classes;
    },
  },
};
</script>
<style lang="scss">
html,
body {
}
h1 {
  font-family: "Nunito Sans";
  @apply text-6xl font-bold;
}
h2 {
  font-family: "Nunito";
  @apply text-4xl font-bold;
}
h3 {
  font-family: "Nunito Sans";
  @apply text-3xl font-bold;
}
p,
a {
  font-family: "Nunito Sans";
}
.drop {
  text-shadow: 2px 2px 4px blue, -2px -2px 4px blue;
}
ul {
  list-style: circle;
  @apply pl-4;
}
.blocks-gallery-grid.slick-slider {
  @apply w-full relative pt-12 mt-12;
  height: 230px;
  overflow: hidden;
  figure {
    height: 230px;
    overflow: hidden;
    @apply flex justify-center items-center;
  }
  .slick-prev {
    @apply absolute rounded p-2;
    top: 0;
    left: 0;
    background: #ef4300;
    color: white;
  }
  .slick-next {
    @apply absolute rounded p-2;
    top: 0;
    right: 0;
    background: #ef4300;
    color: white;
  }
}
.gallery-vertical {
  li {
    margin: 3rem 0 !important;
    img {
      max-width: 120px !important;
      @apply mx-auto;
    }
  }
}
</style>