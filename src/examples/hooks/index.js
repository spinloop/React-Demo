import React from 'react'
import StateHook from './StateHook'
import CounterHook from './CounterHook'
import ReducerHook from './ReducerHook'
import ContextHook from './ContextHook'

export default () => {
  return (
    <div className="Example">
      <header className="Example-header">Hook Demo</header>
      <StateHook />
      <CounterHook />
      <ReducerHook initialState={{ count: 0 }}/>
      <ContextHook />
    </div>
  )
}
