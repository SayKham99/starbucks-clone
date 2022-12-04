import SanityClient from '@sanity/client'

export default SanityClient({
    projectId: 'yhtw07fs',
    dataset: 'production',
    apiVersion: 'v2021-03-25',
    useCdn: true
})
