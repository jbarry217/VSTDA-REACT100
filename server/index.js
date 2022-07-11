/* eslint no-console: "off" */
const server = require('./server');

const PORT = process.env.PORT || 3030;

server.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
