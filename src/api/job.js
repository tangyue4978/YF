import request from '@/utils/request'
import qs from 'qs'

const JobApi = {
  getList: function(data) {
    return request({
      url: '/job',
      method: 'post',
      data: qs.stringify(data)
    })
  },
}

export default JobApi
