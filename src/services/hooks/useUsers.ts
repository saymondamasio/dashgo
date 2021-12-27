import { useQuery } from 'react-query'
import { api } from '../api'

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

type ResponseUsers = {
  users: User[]
}

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get<ResponseUsers>('/users')

  const users = data.users.map(user => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  return users
}

export function useUsers() {
  return useQuery('users', getUsers, {
    staleTime: 5000, // 5 seconds
  })
}
