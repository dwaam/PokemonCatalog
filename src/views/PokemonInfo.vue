<template>
  <div class="info">
    <h1>{{ $route.params.id }}</h1>
    <pokemon-details v-bind:id=$route.params.id />
  </div>
</template>

<script>
import PokemonDetails from '../components/pokemon/details/PokemonDetails.vue';

export default {
  name: 'pokemon-info',
  components: {
    PokemonDetails,
  },
};
</script>
