<template>
  <div class="container mt-5">
    <h1>CineVerse</h1>
    <p>عدد الأفلام: {{ trending.length }}</p>
    <p>عدد المسلسلات: {{ trendingTV.length }}</p>
    <ul class="row row-cols-2 row-cols-md-3 row-cols-lg-5 list-unstyled">
      <li class="col mb-4" v-for="item in trending" :key="item.id">
        <MediaCardComponent :item="item" />
      </li>
    </ul>
    <h2>Trending TV Shows</h2>
    <ul class="row row-cols-2 row-cols-md-3 row-cols-lg-5 list-unstyled">
      <li class="col mb-4" v-for="item in trendingTV" :key="item.id">
        <MediaCardComponent :item="item" />
      </li>
    </ul>
  </div>
</template>


<script>
import { getTrendingMovies, getTrendingTV } from "../services/tmdb.js";
import MediaCardComponent from "../components/MediaCardComponent.vue";

export default {
  components: {
    MediaCardComponent,
  },
  data() {
    return {
      trending: [],
      trendingTV: [],
      loading: true,
      error: "",
    };
  },
  async created() {
    const data = await getTrendingMovies();
    this.trending = data.results;
    const tvData = await getTrendingTV();
    this.trendingTV = tvData.results;
  },
};
</script>