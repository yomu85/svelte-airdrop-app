<script>
  import { searchKoalas } from '~/store/koala'

  let addr = ''

  function apply() {
    searchKoalas({
      addr
    })
  }
</script>

<div class="search">
  <div class="text-field">
    <input
      bind:value={addr}
      placeholder="지갑 주소로 검색하세요(0x...)"
      type="text" 
      on:keydown={event => {
          event.key === 'Enter' && apply()
        }
      } />
  </div>
  <button
    class="btn"
    type="button"
    on:click={apply}>  
    검색
  </button>
</div>

<style lang="scss">
  .search {
    display: grid;
    grid-template-columns: 1fr 120px;
    grid-gap: 10px;
    @media #{$mobile} {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 50px);
    }

    .text-field {
      display: inline-block;
      height: 50px;
      input {
        width: 100%;
        height: 100%;
        background: $color--area;
        outline: none;
        border: none;
        padding: 0 20px;
        box-sizing: border-box;
        font-size: 16px;
        font-family: 'Roboto', 'Pretendard', sans-serif;
        color: $color--white-60;
        border-radius: 4px;
        &::placeholder {
          color: $color--white-30;
        }
      }
    }

    .btn {
      height: 50px;
      padding: 0 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      font-family: 'Roboto', 'Pretendard', sans-serif;
      background-color: $color--primary;
      font-weight: 700;
      color: $color--black;
      outline: none;
      transition: .4s;
      &:hover {
        background-color: darken($color--primary, 10%);
      }
    }

  }
</style>