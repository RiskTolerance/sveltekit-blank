// src/app.d.ts
/// <reference types="lucia" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type DatabaseUserAttributes = {
			username: string;
		};
		type DatabaseSessionAttributes = object;
	}
	namespace App {
		interface Locals {
			auth: import('lucia').AuthRequest;
		}
	}
}

// THIS IS IMPORTANT!!!
export {};
