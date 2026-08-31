<template>
  <div class="container-fluid px-4 mt-4">
    <div
      class="text-white p-5 rounded-4 mb-5 d-flex align-items-end shadow-lg"
      style="
        min-height: 420px;
        background-size: cover;
        background-position: center;
      "
      :style="{
        backgroundImage: trending.length
          ? `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original${trending[0].backdrop_path})`
          : 'none',
      }"
    >
      <div>
        <span class="badge bg-danger mb-3">Trending #1</span>
        <h1 class="display-4 fw-bold">{{ trending[0]?.title }}</h1>
        <p class="mb-2">
          <span class="text-warning">
            ⭐ {{ trending[0]?.vote_average?.toFixed(1) }}
          </span>

          <span class="ms-3">
            {{ trending[0]?.release_date?.slice(0, 4) }}
          </span>
        </p>
        <p class="fs-5" style="max-width: 650px">{{ trending[0]?.overview }}</p>
        <RouterLink
          v-if="trending[0]"
          :to="'/details/movie/' + trending[0].id"
          class="btn btn-outline-danger px-4 py-2 fw-semibold"
        >
          View Details
        </RouterLink>
        <button
          v-if="trending[0]"
          class="btn btn-outline-light px-4 py-2 ms-2"
          @click="
            favoritesStore.isFavorite(trending[0].id)
              ? favoritesStore.removeFavorite(trending[0].id)
              : favoritesStore.addFavorite(trending[0])
          "
        >
          {{
            favoritesStore.isFavorite(trending[0].id) ? "Remove" : "❤️ Favorite"
          }}
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-4 fw-bold section-title">Trending Movies</h2>

      <RouterLink to="/movies" class="btn btn-outline-danger btn-sm px-3">
        View All
      </RouterLink>
    </div>
    <ul
      class="row row-cols-2 row-cols-md-3 row-cols-lg-5 list-unstyled mb-5 g-4"
    >
      <li class="col mb-4" v-for="item in trending" :key="item.id">
        <MediaCardComponent :item="item" />
      </li>
    </ul>
    <div class="d-flex justify-content-between align-items-center mb-4">
    <h2 class="mb-4 fw-bold section-title">Trending TV Shows</h2>
    <router-link to="/TV" class="btn btn-outline-danger btn-sm px-3">View All</router-link>
    </div>
    <ul class="row row-cols-2 row-cols-md-3 row-cols-lg-5 list-unstyled g-4">
      <li class="col mb-4" v-for="item in trendingTV" :key="item.id">
        <MediaCardComponent :item="item" />
      </li>
    </ul>
  </div>
</template>


<script>
import { getTrendingMovies, getTrendingTV } from "../services/tmdb.js";
import MediaCardComponent from "../components/MediaCardComponent.vue";
import { useFavoritesStore } from "../stores/favorites.js";
export default {
  components: {
    MediaCardComponent,
  },
  setup() {
    const favoritesStore = useFavoritesStore();

    return {
      favoritesStore,
    };
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