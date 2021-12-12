import request from '@/utils/request'

const ProductApi = {
  addOrder: function (params) {
    return request({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: '/order/add',
      method: 'post',
      data: params
    })
  }
}

export default ProductApi
