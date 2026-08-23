<template>
  <div class="container mt-5">
    <h1>CineVerse</h1>
    <p>عدد النتائج: {{ trending.length }}</p>

    <ul>
        <li v-for="item in trending" :key="item.id"><img :src="'https://image.tmdb.org/t/p/w200' + (item.poster_path || item.profile_path)">
            <p>{{ item.title   ||   item.name}}</p>
            
        </li>
    </ul>
  </div>
</template>


<script>
import{getTrending} from'../services/tmdb.js' ;
export default {
    data(){
        return{
            trending:[],
            loading:true,
            error:''
        }
    },
    async created() {
        const data= await getTrending()
        this.trending=data.results
        
    }
}
</script>