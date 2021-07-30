import { AuthController } from './Controllers/AuthController.js'
import CommentsController from './Controllers/CommentsController.js'

class App {
  authController = new AuthController();
  commmentsController = new CommentsController()
}

window.app = new App()
