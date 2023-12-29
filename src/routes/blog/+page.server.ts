import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './[slug]/$types';
import { client } from '$lib/server/SanityClient';

export const load: PageServerLoad = async () => {
	const posts = await client.fetch(`*[_type == "post"] {title}`);
	return { posts };

	error(404, 'Not Found');
};
