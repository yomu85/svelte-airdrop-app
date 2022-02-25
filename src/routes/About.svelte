<script>
  import { querystring } from 'svelte-spa-router'
  import qs from 'qs'

  console.log(qs.parse($querystring))

  $: query = qs.parse($querystring)
  $: title = query.title || 'Polygon Mainnet 정보'
  $: name = query.name || 'Polygon Mainnet'
  $: rpcurl = query.rpcurl || 'https://polygon-rpc.com'
  $: chainid = query.chainid || '137'
  $: simbol = query.simbol || 'MATIC'
  $: searchurl = query.searchurl || 'https://polygonscan.com'
  $: image = query.image || '/assets/k_yellow.png'

  function addClipboard () {
    let content = this.innerText
    navigator.clipboard.writeText(content).then(()=> {
      alert("클립보드에 저장 완료")
    }).catch(err => {
      alert("클립보드에 저장 실패", err)
    })
  }
</script>

<div class="user-profile">
  <div class="photos">
    <div class="photo">
      <img src="/assets/matic.png" alt="matic">
    </div>
    <div class="photo">
      <img src={image} alt="User">
    </div>
  </div>
  <div class="details">
    <div class="title">{title}</div>
    <div class="info">네트워크 이름: <span class="point" on:click={addClipboard}>{name}</span></div>
    <div class="info">RPC URL: <span class="point" on:click={addClipboard}>{rpcurl}</span></div>
    <div class="info">체인 ID: <span class="point" on:click={addClipboard}>{chainid}</span></div>
    <div class="info">기호: <span class="point" on:click={addClipboard}>{simbol}</span></div>
    <div class="info">블록 탐색기 URL: <span class="point" on:click={addClipboard}>{searchurl}</span></div>
  </div>
</div>

<style lang="scss">
  .user-profile {
    padding: 80px 0;
    .photos {
      display: flex;
      justify-content: center;
      .photo {
        flex-shrink: 0;
        width: 230px;
        height: 230px;
        padding: 30px;
        box-sizing: border-box;
        background-color: $color--area;
        border-radius: 50%;
        border: 12px solid $color--black;
        @media #{$mobile}{
          width: 180px;
          height: 180px;
        }
        &:first-child {
          margin-right: -80px;
        }
        img {
          width: 100%;
        }
      }
    }
    .details {
      margin-top: 20px;
      text-align: center;
      line-height: 1.6;
      .title {
        font-size: 27px;
        font-family: 'Roboto', 'Pretendard', sans-serif;
        margin-bottom: 20px;
      }
      .info {
        font-size: 16px;
        font-family: 'Roboto', 'Pretendard', sans-serif;
        .point {
          color: $color--primary;
          max-width: 370px;
          word-break: break-all;
          cursor: pointer;
        }
      }
    }
  }
</style>