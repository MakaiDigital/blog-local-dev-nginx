# Using Nginx to stitch multiple web apps locally

Companion repo to blog post [https://www.makaihq.com/blog/using-nginx-to-stitch-multiple-web-apps](https://www.makaihq.com/blog/using-nginx-to-stitch-multiple-web-apps).

## How to use

Start app1:

1. Navigate to `apps/app1`
2. Run `npm install`
3. Run `node index.js`
4. Verify app on http://localhost:3000/app1

Similarly for app 2:

1. Navigate to `apps/app2`
2. Run `npm install`
3. Run `node index.js`
4. Verify app on http://localhost:4000/app2

Start Nginx. Make sure you have the Docker deamon up.

```sh
docker run --name local-proxy \
  -v ./nginx.conf:/etc/nginx/nginx.conf:ro \
  -d -p 8080:80 nginx
```

Now, you can run both apps plus the fallback on port 8080:

1. Visit http://localhost:8080/app1
2. Visit http://localhost:8080/app2
3. Visit http://localhost:8080/
