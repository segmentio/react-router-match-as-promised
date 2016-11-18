import React from 'react'
import { Route } from 'react-router'
import test from 'ava'
import match from '../src'

test('works', async t => {
  const routes = React.createElement(Route, {
    path: '/foo',
    foo: 'bar'
  })
  const { renderProps, redirectLocation } = await match({ routes, location: '/foo' })
  t.is(redirectLocation, null)
  t.is(renderProps.routes[0].foo, 'bar')
})
