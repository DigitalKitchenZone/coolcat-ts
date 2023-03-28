import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaimFor } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        claimFor(value: MsgClaimFor): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        claimFor(value: MsgClaimFor): {
            typeUrl: string;
            value: MsgClaimFor;
        };
    };
    toJSON: {
        claimFor(value: MsgClaimFor): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        claimFor(value: any): {
            typeUrl: string;
            value: MsgClaimFor;
        };
    };
    fromPartial: {
        claimFor(value: MsgClaimFor): {
            typeUrl: string;
            value: MsgClaimFor;
        };
    };
};
