import { app } from '../src/index';

const PORT = 8787;

app.listen(PORT, () => {
  console.log(`Contextum EVM MCP Server running on http://localhost:${PORT}`);
});
