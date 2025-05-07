import kyInstance from '@utils/kyInstance'

const productLoader = async ({ params }) => {
  const { id } = params

  const response = await kyInstance.get(`products/${id}`).json()

  if (!response.ok) {
    throw new Error(`${response.status}`)
  }

  return response
}

export default productLoader
