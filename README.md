# Contextum EVM MCP Server

This is the Contextum EVM Model Context Protocol (MCP) server built with Bun and TypeScript.

---

## Development

Run the server locally:

```bash
bun run dev
```

---

## The server runs on http://localhost:8787.

## Visit http://localhost:8787/context to test the server response.

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ContextumAI/contextum-evm-mcp-server.git
cd contextum-evm-mcp-server
```
2. Install dependencies using Bun:
```bash
bun install
```
or using npm:
```bash
npm install
```

---

## Configuration

- Default server port is `8787`.  
- To change it, edit `src/server/http-server.ts` and update the port number.

- Supported chains and their RPC URLs are defined in `src/core/chains.ts`.

---

## Usage

Run server in development mode (auto reload on code changes):

```bash
bun run dev
```
Run server in production mode:
```bash
bun start
```

---

## Testing

Open your browser or use curl to test:

```bash
curl http://localhost:8787/context
```

---

## License
This project is licensed under the MIT License.

---

## Contribution
Contributions are welcome! Please open an issue or submit a pull request.
