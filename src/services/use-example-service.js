import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

function useExampleService() {
  const queryClient = useQueryClient()

  async function getExampleDataFromApi() {
    const results = await fetch('https://swapi.dev/api/planets/?page=1')
    const data = await results.json()
    console.log(data)
    return data
  }

  async function postExampleDataFromApi() {}

  // Queries
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getExampleDataFromApi
  })

  // Mutations
  const mutation = useMutation({
    mutationFn: postExampleDataFromApi,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  return {
    queryResult: { isPending, isError, data, error },
    mutation
  }
}

export { useExampleService }
