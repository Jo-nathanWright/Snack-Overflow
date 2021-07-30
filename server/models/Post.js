import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const Post = new Schema(
  {
    description: { type: String, required: true },
    creatorId: { type: ObjectId, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
