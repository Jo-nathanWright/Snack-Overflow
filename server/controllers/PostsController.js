import { postsService } from '../services/PostsService'
import BaseController from '../utils/BaseController'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const posts = await postsService.getAll(req.query)
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const post = await postsService.getById(req.params.id)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const post = await postsService.create(req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const post = await postsService.edit(req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await postsService.destroy(req.params.id)
      res.send({ message: 'Successfully deleted that post!' })
    } catch (error) {
      next(error)
    }
  }
}
