const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    ADMIN_HOST: (() => {
      if (isDev) return "http://localhost:4001";
      if (isProd) return "http://top2.nearest.of.rems-admin.internal:8080";
      return "ADMIN_HOST:not (isDev,isProd)";
    })(),
  };

  return {
    env,
    async rewrites() {
      return [
        {
          source: "/api/admin/:path*",
          destination: `${env.ADMIN_HOST}/:path*`,
        },
      ];
    },
  };
};
