import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import PostSchema from '../models/Post'
import CommentSchema from '../models/Comment'

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Post = mongoose.model('Post', PostSchema);
  Comment = mongoose.model('Comment', CommentSchema);
}

export const dbContext = new DbContext()
