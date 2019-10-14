# Work

## Known Bugs

## Notes

### Ubuntu Server

I've run this out of box on the Ubuntu Windows Linux Subsystem, it appears to work out of box

## Things to add

### API

authorization api
-- handles log in
frontend api
-- stores all front end code I submit
projects api
-- stores all relevant project data
image api
-- stores all relevant information towards obtaining images

### Components

create a resume component which will pull a document component and a page component, page component ends with defining where the page ends
components will have the children prop to put all related content in to one file, resume will be more of a static use of components, and will be a template in the template folder

### Models

User
-- email string
-- password (hash) string
-- user-creation-date date
-- last-logged-in date

Front-end
-- css text
-- scss text
-- less text
-- technologies array -> string
-- date date
-- image-urls array -> string
-- hosted-url string
-- codepen-url string
-- repo-url string
-- feature boolean

Projects
-- hosted-url string
-- technologies array -> string
-- repo-url string
-- feature boolean
-- date date
-- project-length integer

Subdomains
-- target-url string
-- hosted-ip string
-- date-added date

### Research

Image Hosting
-- write images to file structure on the server -> i/m/a/g/e/jpg/image.jpg
-- cache images "/image.jpg" -> i/m/a/g/e/jpg/image.jpg
-- compress and resize images

Subdomain Hosting
-- domain to store projects into
-- mernstack && beyond
-- link to heroku apps

IP tracking Middleware

## Ideas

# Custom Express Server example

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example custom-server-express custom-server-express-app
# or
yarn create next-app --example custom-server-express custom-server-express-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/custom-server-express
cd custom-server-express
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

Most of the times the default Next server will be enough but sometimes you want to run your own server to customize routes or other kind of the app behavior. Next provides a [Custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) so you can customize as much as you want.

Because the Next.js server is just a node.js module you can combine it with any other part of the node.js ecosystem. in this case we are using express to build a custom router on top of Next.

The example shows a server that serves the component living in `pages/a.js` when the route `/b` is requested and `pages/b.js` when the route `/a` is accessed. This is obviously a non-standard routing strategy. You can see how this custom routing is being made inside `server.js`.
