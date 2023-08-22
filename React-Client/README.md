# React

This codebase demonstrates the usage of React Query library to fetch and manage data from APIs. It includes two components to display the current time from different APIs using the React Query hooks.

## Setup

1. Clone this repository using the following command:

2. Install the dependencies by running:

3. Start the development server:

## Components

### `CurrentTime`

The `CurrentTime` component is responsible for fetching and displaying the current time from an API using the React Query hooks.

- Props:
- `api` (string): The API endpoint to fetch the current time from.

### `App`

The `App` component is the main entry point of the application. It wraps the components with the necessary context providers and displays the fetched current time from different APIs using the `CurrentTime` component.

## Libraries Used

- React Query: Used for data fetching, caching, and synchronization.
- React Query Devtools: Used to inspect and debug the state of the queries.

## How to Use

1. Open the application in your browser after following the setup instructions.
2. You will see the current time fetched from the specified APIs using the `CurrentTime` component.
3. The React Query Devtools are accessible to inspect the queries and their state.

Feel free to customize and extend this codebase to fit your own use case.
