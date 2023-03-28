import { Chain } from '@chain-registry/types';
const chain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'coolcat',
  status: 'live',
  network_type: 'devnet',
  website: 'https://app.coolcat.space/',
  pretty_name: 'CoolCat',
  chain_id: 'kitten-04',
  bech32_prefix: 'ccat',
  daemon_name: 'coolcat',
  node_home: '$HOME/.coolcat',
  slip44: 118,
  codebase: {
    git_repo: 'https://github.com/DigitalKitchenLabs/coolcat',
    recommended_version: 'v2.0.0',
    compatible_versions: ['v2.0.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/DigitalKitchenLabs/testnets/main/kitten-04/genesis.json'
    }
  },
  peers: {
    seeds: [],
    persistent_peers: []
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.coolcat.space',
        provider: 'Digital Kitchen'
      }
    ],
    rest: [
      {
        address: 'https://lcd.coolcat.space',
        provider: 'Digital Kitchen'
      }
    ],
    grpc: []
  },
  explorers: []
};
export default chain;
