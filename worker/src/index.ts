/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	ANALYTICS: any
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		
		const start = new Date().getTime()
		const joke = await fetch("https://api.chucknorris.io/jokes/random")
		const end = new Date().getTime()
		
		env.ANALYTICS.writeDataPoint({
			blobs: [
			  // blob1: User-agent
			  request.headers.get("User-Agent"),
			  // blob2: Country
			  request.cf?.country,
			  // blob3: Tls version
			  request.cf?.tlsVersion,
			],
			doubles: [
			  // double1: response time from fetch
			  (end-start),
			],
		});

		
		return joke;
	},
};
