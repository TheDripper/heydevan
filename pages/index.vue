<template>
  <div id="root" class="flex">
    <div :class="classes"></div>
    <div id="content" v-html="page.content.rendered"></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import $ from "jquery";
export default {
  methods: {
    ...mapActions['getpage']
  },
  async asyncData({ $axios }) {
    try {
      // let page = await $axios("/server-middleware/page?id=home");
      let { data } = await getPage(6);
      return {
        page: data,
      };
    } catch (err) {
      console.log(err);
    }
  },
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
    // page() {
    //   return this.$store.state.posts[0];
    // },
    classes() {
      return this.$store.state.classes;
    },
  },
};
</script>
<style lang="scss">
#content {
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
html,
body {
}
h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-head leading-snug;
}
h1 {
  @apply text-6xl font-bold;
}
h2 {
  @apply text-4xl font-bold;
}
h3 {
  @apply text-3xl font-bold;
}
h4 {
  @apply mb-2;
}
p,
a,
li {
  @apply font-body font-light;
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
    color: white;
  }
  .slick-next {
    @apply absolute rounded p-2;
    top: 0;
    right: 0;
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
.w-full-gutter {
  width: calc(100% - 2rem);
}
.wp-block-button__link {
  border-radius: 0;
  background: none;
  border: 2px solid black;
  color: black;
  @apply font-footer;
}
.wp-block-buttons {
  @apply mt-8;
}
.bleed-up {
  img {
    transform: translateY(-30px);
    @apply relative z-10;
  }
}
.epmt {
  @apply flex justify-end;
  img {
    max-width: 913px;
    transform: translate(257px);
  }
}
.arrow-link {
  a {
    color: #b8c734;
    @apply relative font-normal mt-12 inline-block;
    &:after {
      @apply absolute;
      top: 50%;
      right: 0;
      transform: translate(110%,-38%);
      content: url("/Arrow.svg");
    }
  }
}
.list-none {
  ul {
    list-style: none !important;
  }
}
</style>