'use client'
import { useEffect } from 'react'

async function getProduct({ products }) {
	const data = []
	useEffect(() => {}, [data])

	console.log(data)

	return await products
}

export { getProduct }
