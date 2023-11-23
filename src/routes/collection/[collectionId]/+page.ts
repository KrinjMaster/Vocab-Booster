import { collectionService } from '$lib/api/collections'

/** @type {import('./$types').PageLoad} */
export async function load({ params }: { params: { collectionId: string } }) {
  return await collectionService.getCollectionById(params.collectionId)
}
