<script>
  import { push } from 'svelte-spa-router'
  import Loader from '~/components/Loader.svelte'
  import { searchKoalaWithId, theKoala, loading } from '~/store/koala'

  export let params = {}

  searchKoalaWithId(params.id)

  function addClipboard () {
    let content = this.innerText
    navigator.clipboard.writeText(content).then(()=> {
      alert("클립보드에 저장 완료")
    }).catch(err => {
      alert("클립보드에 저장 실패", err)
    })
  }
</script>

<div class="container">
  {#if $loading}
    <div class="skeleton-loader">
      <div class="poster"></div>
      <div class="skeletons">
        <div class="skeleton title"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>
      <Loader 
        scale="1"
        absolute
        fixed={false} />
    </div>
  {:else}
    <div class="koala-details">
      <div 
        style="background-image: url({$theKoala.image});"
        class="poster">
      </div>
      <div class="specs">
        <div class="title">
          Arong Koala #{$theKoala.id}
        </div>
        <div>
          <h3>NFT 마켓</h3>
          <a href="https://opensea.io/assets/matic/{$theKoala.contract}/{$theKoala.tokenid}" target="_blank">OPENSEA 매매 바로가기</a>
        </div>
        <div>
          <h3>네트워크</h3>
          <button
            class="btn small"
            type="button"
            on:click={ event => {
              push('/about')
            }}>
            Polygon Mainnet
          </button>
        </div>
        <div>
          <h3>contract 주소</h3>
          <span class="point" on:click={addClipboard}>{$theKoala.contract}</span>
        </div>
        <div>
          <h3>수집품 ID</h3>
          <span class="point" on:click={addClipboard}>{$theKoala.tokenid}</span>
        </div>
        <div>
          <button 
            class="btn"
            type="button"
            on:click={event=> {
              push('/')
            }}>
            go home
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .skeleton-loader {
    display: flex;
    .poster {
      @media #{$mobile} {
        display:none;
      }
    }
    .skeletons {
      flex:1;
      .skeleton {
        width: 100%;
        height: 100px;
        background-color: $color--area;
        border-radius: 8px;
        margin-top: 20px;
        &:first-child {
          margin-top: 0;
        }
        &.title {
          height: 100px;
        }
        &.etc {
          width: 40%;
          height: 50px;
        }
      }
    }
  }

  .poster {
    position: relative;
    flex-shrink: 0;
    width: 500px;
    height: 500px;
    border-radius: 10px;
    margin-right: 70px;
    background-color: $color--area;
    background-position: center;
    background-size: cover;
    @media #{$tablet} {
      width: 300px;
      height: 300px;
      margin-right: 30px;
    }
    @media #{$mobile} {
      display: block;
      margin-bottom: 50px;
    }
  }

  .koala-details {
    color: $color--white-50;
    display: flex;
    @media #{$mobile} {
      display: block;
    }
    .poster {
      position: relative;
      flex-shrink: 0;
      width: 500px;
      height: 500px;;
      border-radius: 10px;
      margin-right: 70px;
      background-color: $color--area;
      background-position: center;
      background-size: cover;
      @media #{$tablet} {
        width: 300px;
        height: 300px;
      }
      @media #{$mobile} {
        display: block;
        margin-bottom: 50px;
      }
    }
    .specs {
      .title {
        font-family: 'Oswald', sans-serif;
        font-size: 60px;
        color: $color--white;
        line-height: 1;
        margin-bottom: 30px;
        @media #{$mobile} {
          font-size: 40px;
        }
      }
      h3 {
        color: $color--white;
        margin: 24px 0 6px;
      }
      a {
        color: $color--white;
      }
      .point {
        display: block;
        color: $color--primary;
        max-width: 370px;
        word-break: break-all;
        cursor: pointer;
      }
      .btn {
        height: 40px;
        min-width: 150px;
        margin-top: 40px;
        padding: 0 20px;
        border: none;
        outline: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 700;
        color: $color--black;
        background-color: $color--primary;
        transition: .4s;
        font-family: 'Roboto', 'Pretendard', sans-serif;

        &:hover {
          background-color: darken($color--primary, 10%);
        }
        &.small {
          height:30px;
          padding:0 20px;
          margin-top:10px;
        }
      }
    }
  }
</style>