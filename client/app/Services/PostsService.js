import { api } from './AxiosService.js'
import { ProxyState } from '../AppState.js'
import Post from '../Models/Post.js'

class PostsService {
  async getAll() {
    const res = await api.get('posts')
    ProxyState.posts = res.data.map(p => new Post(p))
    console.log(ProxyState.posts)
  }
}

export const postsService = new PostsService()
