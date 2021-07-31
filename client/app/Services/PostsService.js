import { api } from './AxiosService.js'
import { ProxyState } from '../AppState.js'
import Post from '../Models/Post.js'

class PostsService {
  async getAll() {
    const res = await api.get('posts')
    ProxyState.posts = res.data.map(p => new Post(p))
    console.log(ProxyState.posts)
  }

  async createPost(rawPost) {
    const res = await api.post('posts', rawPost)
    console.log(res.data)
    ProxyState.posts = [...ProxyState.posts, new Post(res.data)]
  }
}

export const postsService = new PostsService()
