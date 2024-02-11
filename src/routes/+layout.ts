export const prerender = true
export const csr = false
export const trailingSlash = "always"
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });