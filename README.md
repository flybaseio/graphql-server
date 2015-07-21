# GraphQL Server

**Please note, this is an very big work in progress as GraphQL gets finalized, we'll be refining this library to be more useful, currently it's for reference so you can see how GraphQL and Flybase.io integrate well together.**

GraphQL server with Flybase.io and Node.js  

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

* Flybase.io
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
## How to test

```
npm test
```
