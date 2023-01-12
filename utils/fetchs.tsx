import { sanityClient } from '../lib/client'

async function getBanners() {
	return await sanityClient.fetch(`*[_type == 'banners'] | order(sort)`)
}

async function getFoods() {
	return await sanityClient.fetch(
		`*[_type == 'category' && main_category->name == 'Food']{name,"category":main_category->name,"mc_slug":main_category->slug.current,"id":_id,"slug":slug.current,"image":image{asset->{url}},_createdAt} | order(_createdAt asc)`
	)
}

async function getDrinks() {
	return await sanityClient.fetch(
		`*[_type == 'category' && main_category->name == 'Drinks']{name,"category":main_category->name,"mc_slug":main_category->slug.current,"id":_id,"slug":slug.current,"image":image{asset->{url}},_createdAt} | order(_createdAt asc)`
	)
}

async function getHome() {
	return await sanityClient.fetch(
		`*[_type == 'category' && main_category->name == 'At Home Coffee']{name,"category":main_category->name,"mc_slug":main_category->slug.current,"id":_id,"slug":slug.current,"image":image{asset->{url}},_createdAt} | order(_createdAt asc)`
	)
}

async function getMerchandise() {
	return await sanityClient.fetch(
		`*[_type == 'category' && main_category->name == 'Merchandise']{name,"category":main_category->name,"mc_slug":main_category->slug.current,"id":_id,"slug":slug.current,"image":image{asset->{url}},_createdAt} | order(_createdAt asc)`
	)
}

async function getGift() {
	return await sanityClient.fetch(
		`*[_type == 'category' && main_category->name == 'Gift Cards']{name,"category":main_category->name,"mc_slug":main_category->slug.current,"id":_id,"slug":slug.current,"image":image{asset->{url}},_createdAt} | order(_createdAt asc)`
	)
}

async function getProductsByCategory(category: string) {
	return await sanityClient.fetch(
		`*[_type == 'product' && category->slug.current == "${category}" ]{"id":_id,"image":image{asset->{url}},"mc_category": middle_category->name,"mc_slug":middle_category->slug.current,"category":category->name,description,ingredients,name,"slug":slug.current,_createdAt} | order(_createdAt asc)`
	)
}

async function getProductsById(name: string) {
	return await sanityClient.fetch(
		`*[_type == 'product' && slug.current == '${name}']{"id":_id,"image":main_image{asset->{url}},description,ingredients,name,description}`
	)
}

export {
	getBanners,
	getFoods,
	getDrinks,
	getHome,
	getMerchandise,
	getGift,
	getProductsByCategory,
	getProductsById
}
