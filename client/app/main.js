import { AuthController } from './Controllers/AuthController.js'
import CommentsController from './Controllers/CommentsController.js'
import PostController from './Controllers/PostsController.js'

class App {
  authController = new AuthController();
  commmentsController = new CommentsController();
  postsController = new PostController();
}

window.app = new App()
