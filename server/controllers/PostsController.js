import { commentsService } from '../services/CommentsService'
import { postsService } from '../services/PostsService'
import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id/comments', this.getCommentsByPost)
      .post('', this.create)
      .put('/:id/vote', this.vote)
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

  async getCommentsByPost(req, res, next) {
    try {
      const comments = await commentsService.getAll({ postId: req.params.id })
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const user = req.userInfo
      req.body.creatorId = user.id // DONT FORGET THIS LINE
      const post = await postsService.create(req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async vote(req, res, next) {
    try {
      const vote = { vote: req.body.vote, id: req.params.id }
      req.body.id = req.params.id
      const post = await postsService.vote(req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      const user = req.userInfo
      await postsService.destroy(req.params.id, user)
      res.send({ message: 'Successfully deleted that post!' })
    } catch (error) {
      next(error)
    }
  }
}
