import { BadRequest } from '../utils/Errors'
import { dbContext } from '../db/DbContext'

class CommentsService {
  async getAll(query = {}) {
    return await dbContext.Comment.find(query)
  }

  async getById(id) {
    const comment = await dbContext.Comment.findById(id)
    if (!comment) {
      throw new BadRequest('Invalid Comment ID')
    }
    return comment
  }

  async create(body) {
    return await dbContext.Comment.create(body)
  }

  async edit(body) {
    const comment = await dbContext.Comment.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!comment) {
      throw new BadRequest('Invalid Comment ID')
    }
    return comment
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Comment.findByIdAndDelete(id)
  }
}

export const commentsService = new CommentsService()
