import Comment from '../Models/Comment.js'

export default class Post {
  constructor({ description, creatorId, _id, votes }) {
    this.description = description
    this.creatorId = creatorId
    this.id = _id
    this.votes = votes || 0
  }

  get Template() {
    return `
      <div class="col-md-12">
        <div class="row d-flex justify-content-center">
            <div class="col-md-6 bg-dark">
                <div class="row">
                    <div class="col-md-12 bunHead">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-10">
                                <h5 class="pt-3">${this.description}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-1 cheeseTopping text-light d-flex align-items-center ">
                    <div class="col-md-2 d-flex">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-12"><button class="w-100 bg-transparent"><img
                                                src="./assets/img/dorito3.png" alt=""
                                                class="w-100 imgFlip" onclick="app.commentsController.upVote('${this.id}')"></button>
                                    </div>
                                    <div class="col-md-12"><button class="w-100 bg-transparent"><img
                                                src="./assets/img/dorito.png" alt=""
                                                class="w-100" onclick="app.commentsController.downVote('${this.id}')"></button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1">
                        <p id="vote">0</p>
                    </div>
                    <div class="col-md-9 text-dark text-break">
                        <p> 
                        </p>
                    </div>
                </div>
                <div class="row form-group shadow-light d-flex justify-content-center my-1 meatTopping">
                    <form onsubmit="app.listsController.createList()" class="d-flex flex-wrap ">

                        <select class="form-select my-3" id="color"
                            onchange="this.style.backgroundColor = this.value">
                            <option class="cheeseTopping">Cheese</option>
                            <option class="lettuceTopping">Lettuce</option>
                            <option class="tomatoTopping">Tomato</option>
                            <option class="baconTopping">Bacon</option>

                        </select>
                        <div class="mx-2 my-3 d-flex align-items-end mb-1">
                            <input type="text" name="comment" placeholder="comment..." id="comment"
                                required minlength="3" maxlength="">
                        </div>
                        <div class="mx-2 my-3">
                            <button class="btn btn-success" type="submit" onclick="app.commentsController.createComment()">Create</button>
                        </div>
                    </form>
                </div>

                <div class="row">
                    <div class="col-md-12">


                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-12 d-flex justify-content-center bunFooter">
                        <h6>Creator Name</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
  }
}
