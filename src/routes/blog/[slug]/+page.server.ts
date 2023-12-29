import { client } from '$lib/server/SanityClient';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	console.log(params.slug);
	const post = await client.fetch(
		`*[_type == "post" && title == "Test 1"] {title, "text": body[0].children[0].text}`
	);
	if (post) return { post };

	error(404, 'Not Found');
}
