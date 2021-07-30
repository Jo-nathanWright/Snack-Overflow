import { BadRequest } from '../utils/Errors'
import { dbContext } from '../db/DbContext'

class PostsService {
  getAll(query = {}) {
    return dbContext.Post.find(query)
  }

  getById(id) {
    const post = dbContext.Post.findById(id)
    if (!post) {
      throw new BadRequest('Invalid Post ID')
    }
    return post
  }

  create(body) {
    return dbContext.Post.create(body)
  }

  edit(body) {
    const post = dbContext.Post.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!post) {
      throw new BadRequest('Invalid Post ID')
    }
    return post
  }

  destroy(id) {
    this.getById(id)
    return dbContext.Post.findByIdAndDelete(id)
  }
}

export const postsService = new PostsService()
