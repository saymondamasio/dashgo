import { useQuery } from 'react-query'
import { api } from '../api'

type User = {
  id: number
  name: string
  email: string
  created_at: string
}

type ApiUsersResponse = {
  users: User[]
}

type GetUsersResponse = {
  users: User[]
  totalCount: number
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get<ApiUsersResponse>('users', {
    params: {
      page,
    },
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => ({
    ...user,
    created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  return {
    users,
    totalCount,
  }
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}
