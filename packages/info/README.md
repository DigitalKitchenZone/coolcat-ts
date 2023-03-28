# @coolcatchain/chain

Chain Registry info for CoolCat, including assets.

```sh
yarn add @coolcatchain/info
```

```js
import { chain, assets } from '@coolcatchain/chain';
```

## assets

```js
console.log(assets);
{
  '$schema': '../assetlist.schema.json',
  chain_name: 'coolcat',
  assets: [
    {
      description: 'CoolCat - The Interchain Gaming Hub. $CCAT is the native token for use in the CoolCat Network.',
      denom_units: [Array],
      base: 'uccat',
      name: 'CoolCat',
      display: 'ccat',
      symbol: 'CCAT',
      logo_URIs: [Object],
      coingecko_id: 'coolcat'
    }
  ]
}
```

### chain

```js
console.log(chain);
{
  '$schema': '../chain.schema.json',
  chain_name: 'coolcat',
  status: 'live',
  network_type: 'devnet',
  pretty_name: 'CoolCat',
  chain_id: 'kitten-04',
  bech32_prefix: 'ccat',
  daemon_name: 'coolcat',
  node_home: '$HOME/.coolcat',
  slip44: 118,
  genesis: {
    genesis_url: ''
  },
  codebase: {
    git_repo: 'https://github.com/DigitalKitchenLabs/coolcat',
    recommended_version: 'v2.0.0',
    compatible_versions: [ 'v2.0.0' ]
  },
  peers: {
    seeds: [ [Object], [Object], [Object], [Object], [Object] ],
    persistent_peers: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object]
    ]
  },
  apis: {
    rpc: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    rest: [ [Object], [Object], [Object], [Object], [Object] ],
    grpc: [ [Object] ]
  },
  explorers: []
}
```

## Credits

🛠 Built by [Digital Kitchen](https://digitalkitchen.zone/stake), based on [Cosmology ⚛️](https://cosmology.tech/validator) goodness!

Chain Registry:

- [chain-registry](https://github.com/cosmology/chain-registry) an npm module for the official Cosmos chain-registry
