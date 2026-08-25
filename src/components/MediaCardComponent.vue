<template>
  <div class="card h-100">
    <img
      class="card-img-top"
      style="height: 350px; object-fit: cover"
      :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
    />
    <p class="card-text p-3 mb-0 fw-semibold">
      {{ item.title || item.name }}
    </p>

    <p class="px-3 text-warning">⭐ {{ item.vote_average }}</p>
  </div>
</template>



<script>
export default {
  props: ["item"],
};
</script>