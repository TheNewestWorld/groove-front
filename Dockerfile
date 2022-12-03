FROM node:16-alpine as builder
COPY . .
RUN npm install
RUN npm run build

FROM nginx
COPY --from=builder ./build /app
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]