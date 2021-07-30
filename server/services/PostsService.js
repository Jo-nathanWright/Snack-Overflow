import { BadRequest } from '../utils/Errors'
import { dbContext } from '../db/DbContext'

class PostsService {
  async getAll(query = {}) {
    return await dbContext.Post.find(query)
  }

  async getById(id) {
    const post = await dbContext.Post.findById(id)
    if (!post) {
      throw new BadRequest('Invalid Post ID')
    }
    return post
  }

  async create(body) {
    return await dbContext.Post.create(body)
  }

  async edit(body) {
    const post = await dbContext.Post.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!post) {
      throw new BadRequest('Invalid Post ID')
    }
    return post
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Post.findByIdAndDelete(id)
  }
}

export const postsService = new PostsService()
