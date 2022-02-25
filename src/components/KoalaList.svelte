<script>
  import { koalas, loading, addKoalas, searching } from '~/store/koala'
  import KoalaCard from '~/components/KoalaCard.svelte'
  import Loader from '~/components/Loader.svelte'

  function viewMore() {
    addKoalas()
  }
</script>

<div class="koala-list">
  {#if $loading}
    <Loader />
  {/if}
  <div class="koala">
    {#each $koalas as koala (koala.id)}
      <KoalaCard {koala} />
    {/each}
  </div>
</div>

{#if !$searching}
  <button 
    class="btn more"
    on:click={viewMore}>
    더보기
  </button>
{/if}

<style lang="scss">
  .koala-list {
    margin-top: 30px;
    padding: 10px;
    background-color: $color--area;
    border-radius: 4px;
    text-align: center;
    @media #{$mobile} {
      padding:0;
    }
    &.no-result {
      padding: 70px 0;
    }
    .message {
      color: $color--primary;
      font-size: 20px;
      text-align: center;
    }

    .koala {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .btn {
      height: 50px;
      padding: 0 20px;
      border: none;
      outline: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 700;
      color: $color--black;
      background-color: $color--primary;
      transition: .4s;
      font-family: 'Roboto', 'Pretendard', sans-serif;
      &:hover {
        background-color: darken($color--primary, 10%);
      }
  }
  .btn.more {
    margin-top: 20px;
    width: 100%;
  }
</style>