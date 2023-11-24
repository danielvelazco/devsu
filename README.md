
# Testing tool for API and e2e tests 

Tests run on the github infrastructure using github actions, also the tests can be executed locally if necessary.

The following test cases were automated


### e2e: Option 1
- checkout products

### API: Option 1
- Signup
- Signup with already existing user
- Login with the registered user
- Login with a wrong user
- Login with a wrong password
## Run on Github

Go to the repository

```bash
  https://github.com/danielvelazco/devsu
```

- Click on Actions menu
- Select Devsu Tests workflow
- Click on run workflow button
- On Use workflow from menu, click on run workflow button (green button)
- Get into the job
- When the job finishes you will see a summary about the tests
## Run Locally

Pre-requisites
- Git v2.x
- Node v20.x

Clone the project

```bash
  git clone https://github.com/danielvelazco/devsu.git
```

Go to the project directory

```bash
  cd devsu
```

Install dependencies

```bash
  npm install
```

Run all tests

```bash
  npx cypress run
```

Run tests individually

```bash
  npm run test:api (for API tests)
```
```bash
  npm run test:e2e (for e2e tests)
```
