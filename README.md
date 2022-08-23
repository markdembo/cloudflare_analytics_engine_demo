# Pre-Requisites

1. Access to the Cloudflare Analytics Engine (closed beta currently)
2. Docker installed and daemon running
3. Cloudflare API token with "Account // Account Analytics // Read" level permission

# Instructions

1. `cd` into `worker` directory
2. Run `wrangler login` if you are not logged in already
3. Deploy the Cloudflare worker using `wrangler publish`
4. `cd` into `grafana` directory
5. Create a `.env` file with your favorite text editor
6. Add to the `.env` file the following line with your API Key `AUTH=Bearer [API-KEY HERE]`

# Testing

1. Open the URL of the deployed in multiple browsers/curl
2. `cd` into `grafana` directory
3. Log in with user `admin` and pw `admin`
4. Go to dashboards
5. Open pre-configured dashboard and select relevant timeframe (e.g. last 15 minutes)
