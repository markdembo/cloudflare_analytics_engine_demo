# Pre-Requisites

1. Access to the Cloudflare Analytics Engine (closed beta currently)
2. Docker installed and daemon running
3. Cloudflare API token with "Account | Account Analytics | Read" level permission

# Instructions

1. `cd` into `worker` directory
2. Run `wrangler login` if you are not logged in already
3. Deploy the Cloudflare worker using `wrangler publish`
4. `cd` into `grafana` directory
5. Create a `.env` file with your favorite text editor (it should be in the same directory as the `docker-compose.yml`)
6. Add the following lines to the `.env` file and replace the placeholders with your Account ID and API Key

```
CF_API_ENDPOINT=https://api.cloudflare.com/client/v4/accounts/[ACCOUNT_ID HERE]/analytics_engine/sql
AUTH=Bearer [API-KEY HERE]
```

# Testing

1. Open the URL of the deployed in multiple browsers/curl
2. `cd` into `grafana` directory
3. Run `docker-compose up -d``
4. Open `localhost:3000` in your browsler
5. Log in with user `admin` and pw `admin`
6. Go to dashboards
7. Open pre-configured dashboard and select relevant timeframe (e.g. last 15 minutes)
