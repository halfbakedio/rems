FROM node:16-alpine AS builder

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY ./web/app/ .
COPY ./services/core/config/schema.json .

RUN yarn install --frozen-lockfile
RUN yarn build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 rems

COPY --from=builder /app ./

RUN yarn global add serve

USER rems

CMD ["serve", "-l", "'tcp://[::]'", "-s", "build"]
