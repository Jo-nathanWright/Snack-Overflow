import { commentsService } from '../Services/CommentsService.js'

export default class CommentsController {
  constructor() {
    this.getAll()
  }

  async getAll() {
    try {
      await commentsService.getAll()
    } catch (error) {
      console.log(error)
    }
  }
}
