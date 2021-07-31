import Post from './Post.js'
export default class Comment {
  constructor({ description, postId, imgUrl, votes }) {
    this.description = description
    this.postId = postId
    this.imgUrl = imgUrl
    this.votes = votes || 0
  }

  get Template() {
    return `<div class="row my-1 cheeseTopping text-light d-flex align-items-center ">
                                    <div class="col-md-2 d-flex">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="row">
                                                    <div class="col-md-12"><button onclick="app."class="w-100 bg-transparent"><img
                                                                src="./assets/img/dorito3.png" alt=""
                                                                class="w-100 imgFlip"></button>
                                                    </div>
                                                    <div class="col-md-12"><button class="w-100 bg-transparent"><img
                                                                src="./assets/img/dorito.png" alt=""
                                                                class="w-100"></button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <p>${this.votes}</p>
                                    </div>
                                    <div class="col-md-9 text-dark text-break">
                                        <p> ${this.description}
                                        </p>
                                    </div>
                                </div>`
  }
}
