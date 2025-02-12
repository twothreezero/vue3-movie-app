<template>
  <Headline />
  <Search />
  <MovieList />
</template>

<script>
import Headline from '~/components/Headline'
import Search from '~/components/Search'
import MoiveList from '~/components/MovieList'

export default {
  components: {
    Headline,
    Search,
    MovieList
  }
}
</script>