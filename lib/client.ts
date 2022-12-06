import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
	projectId: 'qtammlr7',
	dataset: 'production',
	apiVersion: 'v2021-03-25',
	useCdn: true
}

export const sanityClient = createClient(config)

const builder = imageUrlBuilder(config)

export const urlFor = (source: any) => {
	return builder.image(source)
}
