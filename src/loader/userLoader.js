import kyInstance from '@utils/kyInstance'

const userLoader = async ({ params }) => {
  const { id } = params

  const response = await kyInstance.get(`members/${id}`).json()

  if (!response.ok) {
    throw new Error(`${response.status}`)
  }

  return response
}

export default userLoader
