import { match } from 'react-router'

export default (...args) => new Promise((resolve, reject) => {
  match(...args, function (err, redirectLocation, renderProps) {
    if (err) {
      reject(err)
    } else {
      resolve({ redirectLocation, renderProps })
    }
  })
})
