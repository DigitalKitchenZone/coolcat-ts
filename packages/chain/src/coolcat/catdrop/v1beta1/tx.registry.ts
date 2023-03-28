import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaimFor } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/coolcat.catdrop.v1beta1.MsgClaimFor", MsgClaimFor]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claimFor(value: MsgClaimFor) {
      return {
        typeUrl: "/coolcat.catdrop.v1beta1.MsgClaimFor",
        value: MsgClaimFor.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    claimFor(value: MsgClaimFor) {
      return {
        typeUrl: "/coolcat.catdrop.v1beta1.MsgClaimFor",
        value
      };
    }

  },
  toJSON: {
    claimFor(value: MsgClaimFor) {
      return {
        typeUrl: "/coolcat.catdrop.v1beta1.MsgClaimFor",
        value: MsgClaimFor.toJSON(value)
      };
    }

  },
  fromJSON: {
    claimFor(value: any) {
      return {
        typeUrl: "/coolcat.catdrop.v1beta1.MsgClaimFor",
        value: MsgClaimFor.fromJSON(value)
      };
    }

  },
  fromPartial: {
    claimFor(value: MsgClaimFor) {
      return {
        typeUrl: "/coolcat.catdrop.v1beta1.MsgClaimFor",
        value: MsgClaimFor.fromPartial(value)
      };
    }

  }
};