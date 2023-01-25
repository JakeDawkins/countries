# Decision Record

- Codespaces template for next.js

  - Thsis is a very thin setup around the basic nextjs docs including the codespaces config
  - This isn't critical, and the project can be worked on just fine without using
    codespaces, but this gives the developer the _option_ to develop from any
    machine without a dev environment setup.
  - In a professional environment, this could be used to bootstrap teams

- GraphQL

  - GraphQL as an API technology allows for quick product development with excellent
    integration with TypeScript and React, allowing for type-safe data fetching.
  - GraphQL's model also lends itself to mostly automatic caching on the client.
    The Apollo Client library used (as well as most others) comes built with caching
    to reduce network traffic.
  - GraphQL can also be used on the client for local state management, although
    this project did not require any global local state management.
  - CI processes can validate the front-end code to make sure new front-end
    features are not violating the API's schema. It can also protect against
    breaking changes on the backend trickling down to affect frontend clients
  - I have also had years of personal experience, giving me an ability to work
    quickly and safely with GraphQL for this project.
  - **Other options considered**: REST
    - Chose not to go with REST, since client caching would require additional tooling, and
      GraphQL services are built in such a way to generate automatic TS types more easily.

- Countries API

  - This is an API using GraphQL to represent information about countries around
    the world.
  - I chose this because it is a modern GraphQL project with good contribution
    to the project and good schema design principles.
  - It is also has public introspection turned on, so there is no difficulty
    for fetching a raw schema to generate TypeScript types from.

- Next.js

  - This project was built on Next.js, and uses Next.js for routing and build
    tooling.
  - Next.js's built-in router is easy to configure, and works based on filesystem
    paths.
  - It comes built with a webpack builder pre-configured, and has presets available
    to automatically work with TypeScript when adding a `tsconfig.json` file.
  - Next.js also enables more advanced features like dynamic imports and tree shaking.
  - For the purposes of this project, the ability to quickly configure routing,
    build tooling, andtypescript made Next.js an easy choice. Next.js is remarkably
    configurable, but extensive configuration isn't needed for the scope of this
    project.
  - Next.js's primary developer, Vercel, also runs a hosting platform. This platform
    makes Next.js projects easier to deploy at most scales, from small toy projects
    to large public projects.
  - Since this deployability is built-into the tool, it made deploying this project
    to vercel a low-effort project.
  - **Other options considered**: Create React App, Gatsby, Vite
    - Chose NextJS, since it's a more complete framework instead of a toolchain setup,
      making getting started on this kind of project quick and easy.

- Tailwind CSS

  - The styling engine used with this project is Tailwind CSS. It is a small
    library providing utility classes for components.
  - Tailwind CSS enables stripping of duplicate style definitions that may be
    present in other libraries.
  - Using a common base spacing unit (the default is 4px) and color systems
    allows for more consistent UI development.
  - Different from other systems like Styled Components, CSS Modules, or css itself,
    utility classes allow for colocation of styles with the components they style.
    This makes debugging quicker, and understanding of code quicker to ramp up on.
    Also, since the class names are utility instead of semantic, there is no
    ambiguity of naming of classes.
  - Tailwind integrates well with next.js and doesn’t need additional explcit build
    steps in config, since `next`.
  - **Other options considered**: Styled-components, CSS Modules
    - CSS Modules pulls the styles out into a module away from the component, and makes
      rapid iteration on design a bit harder
    - Styled Components is great for setting up component primitives, but it still pulls
      the styles one level further away from the implementation of the component,
      making things like state-dependent and props-dependent styles messier.

- Jest

  - Jest is the test runner for this project. It was chosen, as it has become
    the dominant test runner in the React community. While popularity isn't always
    a good measure of a tool's quality, the prevalence of the tool, widespread
    examples, and documentation available makes Jest an excellent candidate.
  - I have had years of experience with Jest in frontend and backend environments,
    and I'm familiar with its robust mocking system, so this was an easy choice.

- React Testing Library

  - React testing library is the tool used to actuall render components and query
    the DOM underlying those components in the test suite.
  - This tool is based on the assumption that tests are best executed when they
    act like users. This means that tests shouldn't be overly-reliant on looking
    at DOM attributes, but should be able to look at things the user can see
    or interact with. Knowing about the props of a specific component is much less
    reliable for testing than knowing the rendered output as a result of that prop.
  - **Other options considered**: Enzyme
    - Enzyme has a great selection of tools, and it is very good for inspecting
      the internal state of components. I think in most cases, Enzyme is overkill
      and can encourage bad testing practices like testing implementation details
      and not user effects.

- Cypress

  - Cypress is an integration/end-to-end testing suite. It uses headless browsers
    like chrome or electron to act as a user would to interact and make assertions
    on UI.
  - Having an e2e test suite setup is incredibly valuable when running against
    production data. It can be used to notify of service outages or breaking changes,
    either on the frontend or backend.
  - Cypress is one of the most widespread, mature products in this space, and
    has an excellent onboarding experience. The ease of getting a simple test suite
    up-and-running and my own personal experience with this product are the reasons
    I chose this tool over others, like Selenium.
  - **Other options considered**: Selenium
    - Selenium tooling hs very mature, but also harder to ship and integrate with
      CI. Cypress has a _much_ easier setup and the documentation around cypress
      is excellent.

- React Storybook

  - Documenting code is incredibly important. A tool which allows documentation of
    components and visual testing of those components (like React Storybook) serves
    double-duty, since it can be used as both a visual test and a documentation source.
  - Storybook is a widely-used project for developing component systems, and allows
    for quick iteration and sharing of components.
  - My own experience with this product, its prevalence, and integration with
    other services like Chromatic are what drove me to using this product.

- Chromatic

  - Chromatic is the current maintainer of the Storybook project, and they have
    built an infrastructure for deploying and testing storybook instances.
  - Chromatic was chosen as a quick deployment source for the storybook for
    this project, but in longer-running, more collaborative projects, storybook
    has tools for visually diffing changes, as well as bringin in designers and product
    managers to review developed components, in isolation.
  - This review process is extremely valuable for a team and saves time and work
    screenshotting or writing reviews.

- Directory Structure choices

  - I chose to use flat directories in this project, since there would be
    many files associated with a single "component". There are test files, documentation,
    storybook files, and the component itself. If these were all placed in separate
    peer directories to the components themselves, navigating the project would
    be more challenging. Colocating components and associated files allows for
    quick navigation.
  - This does, however mean that multiple files are named the same thing (like
    `index.spec.tsx`), where you need to focus on the _directory_ name instead of
    the file name when navigating. This can be confusing when multiple files are
    open at the same time from different components, but I think the downside doesn't
    outweight the benefits from this approach.
