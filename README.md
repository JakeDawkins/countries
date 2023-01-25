# Countries

This app is meant as a resource for finding information about various countries,
like currency, language spoken, and continent. It is based off the
[Countries API](https://github.com/trevorblades/countries) by [@trevorblades](https://github.com/trevorblades).

The original project was based on this [Next.js codespaces template](https://github.com/github/codespaces-nextjs)
which is a thin wrapper around the nextjs base project.

## Viewing the deployed application

This application is deployed to Vercel automatically on merges to the `main`
branch. It lives at [this url](https://countries-takehome.vercel.app/)

## Decisions made

This project included a lot of large and small decisions on technical features,
libraries, and organizational strategies. These decisions are logged in the
[DECISION-RECORD](./DECISION-RECORD.md) file.

## Documentation

Much of this project is documented using [React Storybook](https://storybook.js.org).

While you don't need to start storybook locally to use it for documentation, it
is a much better experience.

In most `src/components` directory, there are `index.stories.tsx` and `docs.mdx` files.
These files include programmatic sandboxes and written documentation on the usage,
accessibility concerns, and props for each of the built components.

### Starting React Storybook

To run storybook, clone this repo and then run the following (requires
[yarn](https://yarnpkg.com/getting-started/install) to be installed previously):

```
cd countries

# install dependencies
yarn

npm run storybook
```

Once up and running, go to [localhost:6006](http://localhost:6006) to see the
app running.

> Note: There is a `docs` and a `canvas` tab at the top of each page. The `docs`
> tab is there to display the `docs.mdx` files, and the `canvas` tab is the rendering
> of the examples defined in the `index.stories.mdx` file. You can use the left
> sidebar to navigate between components.

## Running the application locally

To run this application, clone this repo and then run the following (requires
[yarn](https://yarnpkg.com/getting-started/install) to be installed previously):

```
cd countries

# install dependencies
yarn

# starts nextjs development server
npm run dev
```

Once up and running, go to [localhost:3000](http://localhost:3000) to see the
app running.

## Using Codespaces

This app is set up to be developed in [Github Codespaces](https://github.com/features/codespaces).

To edit this project, click the `Code` button at the top right of [this page](https://github.com/JakeDawkins/countries).

Click on the `Codespaces` tab and follow the instructions to spin up your own codespace.

## Running Tests

There are three kinds of tests used in this project:

1. Unit tests on individual components to test specific functionality in an
   isolated environment.

- These are found in the `src/components/*` directories under the `index.spec.tsx` files.

2. Integration tests rendering a single page (feature) and using mocked data to
   ensure proper rendering of the page.

- These are found in the `src/pages` directory under the `index.spec.tsx` files.

3. End-to-end tests, which run the application and fetch real-world data. These
   tests act like a user and make assertions about the app's state based on click
   and navigation interaction like a user would.

- These tests are found under the `cypress/e2e` directory.
- An output file is saved to `cypress/videos` showing the last run of these tests.

### Running Unit/Integration tests

To run unit & intergration tests, make sure dependencies are installed and run

```
yarn test:unit
```

### Running End-to-End tests

To run e2e tests, make sure dependencies are installed and run:

```
yarn test:e2e:dev
```

You may need to stop any running instance of `yarn dev` that currently is running
on your machine.
