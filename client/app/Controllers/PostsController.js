import { postsService } from '../Services/PostsService.js'

export default class PostController {
  constructor() {
    this.getAll()
  }

  async getAll() {
    try {
      await postsService.getAll()
    } catch (error) {
      console.log(error)
    }
  }
}
