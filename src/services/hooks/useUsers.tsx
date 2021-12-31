import { useQuery } from "react-query"
import { api } from "../api"

type User = {
    id: string
    name: string
    email: string
    createdAt: string
}

interface GetUserReturn {
    users: User[]
    totalOfRegisters: number
}

export async function getUsers(page: number): Promise<GetUserReturn> {
    const { data, headers } = await api.get('/users/', { params: { page }})

    const totalOfRegisters = +headers['x-total-count']

    return {
        users: data.users,
        totalOfRegisters
    }
}

export function useUsers(page: number) {
    return useQuery(['users', page], () => getUsers(page), {
        staleTime: 1000 * 10
    })
}