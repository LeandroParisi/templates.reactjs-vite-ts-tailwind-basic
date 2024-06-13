import DevelopmentError from 'errors/DevelopmentError'
import { useState } from 'react'
import { createStore } from 'stores/_base/create-store'

const initialState = {
  test: 123
}

const templateStore = createStore(() => {
  //  ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  const [store, setStore] = useState(initialState)

  //  ╔═╗╦═╗╦╔ ╗╔═╗╔╦╗╔═╗
  //  ╠═╝╠╦╝║║ ║╠═╣ ║ ║╣
  //  ╩  ╩╚═╩╚╝ ╩ ╩ ╩ ╚═╝

  //  ╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  function createActions() {
    function actionOne() {
      setStore({ ...store, test: 321 })
    }

    return {
      actionOne
    }
  }
  const actions = createActions()

  return { store, actions }
})

export const useTemplateStore = () => {
  const context = templateStore()

  if (context === undefined) {
    throw new DevelopmentError(
      'You are trying to useTemplateStore outside Provider.'
    )
  }

  return context
}
export const TemplateContext = templateStore.Context
export const TemplateProvider = templateStore.Provider
