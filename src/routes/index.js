import Home from './Home.svelte'
import Koala from './Koala.svelte'
import About from './About.svelte'
import NotFound from './NotFound.svelte'

export default {
  '/': Home,
  '/koala/:id': Koala,
  '/about': About,
  '*': NotFound
}