module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_HOOK_URL,
      apiToken: process.env.VERCEL_API_TOKEN,
      appFilter: process.env.VERCEL_APP_FILTER,
      roles: ["strapi-super-admin"],
    },
  },
});
