import request from '@/utils/request'

const ContactApi = {
  sendEmail: function (params) {
    return request({
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: '/send/email',
      method: 'post',
      data: params
    })
  }
}

export default ContactApi
