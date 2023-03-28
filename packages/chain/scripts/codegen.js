import { join } from "path";
import telescope from "@osmonauts/telescope";

telescope({
  protoDirs: [join(__dirname, "../proto")],
  outPath: join(__dirname, "../src"),
  options: {
    prototypes: {
      includePackageVar: false,
      typingsFormat: {
        useExact: false,
        timestamp: "timestamp",
        duration: "duration",
      },
      methods: {
        toJSON: true,
        fromJSON: true,
      },
      excluded: {
        packages: [
          "cosmos.app.v1alpha1",
          "cosmos.app.v1beta1",
          "cosmos.base.kv.v1beta1",
          "cosmos.base.reflection.v1beta1",
          "cosmos.base.snapshots.v1beta1",
          "cosmos.base.store.v1beta1",
          "cosmos.base.tendermint.v1beta1",
          "cosmos.crisis.v1beta1",
          "cosmos.evidence.v1beta1",
          "cosmos.feegrant.v1beta1",
          "cosmos.genutil.v1beta1",
          "cosmos.group.v1beta1",
          "cosmos.mint.v1beta1",
          "cosmos.gov.v1",
          "cosmos.group.v1",
          "cosmos.msg.v1",
          "cosmos.nft.v1beta1",
          "cosmos.capability.v1beta1",
          "cosmos.orm.v1alpha1",
          "cosmos.orm.v1",
          "cosmos.slashing.v1beta1",
          "cosmos.vesting.v1beta1",
          "google.api",
          "ibc.core.port.v1",
          "ibc.core.types.v1",
        ],
      },
    },
    aminoEncoding: {
      enabled: true,
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      camelCase: true,
    },
    classesUseArrowFunctions: true,
    bundle: { enabled: true },
    experimentalGlobalProtoNamespace: true,
    includeExternalHelpers: true,
    removeUnusedImports: true,
    interfaces: {
      enabled: true,
      useUnionTypes: true,
    },
    useSDKTypes: false,
    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true,
    },
  },
})
  .then(() => {
    console.log("✨ Generated CoolCat chain package!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
