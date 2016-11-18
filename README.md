# react-router-match-as-promised

[React Router's](https://github.com/ReactTraining/react-router) [`match`](https://github.com/ReactTraining/react-router/blob/v3.0.0/docs/API.md#match-routes-location-history-options--cb) as promised, useful when working with `async/await`.

## Example

```js
import matchAsPromised from 'react-router-match-as-promised'
import routes from './routes'

const { renderProps, redirectLocation } = await match({ routes, location: '/foo' })
  routes,
  location: '/foo'
})
```

## License

MIT
