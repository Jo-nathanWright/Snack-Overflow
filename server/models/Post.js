import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Post = new Schema(
  {
    description: { type: String, required: true },
    votes: { type: Number, required: true, default: 0 },
    creatorId: { type: ObjectId, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Post
