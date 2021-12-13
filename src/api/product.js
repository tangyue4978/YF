import request from '@/utils/request'
import qs from 'qs'

const ProductApi = {
  addOrder: function (params) {
    return request({
      url: '/order/add',
      method: 'post',
      data: qs.stringify(params)
    })
  }
}

export default ProductApi
