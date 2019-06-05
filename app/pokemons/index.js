import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './pokemon.routes.js'
export default angular.module('pokemonPoc.pokemons', [uirouter])
  .config(routes)
