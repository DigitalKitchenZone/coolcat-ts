import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const coolcatAminoConverters: {
    "/coolcat.catdrop.v1beta1.MsgClaimFor": {
        aminoType: string;
        toAmino: ({ sender, address, action }: import("./catdrop/v1beta1/tx").MsgClaimFor) => {
            sender: string;
            address: string;
            action: number;
        };
        fromAmino: ({ sender, address, action }: {
            sender: string;
            address: string;
            action: number;
        }) => import("./catdrop/v1beta1/tx").MsgClaimFor;
    };
    "/coolcat.alloc.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: import("./alloc/v1beta1/tx").MsgCreateVestingAccount) => {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
            start_time: string;
            end_time: string;
            delayed: boolean;
        };
        fromAmino: ({ from_address, to_address, amount, start_time, end_time, delayed }: {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
            start_time: string;
            end_time: string;
            delayed: boolean;
        }) => import("./alloc/v1beta1/tx").MsgCreateVestingAccount;
    };
};
export declare const coolcatProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCoolcatClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCoolcatClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
