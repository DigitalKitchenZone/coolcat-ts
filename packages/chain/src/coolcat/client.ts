import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as coolcatAllocV1beta1TxRegistry from "./alloc/v1beta1/tx.registry";
import * as coolcatCatdropV1beta1TxRegistry from "./catdrop/v1beta1/tx.registry";
import * as coolcatAllocV1beta1TxAmino from "./alloc/v1beta1/tx.amino";
import * as coolcatCatdropV1beta1TxAmino from "./catdrop/v1beta1/tx.amino";
export const coolcatAminoConverters = { ...coolcatAllocV1beta1TxAmino.AminoConverter,
  ...coolcatCatdropV1beta1TxAmino.AminoConverter
};
export const coolcatProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...coolcatAllocV1beta1TxRegistry.registry, ...coolcatCatdropV1beta1TxRegistry.registry];
export const getSigningCoolcatClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...coolcatProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...coolcatAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningCoolcatClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningCoolcatClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};