#!/bin/bash

# Run the yarn build
yarn build

# Define the path to the runtime.mjs file
RUNTIME_FILE=".output/server/chunks/runtime.mjs"

# Replace 'const port = ...' with 'const port = destr(process.env.DOMAIN_SOCKET);'
sed -i.bak "s/const port = .*/const port = destr(process.env.DOMAIN_SOCKET);/" "$RUNTIME_FILE"

# Replace 'const listener = server.listen(...' with 'const listener = server.listen(port, (err) => {'
sed -i.bak "s/const listener = server.listen(.*/const listener = server.listen(port, (err) => {/" "$RUNTIME_FILE"

# Optional: Remove backup files created by sed
rm "${RUNTIME_FILE}.bak"

echo "Build complete and runtime.mjs updated."

