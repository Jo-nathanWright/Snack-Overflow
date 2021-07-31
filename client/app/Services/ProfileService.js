import { ProxyState } from '../AppState.js'
import { api } from './AxiosService.js'
import { postsService } from './PostsService.js'

class ProfileService {
  async getProfile() {
    try {
      const res = await api.get('/account')
      ProxyState.profile = res.data
      postsService.getAll()
      console.log(res.data)
    } catch (err) {
      console.error(err)
    }
  }
}

export const profileService = new ProfileService()
