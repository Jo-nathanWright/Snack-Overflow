import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Comment = new Schema(
  {
    imgUrl: { type: String },
    description: { type: String, required: true },
    postId: { type: ObjectId, ref: 'Post', required: true },
    votes: { type: Number, default: 0 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Comment.virtual('post', {
  localField: 'postId',
  ref: 'Post',
  foreignField: '_id',
  justOne: true
})

export default Comment
