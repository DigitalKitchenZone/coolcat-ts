import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'coolcat',
  assets: [
    {
      description:
        'CoolCat - The Interchain Gaming Hub. $CCAT is the native token for use in the CoolCat Network.',
      denom_units: [
        {
          denom: 'uccat',
          exponent: 0
        },
        {
          denom: 'ccat',
          exponent: 6
        }
      ],
      base: 'uccat',
      name: 'CoolCat',
      display: 'ccat',
      symbol: 'CCAT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/DigitalKitchenLabs/branding/main/ccat.svg'
      },
      coingecko_id: 'coolcat',
      type_asset: 'native',
      keywords: ['nft', 'staking', 'games']
    }
  ]
};
export default assets;
