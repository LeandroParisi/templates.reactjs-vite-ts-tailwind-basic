import { DashboardLayout } from 'layouts/dashboard-layout'
import { useExampleService } from 'services/use-example-service'

export function Home() {
  const { query } = useExampleService()
  return <DashboardLayout>Home</DashboardLayout>
}
