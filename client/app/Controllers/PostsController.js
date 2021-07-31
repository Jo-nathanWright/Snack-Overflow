import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'

function _draw() {
  // debugger
  let template = ''
  ProxyState.posts.forEach(post => {
    template += post.Template
  })
  document.getElementById('posts').innerHTML = template
}

export default class PostController {
  constructor() {
    ProxyState.on('posts', _draw)
    this.getAll()
  }

  async getAll() {
    try {
      await postsService.getAll()
    } catch (error) {
      console.log(error)
    }
  }

  async createPost(event) {
    // debugger
    try {
      event.preventDefault()
      const form = event.target
      const rawPost = {
        description: form.post.value,
        creatorId: ProxyState.profile.id,
        name: ProxyState.profile.name
      }
      console.log(Proxy)
      await postsService.createPost(rawPost)
      form.reset()
    } catch (error) {
      console.log(error)
    }
  }

  async destroyPost(id) {
    try {
      await postsService.destoryPost(id)
    } catch (error) {
      console.log(error)
    }
  }
}
