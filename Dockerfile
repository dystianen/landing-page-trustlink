# Install dependencies only when needed
FROM node:16-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
#RUN yarn install --frozen-lockfile
RUN npm install
COPY . .
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL $NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_GOOGLE_ANALYTICS
ENV NEXT_PUBLIC_GOOGLE_ANALYTICS $NEXT_PUBLIC_GOOGLE_ANALYTICS
#RUN yarn build && yarn install --production --ignore-scripts --prefer-offline
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
