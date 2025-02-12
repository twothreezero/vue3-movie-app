export default {
  // module
  namespaced: true,
  // data
  state: () => ({
    movies: []
  }),
  // computed
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    }
  },
  // methods
  // mutations를 통해서만 데이터의 수정이 가능
  mutations: {
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기로 동작
  actions: {
    seacrhMovies() {

    }
  },
}