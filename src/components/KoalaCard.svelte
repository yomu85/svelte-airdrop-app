<script>
  import { link } from 'svelte-spa-router'
  import Loader from '~/components/Loader.svelte'

  let imageLoading =true

  export let koala

  if (koala.image === '') {
    imageLoading = false
  } else {
    const img = document.createElement('img')
    img.src = koala.image
    img.addEventListener('load', () => {
      imageLoading = false
    })
  }
</script>

<a
  use:link
  href={`/koala/${koala.id}`}
  class="koala">
  {#if imageLoading}
    <Loader 
      scale=".5"
      absolute
      fixed={false} />
  {/if}
  <div 
    class="poster"
    style="background-image:url({koala.image});">
    {#if koala.image === ''}
      IMAGE <br>
      N/A
    {/if}
  </div>

  <div class="info">
    <div
      class="poster"
      style="background-image: url({koala.image});"></div>
    <div class="k_id">{koala.id}</div>
    <div class="k_name">{koala.name}</div>
  </div>
</a>


<style lang="scss">
  .koala {
    display: block;
    width: 200px;
    height: 300px;
    margin: 10px;
    border-radius: 6px;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    position: relative;
    @media #{$mobile} {
      width: 47%;
      margin: 1.5%;
    }
    &:hover {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 6px solid $color--primary;
        box-sizing: border-box;
      }
    }
    .poster {
      width: 100%;
      height: 100%;
      background-color: $color--area;
      background-position: center;
      background-size: cover;
      display:flex;
      justify-content: center;
      align-items: center;
      font-family: 'Oswald', sans-serif;
      color: $color--white-5;
      font-size: 20px;
      text-align: center;
    }
    .info {
      width: 100%;
      height: 66px;
      padding: 14px;
      box-sizing: border-box;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      left: 0;
      .poster {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scale(2);
        filter: blur(5px);
        &::after{
          content: "";
          background-color: $color--black-50;
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
        }
      }
      .k_id {
        position: relative;
        color: $color--primary;
        font-size: 13px;
        font-family: 'Roboto', 'Pretendard', sans-serif;
      }
      .k_name {
        position: relative;
        font-size: 16px;
        font-family: 'Roboto', 'Pretendard', sans-serif;
        color: $color--white;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>