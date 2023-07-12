FROM node:16-alpine AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY . .
RUN yarn install --frozen-lockfile

ENV NEXT_TELEMETRY_DISABLED 1

RUN --mount=type=secret,id=clerk_publishable_key \
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="$(cat /run/secrets/clerk_publishable_key)" \
    yarn build

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app ./

USER nextjs

CMD ["yarn", "start"]
