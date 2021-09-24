import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMovie: {},
    movies: [{
      id: 1,
      title: "Arrietty : Le Petit Monde des Chapardeurs",
      image: require('@/assets/movies/arrietty.jpg'),
      note: 3,
    },
    {
      id: 2,
      title: "Le Château Ambulant",
      image: require('@/assets/movies/chateau_ambulant.jpg'),
      note: 5,
    },
    {
      id: 3,
      title: "Le Voyage de Chihiro",
      image: require('@/assets/movies/chihiro.jpg'),
      note: 5,
    },
    {
      id: 4,
      title: "Kiki la Petite Sorcière",
      image: require('@/assets/movies/kiki.jpg'),
      note: 4,
    },{
      id: 5,
      title: "Le Vent se lève",
      image: require('@/assets/movies/le_vent_se_leve.jpg'),
      note: 5,
    },
    {
      id: 6,
      title: "Porco Rosso",
      image: require('@/assets/movies/porco_rosso.jpg'),
      note: 4,
    },
    {
      id: 7,
      title: "Princesse Mononoké",
      image: require('@/assets/movies/princesse_mononoke.jpg'),
      note: 5,
    },
    {
      id: 8,
      title: "Mon voisin Totoro",
      image: require('@/assets/movies/totoro.jpg'),
      note: 4,
    }]
  },
  getters:{
    getMovies(state){
      return state.movies;
    },
    getCurrentMovie(state){
      return state.currentMovie;
    }
  },
  mutations: {
    // mutation to set the current movie
    setCurrentMovie(state, movie){
      state.currentMovie = movie;
    },
    updateNote(state, newNote){
      console.log(newNote)
      state.currentMovie.note = newNote;
    }

  },
  actions: {
    // set current movie action
    setCurrentMovieAction({commit, state}, movieId) {
      let movieFound = {};
      state.movies.forEach((movie) => {
        if (movieId == movie.id) {
          movieFound = movie;
        }
      })
      // commit the movie that was found
      commit('setCurrentMovie', movieFound);
    },
    
  },
  modules: {
  }
})
