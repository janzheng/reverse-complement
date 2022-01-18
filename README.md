# Reverse Complement Pinned Serverless Demo

This is a demo of a revere complement serverless API that interacts with both IPFS (through Estuary) and Matic.

##Here's how it works:

1. User enters the data through the interface, which POSTs the data as JSON to the serverless endpoint
- The data looks like: { requester: '0xabc...123', input: 'AATCT', transformer: 'reverse-complement | URL endpoint'}
2. Serverless endpoint receives the request, and either processes the transformation internally, or calls an external endpoint based on the request
- In the future, the transformation will be an external endpoint, and the request itself will be signed with an identifier. The result will be triggered via webhook, since these jobs could take hours/days/weeks. Because the results are so slow, we can't leave the server open, since it'll be too costly/wasteful to leave it on. Alternatively, we could create a "placeholder/pointer" on IPFS for the resulting endpoint to drop a payload into IPFS, but then that endpoint needs to interface with IPFS, which is also not ideal. However, if we're dealing with a lot of data, that might need to be the case, where the placeholder can point to both the input and output data.
3. The serverless endpoint generates a piece of output data:
- e.g. { requester: '0x123...456', input: 'AATCT', output: 'AGATT' transformer: 'reverse-complement | URL endpoint'}
4. The piece of data is pinned to IPFS (Estuary), and receives an address; the IPFS address is added to the output data
5. A receipt is minted as a Matic token
- Token data: { ipfs: '0x123...456 } 
6. The token data is merged with the output data, and is stored in a database for fast access and caching
7. This data is returned to the client

## Browsing requests

The client interface will request a list of tokens from the database, and list the results on the site


## Considerations

- Connect Metamask as signature; correct amount of tokens need to be used to pay for Estuary and Matic to work
