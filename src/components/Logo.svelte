<script>
  import { link } from 'svelte-spa-router'
</script>

<a 
  use:link
  href="/">
  <span>Arong</span> Koala
</a>

<style lang="scss">
  a {
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    color: $color--white-50;
    text-decoration:none;
    span {
      color: $color--primary;
    }
  }
</style>