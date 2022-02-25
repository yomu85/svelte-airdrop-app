import koalasData from '~/lib/koalasData.json'
import { writable, get } from 'svelte/store'

export const koalas = writable([])
export const loading = writable(false)
export const theKoala = writable({})
export const searching = writable(false)
export const koalaNum = writable(20)

export function initKoalas() {
  if (get(loading)) return
  loading.set(true)

  searching.set(false)
  const result = koalasData.slice(0, get(koalaNum))
  koalas.set(result)
  console.log('initKoalas function: ', get(koalas));

  loading.set(false)
}

export function searchKoalas(payload) {
  if (get(loading)) return
  loading.set(true)

  const { addr } = payload
  const result = koalasData.filter(koala => koala.address === addr)

  console.log('searchKoalas function: ', result)
  
  if(result=='') {
    alert('검색된 정보가 없습니다')
    searching.set(false)
    const result = koalasData.slice(0, get(koalaNum))
    koalas.set(result)
  }else {
    searching.set(true)
    koalas.set(result)
  }

  loading.set(false)
}

export function searchKoalaWithId(id) {
  if (get(loading)) return
  loading.set(true)

  const result = koalasData.filter(koala => koala.id === id)
  theKoala.set(...result)
  console.log('searchKoalaWithId function: ', get(theKoala))

  loading.set(false)
}

export function addKoalas() {
  if (get(loading)) return
  loading.set(true)

  koalaNum.update(n => n + 20)
  const result = koalasData.slice(get(koalaNum)-20, get(koalaNum))

  if(result.length === 0) {
    alert('더이상 정보가 없습니다')
  }else {
    koalas.update($koalas => {
      $koalas.push(...result)
      return $koalas
    })
  }

  loading.set(false)
}