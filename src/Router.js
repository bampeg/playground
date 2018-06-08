import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Child from './components/Child/Child'
import Parent from './components/Parent/Parent'
import AnotherChild from './components/AnotherChild/AnotherChild';
import Demo from './components/Demo/Demo'

export default function Router(props) {
  return (
    <Switch>
      <Route exact path="/" component={Parent} />
      <Route path="/child" render={props => <Child {...props} />} />
      <Route path="/anotherchild" component={AnotherChild} />
      <Route path="/demo" component={Demo} />
    </Switch>
  )
}
