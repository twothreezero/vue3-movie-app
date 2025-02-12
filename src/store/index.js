import { createStroe } from 'vuex'
import movie from './movie'
import about from './about'

export default createStroe({
  modules: {
    // movie: movie,
    movie,
    // about: about
    about
  }
})