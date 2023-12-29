import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'jmam1ycz',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2023-03-07'
});
