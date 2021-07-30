import { ProxyState } from '../AppState.js'
import Comment from '../Models/Comment.js'
import { api } from './AxiosService.js'

class CommentsService {
  async getAll() {
    const res = await api.get('comments')
    ProxyState.comments = res.data.map(c => new Comment(c))
    console.log(ProxyState.comments)
  }
}

export const commentsService = new CommentsService()
