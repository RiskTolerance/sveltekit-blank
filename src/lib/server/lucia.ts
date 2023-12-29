import 'dotenv/config';
import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';
import { planetscale } from '@lucia-auth/adapter-mysql';
import { connect } from '@planetscale/database';

const connection = connect({
	host: process.env.DATABASE_HOST,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD
});

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: planetscale(connection, {
		user: 'auth_user', //user table name
		key: 'user_key', //key table name
		session: 'user_session' //session table name
	}),
	getUserAttributes: (data) => {
		return {
			username: data.username
		};
	}
});

export type Auth = typeof auth;
