<template>
  <div class="pokemon-detail container">
    <div v-if="loading" class="is-loading">Currently loading...</div>
    <div v-if="!!pokemon" class="pokemon-detail">
      <h2>Details</h2>
      <p>Name: {{ pokemon.name }}</p>
      <p>Weight: {{ pokemon.weight }}</p>
      <p>Types: {{ getTypes }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pokemon-details',
  props: {
    id: String,
  },
  data() {
    return {
      loading: false,
      pokemon: null,
    };
  },
  computed: {
    getTypes() {
      return this.pokemon.types.map(type => type.type.name).toString();
    },
  },
  mounted() {
    this.loading = true;
    fetch(`/api/pokemon/${this.id}`)
      .then((response) => {
        response.json().then((json) => {
          this.pokemon = json;
        });
      })
      .finally(() => { this.loading = false; });
  },

};
</script>
