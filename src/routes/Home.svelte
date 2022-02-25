<script>
  import Headline from '~/components/Headline.svelte'
  import Search from '~/components/Search.svelte'
  import KoalaList from '~/components/KoalaList.svelte'
  import { initKoalas } from '~/store/koala'

  initKoalas()
</script>

<div class="container">
  <Headline />
  <Search />
  <KoalaList />
</div>

<style lang="scss"></style>