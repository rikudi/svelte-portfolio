export const prerender = true
export const csr = false
export const trailingSlash = "always"
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

console.log("Environment mode: ", dev ? 'development' : 'production'); // Log the environment mode

inject({ mode: dev ? 'development' : 'production' });

console.log("Inject function has been called"); // Log after the inject function has been called