import { ExampleComponent } from 'pages/home/components/example-component'
import { useTemplateStore } from 'stores/_TEMPLATE/_template-store'

export function ExampleContainer() {
  const { store } = useTemplateStore()

  return <ExampleComponent test={store.test} />
}
