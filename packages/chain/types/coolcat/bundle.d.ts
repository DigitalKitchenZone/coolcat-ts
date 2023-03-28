import * as _1 from "./alloc/v1beta1/genesis";
import * as _2 from "./alloc/v1beta1/params";
import * as _3 from "./alloc/v1beta1/query";
import * as _4 from "./alloc/v1beta1/tx";
import * as _5 from "./catdrop/v1beta1/claim_record";
import * as _6 from "./catdrop/v1beta1/genesis";
import * as _7 from "./catdrop/v1beta1/params";
import * as _8 from "./catdrop/v1beta1/query";
import * as _9 from "./catdrop/v1beta1/tx";
import * as _10 from "./mint/v1beta1/genesis";
import * as _11 from "./mint/v1beta1/mint";
import * as _12 from "./mint/v1beta1/query";
import * as _107 from "./alloc/v1beta1/query.rpc.Query";
import * as _108 from "./catdrop/v1beta1/query.rpc.Query";
import * as _109 from "./mint/v1beta1/query.rpc.Query";
import * as _110 from "./alloc/v1beta1/tx.rpc.msg";
import * as _111 from "./catdrop/v1beta1/tx.rpc.msg";
export declare namespace coolcat {
    namespace alloc {
        const v1beta1: {
            MsgClientImpl: typeof _110.MsgClientImpl;
            QueryClientImpl: typeof _107.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _4.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _4.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _4.MsgCreateVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _4.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _4.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _4.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _4.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/coolcat.alloc.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, startTime, endTime, delayed }: _4.MsgCreateVestingAccount) => {
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
                    }) => _4.MsgCreateVestingAccount;
                };
            };
            MsgCreateVestingAccount: {
                encode(message: _4.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgCreateVestingAccount;
                fromJSON(object: any): _4.MsgCreateVestingAccount;
                toJSON(message: _4.MsgCreateVestingAccount): unknown;
                fromPartial(object: any): _4.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _4.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _4.MsgCreateVestingAccountResponse;
                toJSON(_: _4.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: any): _4.MsgCreateVestingAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _3.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsRequest;
                fromJSON(_: any): _3.QueryParamsRequest;
                toJSON(_: _3.QueryParamsRequest): unknown;
                fromPartial(_: any): _3.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _3.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.QueryParamsResponse;
                fromJSON(object: any): _3.QueryParamsResponse;
                toJSON(message: _3.QueryParamsResponse): unknown;
                fromPartial(object: any): _3.QueryParamsResponse;
            };
            DistributionProportions: {
                encode(message: _2.DistributionProportions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.DistributionProportions;
                fromJSON(object: any): _2.DistributionProportions;
                toJSON(message: _2.DistributionProportions): unknown;
                fromPartial(object: any): _2.DistributionProportions;
            };
            Params: {
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromJSON(object: any): _2.Params;
                toJSON(message: _2.Params): unknown;
                fromPartial(object: any): _2.Params;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenesisState;
                fromJSON(object: any): _1.GenesisState;
                toJSON(message: _1.GenesisState): unknown;
                fromPartial(object: any): _1.GenesisState;
            };
        };
    }
    namespace catdrop {
        const v1beta1: {
            MsgClientImpl: typeof _111.MsgClientImpl;
            QueryClientImpl: typeof _108.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                moduleAccountBalance(request?: _8.QueryModuleAccountBalanceRequest): Promise<_8.QueryModuleAccountBalanceResponse>;
                params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                claimRecord(request: _8.QueryClaimRecordRequest): Promise<_8.QueryClaimRecordResponse>;
                claimableForAction(request: _8.QueryClaimableForActionRequest): Promise<_8.QueryClaimableForActionResponse>;
                totalClaimable(request: _8.QueryTotalClaimableRequest): Promise<_8.QueryTotalClaimableResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    claimFor(value: _9.MsgClaimFor): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claimFor(value: _9.MsgClaimFor): {
                        typeUrl: string;
                        value: _9.MsgClaimFor;
                    };
                };
                toJSON: {
                    claimFor(value: _9.MsgClaimFor): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    claimFor(value: any): {
                        typeUrl: string;
                        value: _9.MsgClaimFor;
                    };
                };
                fromPartial: {
                    claimFor(value: _9.MsgClaimFor): {
                        typeUrl: string;
                        value: _9.MsgClaimFor;
                    };
                };
            };
            AminoConverter: {
                "/coolcat.catdrop.v1beta1.MsgClaimFor": {
                    aminoType: string;
                    toAmino: ({ sender, address, action }: _9.MsgClaimFor) => {
                        sender: string;
                        address: string;
                        action: number;
                    };
                    fromAmino: ({ sender, address, action }: {
                        sender: string;
                        address: string;
                        action: number;
                    }) => _9.MsgClaimFor;
                };
            };
            MsgClaimFor: {
                encode(message: _9.MsgClaimFor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgClaimFor;
                fromJSON(object: any): _9.MsgClaimFor;
                toJSON(message: _9.MsgClaimFor): unknown;
                fromPartial(object: any): _9.MsgClaimFor;
            };
            MsgClaimForResponse: {
                encode(message: _9.MsgClaimForResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgClaimForResponse;
                fromJSON(object: any): _9.MsgClaimForResponse;
                toJSON(message: _9.MsgClaimForResponse): unknown;
                fromPartial(object: any): _9.MsgClaimForResponse;
            };
            QueryModuleAccountBalanceRequest: {
                encode(_: _8.QueryModuleAccountBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _8.QueryModuleAccountBalanceRequest;
                toJSON(_: _8.QueryModuleAccountBalanceRequest): unknown;
                fromPartial(_: any): _8.QueryModuleAccountBalanceRequest;
            };
            QueryModuleAccountBalanceResponse: {
                encode(message: _8.QueryModuleAccountBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _8.QueryModuleAccountBalanceResponse;
                toJSON(message: _8.QueryModuleAccountBalanceResponse): unknown;
                fromPartial(object: any): _8.QueryModuleAccountBalanceResponse;
            };
            QueryParamsRequest: {
                encode(_: _8.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryParamsRequest;
                fromJSON(_: any): _8.QueryParamsRequest;
                toJSON(_: _8.QueryParamsRequest): unknown;
                fromPartial(_: any): _8.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _8.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryParamsResponse;
                fromJSON(object: any): _8.QueryParamsResponse;
                toJSON(message: _8.QueryParamsResponse): unknown;
                fromPartial(object: any): _8.QueryParamsResponse;
            };
            QueryClaimRecordRequest: {
                encode(message: _8.QueryClaimRecordRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryClaimRecordRequest;
                fromJSON(object: any): _8.QueryClaimRecordRequest;
                toJSON(message: _8.QueryClaimRecordRequest): unknown;
                fromPartial(object: any): _8.QueryClaimRecordRequest;
            };
            QueryClaimRecordResponse: {
                encode(message: _8.QueryClaimRecordResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryClaimRecordResponse;
                fromJSON(object: any): _8.QueryClaimRecordResponse;
                toJSON(message: _8.QueryClaimRecordResponse): unknown;
                fromPartial(object: any): _8.QueryClaimRecordResponse;
            };
            QueryClaimableForActionRequest: {
                encode(message: _8.QueryClaimableForActionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryClaimableForActionRequest;
                fromJSON(object: any): _8.QueryClaimableForActionRequest;
                toJSON(message: _8.QueryClaimableForActionRequest): unknown;
                fromPartial(object: any): _8.QueryClaimableForActionRequest;
            };
            QueryClaimableForActionResponse: {
                encode(message: _8.QueryClaimableForActionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryClaimableForActionResponse;
                fromJSON(object: any): _8.QueryClaimableForActionResponse;
                toJSON(message: _8.QueryClaimableForActionResponse): unknown;
                fromPartial(object: any): _8.QueryClaimableForActionResponse;
            };
            QueryTotalClaimableRequest: {
                encode(message: _8.QueryTotalClaimableRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryTotalClaimableRequest;
                fromJSON(object: any): _8.QueryTotalClaimableRequest;
                toJSON(message: _8.QueryTotalClaimableRequest): unknown;
                fromPartial(object: any): _8.QueryTotalClaimableRequest;
            };
            QueryTotalClaimableResponse: {
                encode(message: _8.QueryTotalClaimableResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryTotalClaimableResponse;
                fromJSON(object: any): _8.QueryTotalClaimableResponse;
                toJSON(message: _8.QueryTotalClaimableResponse): unknown;
                fromPartial(object: any): _8.QueryTotalClaimableResponse;
            };
            ClaimAuthorization: {
                encode(message: _7.ClaimAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.ClaimAuthorization;
                fromJSON(object: any): _7.ClaimAuthorization;
                toJSON(message: _7.ClaimAuthorization): unknown;
                fromPartial(object: any): _7.ClaimAuthorization;
            };
            Params: {
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Params;
                fromJSON(object: any): _7.Params;
                toJSON(message: _7.Params): unknown;
                fromPartial(object: any): _7.Params;
            };
            GenesisState: {
                encode(message: _6.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.GenesisState;
                fromJSON(object: any): _6.GenesisState;
                toJSON(message: _6.GenesisState): unknown;
                fromPartial(object: any): _6.GenesisState;
            };
            actionFromJSON(object: any): _5.Action;
            actionToJSON(object: _5.Action): string;
            Action: typeof _5.Action;
            ClaimRecord: {
                encode(message: _5.ClaimRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ClaimRecord;
                fromJSON(object: any): _5.ClaimRecord;
                toJSON(message: _5.ClaimRecord): unknown;
                fromPartial(object: any): _5.ClaimRecord;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _109.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                inflation(request?: _12.QueryInflationRequest): Promise<_12.QueryInflationResponse>;
                annualProvisions(request?: _12.QueryAnnualProvisionsRequest): Promise<_12.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _12.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsRequest;
                fromJSON(_: any): _12.QueryParamsRequest;
                toJSON(_: _12.QueryParamsRequest): unknown;
                fromPartial(_: any): _12.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _12.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryParamsResponse;
                fromJSON(object: any): _12.QueryParamsResponse;
                toJSON(message: _12.QueryParamsResponse): unknown;
                fromPartial(object: any): _12.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _12.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryInflationRequest;
                fromJSON(_: any): _12.QueryInflationRequest;
                toJSON(_: _12.QueryInflationRequest): unknown;
                fromPartial(_: any): _12.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _12.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryInflationResponse;
                fromJSON(object: any): _12.QueryInflationResponse;
                toJSON(message: _12.QueryInflationResponse): unknown;
                fromPartial(object: any): _12.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _12.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _12.QueryAnnualProvisionsRequest;
                toJSON(_: _12.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: any): _12.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _12.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _12.QueryAnnualProvisionsResponse;
                toJSON(message: _12.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: any): _12.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _11.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Minter;
                fromJSON(object: any): _11.Minter;
                toJSON(message: _11.Minter): unknown;
                fromPartial(object: any): _11.Minter;
            };
            Params: {
                encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Params;
                fromJSON(object: any): _11.Params;
                toJSON(message: _11.Params): unknown;
                fromPartial(object: any): _11.Params;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromJSON(object: any): _10.GenesisState;
                toJSON(message: _10.GenesisState): unknown;
                fromPartial(object: any): _10.GenesisState;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            coolcat: {
                alloc: {
                    v1beta1: _110.MsgClientImpl;
                };
                catdrop: {
                    v1beta1: _111.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            coolcat: {
                alloc: {
                    v1beta1: {
                        params(request?: _3.QueryParamsRequest): Promise<_3.QueryParamsResponse>;
                    };
                };
                catdrop: {
                    v1beta1: {
                        moduleAccountBalance(request?: _8.QueryModuleAccountBalanceRequest): Promise<_8.QueryModuleAccountBalanceResponse>;
                        params(request?: _8.QueryParamsRequest): Promise<_8.QueryParamsResponse>;
                        claimRecord(request: _8.QueryClaimRecordRequest): Promise<_8.QueryClaimRecordResponse>;
                        claimableForAction(request: _8.QueryClaimableForActionRequest): Promise<_8.QueryClaimableForActionResponse>;
                        totalClaimable(request: _8.QueryTotalClaimableRequest): Promise<_8.QueryTotalClaimableResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _12.QueryParamsRequest): Promise<_12.QueryParamsResponse>;
                        inflation(request?: _12.QueryInflationRequest): Promise<_12.QueryInflationResponse>;
                        annualProvisions(request?: _12.QueryAnnualProvisionsRequest): Promise<_12.QueryAnnualProvisionsResponse>;
                    };
                };
            };
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
