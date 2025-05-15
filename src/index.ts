import { Hono } from 'hono';

export const app = new Hono();

app.get('/context', (c) => {
  return c.json({
    message: 'Hello from Contextum EVM MCP Server!'
  });
});
