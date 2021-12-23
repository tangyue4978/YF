import request from '@/utils/request'
import qs from 'qs'

const GalleryApi = {
  getList: function(data) {
    return request({
      url: '/gallery',
      method: 'post',
      data: qs.stringify(data)
    })
  },
}

export default GalleryApi
