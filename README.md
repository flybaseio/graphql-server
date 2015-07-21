# graphql-server

GraphQL server with Flybase and Node.js  

**Example GraphQL query:**
```
user(id: "1") {
  name
  friends {
    name
  }
}
```

**Example response:**
```json
{
  "data": {
    "user": {
      "name": "John Doe",
      "friends": [
        {
          "name": "Friend One"
        },
        {
          "name": "Friend Two"
        }]
      }
    }
  }
```

**Example GraphQL mutation:**
```
mutation updateUser($userId: String! $name: String!) {
  updateUser(id: $userId name: $name) {
    name
  }
}
```

## Used technologies

* Flybase
* GraphQL
* Node/IO.js
* Babel

## How to start

You need `iojs` or >= `Node.js` v0.12.x

### server

```
npm install
npm start

```

### client
```
npm run client
```

## How to test

```
npm test
```
