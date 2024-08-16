// FROM https://deno.com/learn/api-servers

// Oak, a middleware framework for handling HTTP inspired by Koa, makes it 
// simple to create routes and route handlers for an HTTP server.
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const books = new Map<string, any>();
books.set("1", {
  id: "1",
  title: "The Hound of the Baskervilles",
  author: "Conan Doyle, Arthur",
});

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/book", (context) => {
    context.response.body = Array.from(books.values());
  })
  .get("/book/:id", (context) => {
    if (books.has(context?.params?.id)) {
      context.response.body = books.get(context.params.id);
    }
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
// deno run apiserver.ts

// [VI] Since Deno supports npm, you can also use Express, Koa, Fastify, and other npm modules to build your API routes.
// Extra: Using express (using npm), see here https://deno.com/blog/build-api-express-typescript