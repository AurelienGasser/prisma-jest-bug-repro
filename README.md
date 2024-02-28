```
npm i
npm run init
npm run test
```

Run 2 tests:
- Test A: Acquire a Prisma client, and print the number of open connections
- Test B: Wait for 5 seconds, then acquire a Prisma client, and print the number of open connections

- **Expected behavior**: Test B reuses the connection from Test A OR the connection from Test A is closed and Test B creates a new connection
- **Actual behavior**: The connection from Test A is not closed. Test B creates a new connection.

