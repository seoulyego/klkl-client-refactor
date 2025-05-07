import kyInstance from '@utils/kyInstance'

const productEditLoader = async ({ params }) => {
  const { id } = params

  const clientRequest = kyInstance.get('me').json()
  const productRequest = kyInstance.get(`products/${id}`).json()

  const responseData = await Promise.all([clientRequest, productRequest]).catch(
    (error) => {
      throw Error(`${error.response.status}`)
    }
  )
  const clientData = responseData[0]
  const productData = responseData[1]

  if (clientData.data.id !== productData.data.member.id)
    throw new Response('Forbidden', { status: 403 })

  return productData
}

export default productEditLoader
