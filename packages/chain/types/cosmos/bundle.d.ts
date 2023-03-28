import * as _14 from "./auth/v1beta1/auth";
import * as _15 from "./auth/v1beta1/genesis";
import * as _16 from "./auth/v1beta1/query";
import * as _17 from "./authz/v1beta1/authz";
import * as _18 from "./authz/v1beta1/event";
import * as _19 from "./authz/v1beta1/genesis";
import * as _20 from "./authz/v1beta1/query";
import * as _21 from "./authz/v1beta1/tx";
import * as _22 from "./bank/v1beta1/authz";
import * as _23 from "./bank/v1beta1/bank";
import * as _24 from "./bank/v1beta1/genesis";
import * as _25 from "./bank/v1beta1/query";
import * as _26 from "./bank/v1beta1/tx";
import * as _27 from "./base/abci/v1beta1/abci";
import * as _28 from "./base/query/v1beta1/pagination";
import * as _29 from "./base/reflection/v2alpha1/reflection";
import * as _30 from "./base/v1beta1/coin";
import * as _31 from "./crypto/ed25519/keys";
import * as _32 from "./crypto/hd/v1/hd";
import * as _33 from "./crypto/keyring/v1/record";
import * as _34 from "./crypto/multisig/keys";
import * as _35 from "./crypto/secp256k1/keys";
import * as _36 from "./crypto/secp256r1/keys";
import * as _37 from "./distribution/v1beta1/distribution";
import * as _38 from "./distribution/v1beta1/genesis";
import * as _39 from "./distribution/v1beta1/query";
import * as _40 from "./distribution/v1beta1/tx";
import * as _41 from "./gov/v1beta1/genesis";
import * as _42 from "./gov/v1beta1/gov";
import * as _43 from "./gov/v1beta1/query";
import * as _44 from "./gov/v1beta1/tx";
import * as _45 from "./params/v1beta1/params";
import * as _46 from "./params/v1beta1/query";
import * as _47 from "./staking/v1beta1/authz";
import * as _48 from "./staking/v1beta1/genesis";
import * as _49 from "./staking/v1beta1/query";
import * as _50 from "./staking/v1beta1/staking";
import * as _51 from "./staking/v1beta1/tx";
import * as _52 from "./tx/signing/v1beta1/signing";
import * as _53 from "./tx/v1beta1/service";
import * as _54 from "./tx/v1beta1/tx";
import * as _55 from "./upgrade/v1beta1/query";
import * as _56 from "./upgrade/v1beta1/tx";
import * as _57 from "./upgrade/v1beta1/upgrade";
import * as _124 from "./auth/v1beta1/query.rpc.Query";
import * as _125 from "./authz/v1beta1/query.rpc.Query";
import * as _126 from "./bank/v1beta1/query.rpc.Query";
import * as _127 from "./distribution/v1beta1/query.rpc.Query";
import * as _128 from "./gov/v1beta1/query.rpc.Query";
import * as _129 from "./params/v1beta1/query.rpc.Query";
import * as _130 from "./staking/v1beta1/query.rpc.Query";
import * as _131 from "./tx/v1beta1/service.rpc.Service";
import * as _132 from "./upgrade/v1beta1/query.rpc.Query";
import * as _133 from "./authz/v1beta1/tx.rpc.msg";
import * as _134 from "./bank/v1beta1/tx.rpc.msg";
import * as _135 from "./distribution/v1beta1/tx.rpc.msg";
import * as _136 from "./gov/v1beta1/tx.rpc.msg";
import * as _137 from "./staking/v1beta1/tx.rpc.msg";
import * as _138 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _124.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _16.QueryAccountsRequest): Promise<_16.QueryAccountsResponse>;
                account(request: _16.QueryAccountRequest): Promise<_16.QueryAccountResponse>;
                params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                moduleAccounts(request?: _16.QueryModuleAccountsRequest): Promise<_16.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _16.Bech32PrefixRequest): Promise<_16.Bech32PrefixResponse>;
                addressBytesToString(request: _16.AddressBytesToStringRequest): Promise<_16.AddressBytesToStringResponse>;
                addressStringToBytes(request: _16.AddressStringToBytesRequest): Promise<_16.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _16.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAccountsRequest;
                fromJSON(object: any): _16.QueryAccountsRequest;
                toJSON(message: _16.QueryAccountsRequest): unknown;
                fromPartial(object: any): _16.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _16.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAccountsResponse;
                fromJSON(object: any): _16.QueryAccountsResponse;
                toJSON(message: _16.QueryAccountsResponse): unknown;
                fromPartial(object: any): _16.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _16.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAccountRequest;
                fromJSON(object: any): _16.QueryAccountRequest;
                toJSON(message: _16.QueryAccountRequest): unknown;
                fromPartial(object: any): _16.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _16.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryModuleAccountsRequest;
                fromJSON(_: any): _16.QueryModuleAccountsRequest;
                toJSON(_: _16.QueryModuleAccountsRequest): unknown;
                fromPartial(_: any): _16.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _16.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsResponse;
                fromJSON(object: any): _16.QueryParamsResponse;
                toJSON(message: _16.QueryParamsResponse): unknown;
                fromPartial(object: any): _16.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _16.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryAccountResponse;
                fromJSON(object: any): _16.QueryAccountResponse;
                toJSON(message: _16.QueryAccountResponse): unknown;
                fromPartial(object: any): _16.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _16.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryParamsRequest;
                fromJSON(_: any): _16.QueryParamsRequest;
                toJSON(_: _16.QueryParamsRequest): unknown;
                fromPartial(_: any): _16.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _16.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.QueryModuleAccountsResponse;
                fromJSON(object: any): _16.QueryModuleAccountsResponse;
                toJSON(message: _16.QueryModuleAccountsResponse): unknown;
                fromPartial(object: any): _16.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _16.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Bech32PrefixRequest;
                fromJSON(_: any): _16.Bech32PrefixRequest;
                toJSON(_: _16.Bech32PrefixRequest): unknown;
                fromPartial(_: any): _16.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _16.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Bech32PrefixResponse;
                fromJSON(object: any): _16.Bech32PrefixResponse;
                toJSON(message: _16.Bech32PrefixResponse): unknown;
                fromPartial(object: any): _16.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _16.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.AddressBytesToStringRequest;
                fromJSON(object: any): _16.AddressBytesToStringRequest;
                toJSON(message: _16.AddressBytesToStringRequest): unknown;
                fromPartial(object: any): _16.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _16.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.AddressBytesToStringResponse;
                fromJSON(object: any): _16.AddressBytesToStringResponse;
                toJSON(message: _16.AddressBytesToStringResponse): unknown;
                fromPartial(object: any): _16.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _16.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.AddressStringToBytesRequest;
                fromJSON(object: any): _16.AddressStringToBytesRequest;
                toJSON(message: _16.AddressStringToBytesRequest): unknown;
                fromPartial(object: any): _16.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _16.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.AddressStringToBytesResponse;
                fromJSON(object: any): _16.AddressStringToBytesResponse;
                toJSON(message: _16.AddressStringToBytesResponse): unknown;
                fromPartial(object: any): _16.AddressStringToBytesResponse;
            };
            AccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _14.BaseAccount;
            ModuleAccountI_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _14.ModuleAccount;
            GenesisState: {
                encode(message: _15.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GenesisState;
                fromJSON(object: any): _15.GenesisState;
                toJSON(message: _15.GenesisState): unknown;
                fromPartial(object: any): _15.GenesisState;
            };
            BaseAccount: {
                encode(message: _14.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.BaseAccount;
                fromJSON(object: any): _14.BaseAccount;
                toJSON(message: _14.BaseAccount): unknown;
                fromPartial(object: any): _14.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _14.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ModuleAccount;
                fromJSON(object: any): _14.ModuleAccount;
                toJSON(message: _14.ModuleAccount): unknown;
                fromPartial(object: any): _14.ModuleAccount;
            };
            Params: {
                encode(message: _14.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Params;
                fromJSON(object: any): _14.Params;
                toJSON(message: _14.Params): unknown;
                fromPartial(object: any): _14.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _133.MsgClientImpl;
            QueryClientImpl: typeof _125.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _20.QueryGrantsRequest): Promise<_20.QueryGrantsResponse>;
                granterGrants(request: _20.QueryGranterGrantsRequest): Promise<_20.QueryGranterGrantsResponse>;
                granteeGrants(request: _20.QueryGranteeGrantsRequest): Promise<_20.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _21.MsgGrant): {
                        typeUrl: string;
                        value: _21.MsgGrant;
                    };
                    exec(value: _21.MsgExec): {
                        typeUrl: string;
                        value: _21.MsgExec;
                    };
                    revoke(value: _21.MsgRevoke): {
                        typeUrl: string;
                        value: _21.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _21.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _21.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _21.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _21.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _21.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _21.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _21.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgGrant;
                fromJSON(object: any): _21.MsgGrant;
                toJSON(message: _21.MsgGrant): unknown;
                fromPartial(object: any): _21.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _21.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgExecResponse;
                fromJSON(object: any): _21.MsgExecResponse;
                toJSON(message: _21.MsgExecResponse): unknown;
                fromPartial(object: any): _21.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _21.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgExec;
                fromJSON(object: any): _21.MsgExec;
                toJSON(message: _21.MsgExec): unknown;
                fromPartial(object: any): _21.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _21.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgGrantResponse;
                fromJSON(_: any): _21.MsgGrantResponse;
                toJSON(_: _21.MsgGrantResponse): unknown;
                fromPartial(_: any): _21.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _21.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgRevoke;
                fromJSON(object: any): _21.MsgRevoke;
                toJSON(message: _21.MsgRevoke): unknown;
                fromPartial(object: any): _21.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _21.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.MsgRevokeResponse;
                fromJSON(_: any): _21.MsgRevokeResponse;
                toJSON(_: _21.MsgRevokeResponse): unknown;
                fromPartial(_: any): _21.MsgRevokeResponse;
            };
            Sdk_Msg_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            Authz_Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            QueryGrantsRequest: {
                encode(message: _20.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryGrantsRequest;
                fromJSON(object: any): _20.QueryGrantsRequest;
                toJSON(message: _20.QueryGrantsRequest): unknown;
                fromPartial(object: any): _20.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _20.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryGrantsResponse;
                fromJSON(object: any): _20.QueryGrantsResponse;
                toJSON(message: _20.QueryGrantsResponse): unknown;
                fromPartial(object: any): _20.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _20.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryGranterGrantsRequest;
                fromJSON(object: any): _20.QueryGranterGrantsRequest;
                toJSON(message: _20.QueryGranterGrantsRequest): unknown;
                fromPartial(object: any): _20.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _20.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryGranterGrantsResponse;
                fromJSON(object: any): _20.QueryGranterGrantsResponse;
                toJSON(message: _20.QueryGranterGrantsResponse): unknown;
                fromPartial(object: any): _20.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _20.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryGranteeGrantsRequest;
                fromJSON(object: any): _20.QueryGranteeGrantsRequest;
                toJSON(message: _20.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: any): _20.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _20.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.QueryGranteeGrantsResponse;
                fromJSON(object: any): _20.QueryGranteeGrantsResponse;
                toJSON(message: _20.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: any): _20.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _19.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.GenesisState;
                fromJSON(object: any): _19.GenesisState;
                toJSON(message: _19.GenesisState): unknown;
                fromPartial(object: any): _19.GenesisState;
            };
            EventGrant: {
                encode(message: _18.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.EventGrant;
                fromJSON(object: any): _18.EventGrant;
                toJSON(message: _18.EventGrant): unknown;
                fromPartial(object: any): _18.EventGrant;
            };
            EventRevoke: {
                encode(message: _18.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.EventRevoke;
                fromJSON(object: any): _18.EventRevoke;
                toJSON(message: _18.EventRevoke): unknown;
                fromPartial(object: any): _18.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _17.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GenericAuthorization;
                fromJSON(object: any): _17.GenericAuthorization;
                toJSON(message: _17.GenericAuthorization): unknown;
                fromPartial(object: any): _17.GenericAuthorization;
            };
            Grant: {
                encode(message: _17.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Grant;
                fromJSON(object: any): _17.Grant;
                toJSON(message: _17.Grant): unknown;
                fromPartial(object: any): _17.Grant;
            };
            GrantAuthorization: {
                encode(message: _17.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GrantAuthorization;
                fromJSON(object: any): _17.GrantAuthorization;
                toJSON(message: _17.GrantAuthorization): unknown;
                fromPartial(object: any): _17.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _17.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GrantQueueItem;
                fromJSON(object: any): _17.GrantQueueItem;
                toJSON(message: _17.GrantQueueItem): unknown;
                fromPartial(object: any): _17.GrantQueueItem;
            };
            Authorization_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _22.SendAuthorization | _47.StakeAuthorization | _17.GenericAuthorization;
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _134.MsgClientImpl;
            QueryClientImpl: typeof _126.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _25.QueryBalanceRequest): Promise<_25.QueryBalanceResponse>;
                allBalances(request: _25.QueryAllBalancesRequest): Promise<_25.QueryAllBalancesResponse>;
                spendableBalances(request: _25.QuerySpendableBalancesRequest): Promise<_25.QuerySpendableBalancesResponse>;
                totalSupply(request?: _25.QueryTotalSupplyRequest): Promise<_25.QueryTotalSupplyResponse>;
                supplyOf(request: _25.QuerySupplyOfRequest): Promise<_25.QuerySupplyOfResponse>;
                params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                denomMetadata(request: _25.QueryDenomMetadataRequest): Promise<_25.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _25.QueryDenomsMetadataRequest): Promise<_25.QueryDenomsMetadataResponse>;
                denomOwners(request: _25.QueryDenomOwnersRequest): Promise<_25.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: _26.MsgSend;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: _26.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _26.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _26.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _26.MsgSend): {
                        typeUrl: string;
                        value: _26.MsgSend;
                    };
                    multiSend(value: _26.MsgMultiSend): {
                        typeUrl: string;
                        value: _26.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _26.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _26.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _26.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _26.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _26.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgSend;
                fromJSON(object: any): _26.MsgSend;
                toJSON(message: _26.MsgSend): unknown;
                fromPartial(object: any): _26.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _26.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgSendResponse;
                fromJSON(_: any): _26.MsgSendResponse;
                toJSON(_: _26.MsgSendResponse): unknown;
                fromPartial(_: any): _26.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _26.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgMultiSend;
                fromJSON(object: any): _26.MsgMultiSend;
                toJSON(message: _26.MsgMultiSend): unknown;
                fromPartial(object: any): _26.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _26.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.MsgMultiSendResponse;
                fromJSON(_: any): _26.MsgMultiSendResponse;
                toJSON(_: _26.MsgMultiSendResponse): unknown;
                fromPartial(_: any): _26.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _25.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryBalanceRequest;
                fromJSON(object: any): _25.QueryBalanceRequest;
                toJSON(message: _25.QueryBalanceRequest): unknown;
                fromPartial(object: any): _25.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _25.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryBalanceResponse;
                fromJSON(object: any): _25.QueryBalanceResponse;
                toJSON(message: _25.QueryBalanceResponse): unknown;
                fromPartial(object: any): _25.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _25.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryAllBalancesRequest;
                fromJSON(object: any): _25.QueryAllBalancesRequest;
                toJSON(message: _25.QueryAllBalancesRequest): unknown;
                fromPartial(object: any): _25.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _25.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryAllBalancesResponse;
                fromJSON(object: any): _25.QueryAllBalancesResponse;
                toJSON(message: _25.QueryAllBalancesResponse): unknown;
                fromPartial(object: any): _25.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _25.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QuerySpendableBalancesRequest;
                fromJSON(object: any): _25.QuerySpendableBalancesRequest;
                toJSON(message: _25.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: any): _25.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _25.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QuerySpendableBalancesResponse;
                fromJSON(object: any): _25.QuerySpendableBalancesResponse;
                toJSON(message: _25.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: any): _25.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _25.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryTotalSupplyRequest;
                fromJSON(object: any): _25.QueryTotalSupplyRequest;
                toJSON(message: _25.QueryTotalSupplyRequest): unknown;
                fromPartial(object: any): _25.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _25.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryTotalSupplyResponse;
                fromJSON(object: any): _25.QueryTotalSupplyResponse;
                toJSON(message: _25.QueryTotalSupplyResponse): unknown;
                fromPartial(object: any): _25.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _25.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QuerySupplyOfRequest;
                fromJSON(object: any): _25.QuerySupplyOfRequest;
                toJSON(message: _25.QuerySupplyOfRequest): unknown;
                fromPartial(object: any): _25.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _25.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QuerySupplyOfResponse;
                fromJSON(object: any): _25.QuerySupplyOfResponse;
                toJSON(message: _25.QuerySupplyOfResponse): unknown;
                fromPartial(object: any): _25.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _25.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryParamsRequest;
                fromJSON(_: any): _25.QueryParamsRequest;
                toJSON(_: _25.QueryParamsRequest): unknown;
                fromPartial(_: any): _25.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _25.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryParamsResponse;
                fromJSON(object: any): _25.QueryParamsResponse;
                toJSON(message: _25.QueryParamsResponse): unknown;
                fromPartial(object: any): _25.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _25.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDenomsMetadataRequest;
                fromJSON(object: any): _25.QueryDenomsMetadataRequest;
                toJSON(message: _25.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: any): _25.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _25.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDenomsMetadataResponse;
                fromJSON(object: any): _25.QueryDenomsMetadataResponse;
                toJSON(message: _25.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: any): _25.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _25.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDenomMetadataRequest;
                fromJSON(object: any): _25.QueryDenomMetadataRequest;
                toJSON(message: _25.QueryDenomMetadataRequest): unknown;
                fromPartial(object: any): _25.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _25.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDenomMetadataResponse;
                fromJSON(object: any): _25.QueryDenomMetadataResponse;
                toJSON(message: _25.QueryDenomMetadataResponse): unknown;
                fromPartial(object: any): _25.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _25.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDenomOwnersRequest;
                fromJSON(object: any): _25.QueryDenomOwnersRequest;
                toJSON(message: _25.QueryDenomOwnersRequest): unknown;
                fromPartial(object: any): _25.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _25.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DenomOwner;
                fromJSON(object: any): _25.DenomOwner;
                toJSON(message: _25.DenomOwner): unknown;
                fromPartial(object: any): _25.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _25.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.QueryDenomOwnersResponse;
                fromJSON(object: any): _25.QueryDenomOwnersResponse;
                toJSON(message: _25.QueryDenomOwnersResponse): unknown;
                fromPartial(object: any): _25.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _24.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.GenesisState;
                fromJSON(object: any): _24.GenesisState;
                toJSON(message: _24.GenesisState): unknown;
                fromPartial(object: any): _24.GenesisState;
            };
            Balance: {
                encode(message: _24.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Balance;
                fromJSON(object: any): _24.Balance;
                toJSON(message: _24.Balance): unknown;
                fromPartial(object: any): _24.Balance;
            };
            Params: {
                encode(message: _23.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Params;
                fromJSON(object: any): _23.Params;
                toJSON(message: _23.Params): unknown;
                fromPartial(object: any): _23.Params;
            };
            SendEnabled: {
                encode(message: _23.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.SendEnabled;
                fromJSON(object: any): _23.SendEnabled;
                toJSON(message: _23.SendEnabled): unknown;
                fromPartial(object: any): _23.SendEnabled;
            };
            Input: {
                encode(message: _23.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Input;
                fromJSON(object: any): _23.Input;
                toJSON(message: _23.Input): unknown;
                fromPartial(object: any): _23.Input;
            };
            Output: {
                encode(message: _23.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Output;
                fromJSON(object: any): _23.Output;
                toJSON(message: _23.Output): unknown;
                fromPartial(object: any): _23.Output;
            };
            Supply: {
                encode(message: _23.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Supply;
                fromJSON(object: any): _23.Supply;
                toJSON(message: _23.Supply): unknown;
                fromPartial(object: any): _23.Supply;
            };
            DenomUnit: {
                encode(message: _23.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DenomUnit;
                fromJSON(object: any): _23.DenomUnit;
                toJSON(message: _23.DenomUnit): unknown;
                fromPartial(object: any): _23.DenomUnit;
            };
            Metadata: {
                encode(message: _23.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Metadata;
                fromJSON(object: any): _23.Metadata;
                toJSON(message: _23.Metadata): unknown;
                fromPartial(object: any): _23.Metadata;
            };
            SendAuthorization: {
                encode(message: _22.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.SendAuthorization;
                fromJSON(object: any): _22.SendAuthorization;
                toJSON(message: _22.SendAuthorization): unknown;
                fromPartial(object: any): _22.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _27.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TxResponse;
                    fromJSON(object: any): _27.TxResponse;
                    toJSON(message: _27.TxResponse): unknown;
                    fromPartial(object: any): _27.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _27.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.ABCIMessageLog;
                    fromJSON(object: any): _27.ABCIMessageLog;
                    toJSON(message: _27.ABCIMessageLog): unknown;
                    fromPartial(object: any): _27.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _27.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.StringEvent;
                    fromJSON(object: any): _27.StringEvent;
                    toJSON(message: _27.StringEvent): unknown;
                    fromPartial(object: any): _27.StringEvent;
                };
                Attribute: {
                    encode(message: _27.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Attribute;
                    fromJSON(object: any): _27.Attribute;
                    toJSON(message: _27.Attribute): unknown;
                    fromPartial(object: any): _27.Attribute;
                };
                GasInfo: {
                    encode(message: _27.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.GasInfo;
                    fromJSON(object: any): _27.GasInfo;
                    toJSON(message: _27.GasInfo): unknown;
                    fromPartial(object: any): _27.GasInfo;
                };
                Result: {
                    encode(message: _27.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Result;
                    fromJSON(object: any): _27.Result;
                    toJSON(message: _27.Result): unknown;
                    fromPartial(object: any): _27.Result;
                };
                SimulationResponse: {
                    encode(message: _27.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.SimulationResponse;
                    fromJSON(object: any): _27.SimulationResponse;
                    toJSON(message: _27.SimulationResponse): unknown;
                    fromPartial(object: any): _27.SimulationResponse;
                };
                MsgData: {
                    encode(message: _27.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgData;
                    fromJSON(object: any): _27.MsgData;
                    toJSON(message: _27.MsgData): unknown;
                    fromPartial(object: any): _27.MsgData;
                };
                TxMsgData: {
                    encode(message: _27.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TxMsgData;
                    fromJSON(object: any): _27.TxMsgData;
                    toJSON(message: _27.TxMsgData): unknown;
                    fromPartial(object: any): _27.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _27.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.SearchTxsResult;
                    fromJSON(object: any): _27.SearchTxsResult;
                    toJSON(message: _27.SearchTxsResult): unknown;
                    fromPartial(object: any): _27.SearchTxsResult;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _28.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.PageRequest;
                    fromJSON(object: any): _28.PageRequest;
                    toJSON(message: _28.PageRequest): unknown;
                    fromPartial(object: any): _28.PageRequest;
                };
                PageResponse: {
                    encode(message: _28.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.PageResponse;
                    fromJSON(object: any): _28.PageResponse;
                    toJSON(message: _28.PageResponse): unknown;
                    fromPartial(object: any): _28.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _29.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.AppDescriptor;
                    fromJSON(object: any): _29.AppDescriptor;
                    toJSON(message: _29.AppDescriptor): unknown;
                    fromPartial(object: any): _29.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _29.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.TxDescriptor;
                    fromJSON(object: any): _29.TxDescriptor;
                    toJSON(message: _29.TxDescriptor): unknown;
                    fromPartial(object: any): _29.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _29.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.AuthnDescriptor;
                    fromJSON(object: any): _29.AuthnDescriptor;
                    toJSON(message: _29.AuthnDescriptor): unknown;
                    fromPartial(object: any): _29.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _29.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.SigningModeDescriptor;
                    fromJSON(object: any): _29.SigningModeDescriptor;
                    toJSON(message: _29.SigningModeDescriptor): unknown;
                    fromPartial(object: any): _29.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _29.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ChainDescriptor;
                    fromJSON(object: any): _29.ChainDescriptor;
                    toJSON(message: _29.ChainDescriptor): unknown;
                    fromPartial(object: any): _29.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _29.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.CodecDescriptor;
                    fromJSON(object: any): _29.CodecDescriptor;
                    toJSON(message: _29.CodecDescriptor): unknown;
                    fromPartial(object: any): _29.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _29.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.InterfaceDescriptor;
                    fromJSON(object: any): _29.InterfaceDescriptor;
                    toJSON(message: _29.InterfaceDescriptor): unknown;
                    fromPartial(object: any): _29.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _29.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _29.InterfaceImplementerDescriptor;
                    toJSON(message: _29.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: any): _29.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _29.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _29.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _29.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: any): _29.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _29.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.ConfigurationDescriptor;
                    fromJSON(object: any): _29.ConfigurationDescriptor;
                    toJSON(message: _29.ConfigurationDescriptor): unknown;
                    fromPartial(object: any): _29.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _29.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDescriptor;
                    fromJSON(object: any): _29.MsgDescriptor;
                    toJSON(message: _29.MsgDescriptor): unknown;
                    fromPartial(object: any): _29.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _29.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _29.GetAuthnDescriptorRequest;
                    toJSON(_: _29.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: any): _29.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _29.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _29.GetAuthnDescriptorResponse;
                    toJSON(message: _29.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: any): _29.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _29.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetChainDescriptorRequest;
                    fromJSON(_: any): _29.GetChainDescriptorRequest;
                    toJSON(_: _29.GetChainDescriptorRequest): unknown;
                    fromPartial(_: any): _29.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _29.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetChainDescriptorResponse;
                    fromJSON(object: any): _29.GetChainDescriptorResponse;
                    toJSON(message: _29.GetChainDescriptorResponse): unknown;
                    fromPartial(object: any): _29.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _29.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetCodecDescriptorRequest;
                    fromJSON(_: any): _29.GetCodecDescriptorRequest;
                    toJSON(_: _29.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: any): _29.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _29.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetCodecDescriptorResponse;
                    fromJSON(object: any): _29.GetCodecDescriptorResponse;
                    toJSON(message: _29.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: any): _29.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _29.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _29.GetConfigurationDescriptorRequest;
                    toJSON(_: _29.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: any): _29.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _29.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _29.GetConfigurationDescriptorResponse;
                    toJSON(message: _29.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: any): _29.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _29.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _29.GetQueryServicesDescriptorRequest;
                    toJSON(_: _29.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: any): _29.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _29.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _29.GetQueryServicesDescriptorResponse;
                    toJSON(message: _29.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: any): _29.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _29.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetTxDescriptorRequest;
                    fromJSON(_: any): _29.GetTxDescriptorRequest;
                    toJSON(_: _29.GetTxDescriptorRequest): unknown;
                    fromPartial(_: any): _29.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _29.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GetTxDescriptorResponse;
                    fromJSON(object: any): _29.GetTxDescriptorResponse;
                    toJSON(message: _29.GetTxDescriptorResponse): unknown;
                    fromPartial(object: any): _29.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _29.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryServicesDescriptor;
                    fromJSON(object: any): _29.QueryServicesDescriptor;
                    toJSON(message: _29.QueryServicesDescriptor): unknown;
                    fromPartial(object: any): _29.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _29.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryServiceDescriptor;
                    fromJSON(object: any): _29.QueryServiceDescriptor;
                    toJSON(message: _29.QueryServiceDescriptor): unknown;
                    fromPartial(object: any): _29.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _29.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.QueryMethodDescriptor;
                    fromJSON(object: any): _29.QueryMethodDescriptor;
                    toJSON(message: _29.QueryMethodDescriptor): unknown;
                    fromPartial(object: any): _29.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _30.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Coin;
                fromJSON(object: any): _30.Coin;
                toJSON(message: _30.Coin): unknown;
                fromPartial(object: any): _30.Coin;
            };
            DecCoin: {
                encode(message: _30.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.DecCoin;
                fromJSON(object: any): _30.DecCoin;
                toJSON(message: _30.DecCoin): unknown;
                fromPartial(object: any): _30.DecCoin;
            };
            IntProto: {
                encode(message: _30.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.IntProto;
                fromJSON(object: any): _30.IntProto;
                toJSON(message: _30.IntProto): unknown;
                fromPartial(object: any): _30.IntProto;
            };
            DecProto: {
                encode(message: _30.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.DecProto;
                fromJSON(object: any): _30.DecProto;
                toJSON(message: _30.DecProto): unknown;
                fromPartial(object: any): _30.DecProto;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _31.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PubKey;
                fromJSON(object: any): _31.PubKey;
                toJSON(message: _31.PubKey): unknown;
                fromPartial(object: any): _31.PubKey;
            };
            PrivKey: {
                encode(message: _31.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PrivKey;
                fromJSON(object: any): _31.PrivKey;
                toJSON(message: _31.PrivKey): unknown;
                fromPartial(object: any): _31.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _32.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.BIP44Params;
                    fromJSON(object: any): _32.BIP44Params;
                    toJSON(message: _32.BIP44Params): unknown;
                    fromPartial(object: any): _32.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _33.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record;
                    fromJSON(object: any): _33.Record;
                    toJSON(message: _33.Record): unknown;
                    fromPartial(object: any): _33.Record;
                };
                Record_Local: {
                    encode(message: _33.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Local;
                    fromJSON(object: any): _33.Record_Local;
                    toJSON(message: _33.Record_Local): unknown;
                    fromPartial(object: any): _33.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _33.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Ledger;
                    fromJSON(object: any): _33.Record_Ledger;
                    toJSON(message: _33.Record_Ledger): unknown;
                    fromPartial(object: any): _33.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _33.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Multi;
                    fromJSON(_: any): _33.Record_Multi;
                    toJSON(_: _33.Record_Multi): unknown;
                    fromPartial(_: any): _33.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _33.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Record_Offline;
                    fromJSON(_: any): _33.Record_Offline;
                    toJSON(_: _33.Record_Offline): unknown;
                    fromPartial(_: any): _33.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _34.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.LegacyAminoPubKey;
                fromJSON(object: any): _34.LegacyAminoPubKey;
                toJSON(message: _34.LegacyAminoPubKey): unknown;
                fromPartial(object: any): _34.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _35.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.PubKey;
                fromJSON(object: any): _35.PubKey;
                toJSON(message: _35.PubKey): unknown;
                fromPartial(object: any): _35.PubKey;
            };
            PrivKey: {
                encode(message: _35.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.PrivKey;
                fromJSON(object: any): _35.PrivKey;
                toJSON(message: _35.PrivKey): unknown;
                fromPartial(object: any): _35.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _36.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PubKey;
                fromJSON(object: any): _36.PubKey;
                toJSON(message: _36.PubKey): unknown;
                fromPartial(object: any): _36.PubKey;
            };
            PrivKey: {
                encode(message: _36.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PrivKey;
                fromJSON(object: any): _36.PrivKey;
                toJSON(message: _36.PrivKey): unknown;
                fromPartial(object: any): _36.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _135.MsgClientImpl;
            QueryClientImpl: typeof _127.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                validatorOutstandingRewards(request: _39.QueryValidatorOutstandingRewardsRequest): Promise<_39.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _39.QueryValidatorCommissionRequest): Promise<_39.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _39.QueryValidatorSlashesRequest): Promise<_39.QueryValidatorSlashesResponse>;
                delegationRewards(request: _39.QueryDelegationRewardsRequest): Promise<_39.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _39.QueryDelegationTotalRewardsRequest): Promise<_39.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _39.QueryDelegatorValidatorsRequest): Promise<_39.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _39.QueryDelegatorWithdrawAddressRequest): Promise<_39.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _39.QueryCommunityPoolRequest): Promise<_39.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _40.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _40.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _40.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _40.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _40.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _40.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _40.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _40.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _40.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _40.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _40.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _40.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _40.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _40.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _40.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _40.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _40.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _40.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _40.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _40.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _40.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _40.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _40.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _40.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _40.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _40.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _40.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _40.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _40.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _40.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _40.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _40.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _40.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _40.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _40.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _40.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _40.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSetWithdrawAddress;
                fromJSON(object: any): _40.MsgSetWithdrawAddress;
                toJSON(message: _40.MsgSetWithdrawAddress): unknown;
                fromPartial(object: any): _40.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _40.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _40.MsgSetWithdrawAddressResponse;
                toJSON(_: _40.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: any): _40.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _40.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _40.MsgWithdrawDelegatorReward;
                toJSON(message: _40.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: any): _40.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _40.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _40.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _40.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: any): _40.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _40.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _40.MsgWithdrawValidatorCommission;
                toJSON(message: _40.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: any): _40.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _40.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _40.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _40.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: any): _40.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _40.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgFundCommunityPool;
                fromJSON(object: any): _40.MsgFundCommunityPool;
                toJSON(message: _40.MsgFundCommunityPool): unknown;
                fromPartial(object: any): _40.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _40.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _40.MsgFundCommunityPoolResponse;
                toJSON(_: _40.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: any): _40.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _39.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryParamsRequest;
                fromJSON(_: any): _39.QueryParamsRequest;
                toJSON(_: _39.QueryParamsRequest): unknown;
                fromPartial(_: any): _39.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _39.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryParamsResponse;
                fromJSON(object: any): _39.QueryParamsResponse;
                toJSON(message: _39.QueryParamsResponse): unknown;
                fromPartial(object: any): _39.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _39.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _39.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _39.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: any): _39.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _39.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _39.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _39.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: any): _39.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _39.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorCommissionRequest;
                fromJSON(object: any): _39.QueryValidatorCommissionRequest;
                toJSON(message: _39.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: any): _39.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _39.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorCommissionResponse;
                fromJSON(object: any): _39.QueryValidatorCommissionResponse;
                toJSON(message: _39.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: any): _39.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _39.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorSlashesRequest;
                fromJSON(object: any): _39.QueryValidatorSlashesRequest;
                toJSON(message: _39.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: any): _39.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _39.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryValidatorSlashesResponse;
                fromJSON(object: any): _39.QueryValidatorSlashesResponse;
                toJSON(message: _39.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: any): _39.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _39.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationRewardsRequest;
                fromJSON(object: any): _39.QueryDelegationRewardsRequest;
                toJSON(message: _39.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: any): _39.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _39.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationRewardsResponse;
                fromJSON(object: any): _39.QueryDelegationRewardsResponse;
                toJSON(message: _39.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: any): _39.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _39.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _39.QueryDelegationTotalRewardsRequest;
                toJSON(message: _39.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: any): _39.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _39.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _39.QueryDelegationTotalRewardsResponse;
                toJSON(message: _39.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: any): _39.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _39.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _39.QueryDelegatorValidatorsRequest;
                toJSON(message: _39.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: any): _39.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _39.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _39.QueryDelegatorValidatorsResponse;
                toJSON(message: _39.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: any): _39.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _39.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _39.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _39.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: any): _39.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _39.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _39.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _39.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: any): _39.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _39.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryCommunityPoolRequest;
                fromJSON(_: any): _39.QueryCommunityPoolRequest;
                toJSON(_: _39.QueryCommunityPoolRequest): unknown;
                fromPartial(_: any): _39.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _39.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryCommunityPoolResponse;
                fromJSON(object: any): _39.QueryCommunityPoolResponse;
                toJSON(message: _39.QueryCommunityPoolResponse): unknown;
                fromPartial(object: any): _39.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _38.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegatorWithdrawInfo;
                fromJSON(object: any): _38.DelegatorWithdrawInfo;
                toJSON(message: _38.DelegatorWithdrawInfo): unknown;
                fromPartial(object: any): _38.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _38.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _38.ValidatorOutstandingRewardsRecord;
                toJSON(message: _38.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: any): _38.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _38.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _38.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _38.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: any): _38.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _38.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _38.ValidatorHistoricalRewardsRecord;
                toJSON(message: _38.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: any): _38.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _38.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _38.ValidatorCurrentRewardsRecord;
                toJSON(message: _38.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: any): _38.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _38.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.DelegatorStartingInfoRecord;
                fromJSON(object: any): _38.DelegatorStartingInfoRecord;
                toJSON(message: _38.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: any): _38.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _38.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ValidatorSlashEventRecord;
                fromJSON(object: any): _38.ValidatorSlashEventRecord;
                toJSON(message: _38.ValidatorSlashEventRecord): unknown;
                fromPartial(object: any): _38.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _38.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.GenesisState;
                fromJSON(object: any): _38.GenesisState;
                toJSON(message: _38.GenesisState): unknown;
                fromPartial(object: any): _38.GenesisState;
            };
            Params: {
                encode(message: _37.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Params;
                fromJSON(object: any): _37.Params;
                toJSON(message: _37.Params): unknown;
                fromPartial(object: any): _37.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _37.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorHistoricalRewards;
                fromJSON(object: any): _37.ValidatorHistoricalRewards;
                toJSON(message: _37.ValidatorHistoricalRewards): unknown;
                fromPartial(object: any): _37.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _37.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorCurrentRewards;
                fromJSON(object: any): _37.ValidatorCurrentRewards;
                toJSON(message: _37.ValidatorCurrentRewards): unknown;
                fromPartial(object: any): _37.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _37.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorAccumulatedCommission;
                fromJSON(object: any): _37.ValidatorAccumulatedCommission;
                toJSON(message: _37.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: any): _37.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _37.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorOutstandingRewards;
                fromJSON(object: any): _37.ValidatorOutstandingRewards;
                toJSON(message: _37.ValidatorOutstandingRewards): unknown;
                fromPartial(object: any): _37.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _37.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorSlashEvent;
                fromJSON(object: any): _37.ValidatorSlashEvent;
                toJSON(message: _37.ValidatorSlashEvent): unknown;
                fromPartial(object: any): _37.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _37.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValidatorSlashEvents;
                fromJSON(object: any): _37.ValidatorSlashEvents;
                toJSON(message: _37.ValidatorSlashEvents): unknown;
                fromPartial(object: any): _37.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _37.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.FeePool;
                fromJSON(object: any): _37.FeePool;
                toJSON(message: _37.FeePool): unknown;
                fromPartial(object: any): _37.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _37.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.CommunityPoolSpendProposal;
                fromJSON(object: any): _37.CommunityPoolSpendProposal;
                toJSON(message: _37.CommunityPoolSpendProposal): unknown;
                fromPartial(object: any): _37.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _37.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DelegatorStartingInfo;
                fromJSON(object: any): _37.DelegatorStartingInfo;
                toJSON(message: _37.DelegatorStartingInfo): unknown;
                fromPartial(object: any): _37.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _37.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DelegationDelegatorReward;
                fromJSON(object: any): _37.DelegationDelegatorReward;
                toJSON(message: _37.DelegationDelegatorReward): unknown;
                fromPartial(object: any): _37.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _37.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _37.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _37.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: any): _37.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _136.MsgClientImpl;
            QueryClientImpl: typeof _128.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _43.QueryProposalRequest): Promise<_43.QueryProposalResponse>;
                proposals(request: _43.QueryProposalsRequest): Promise<_43.QueryProposalsResponse>;
                vote(request: _43.QueryVoteRequest): Promise<_43.QueryVoteResponse>;
                votes(request: _43.QueryVotesRequest): Promise<_43.QueryVotesResponse>;
                params(request: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                deposit(request: _43.QueryDepositRequest): Promise<_43.QueryDepositResponse>;
                deposits(request: _43.QueryDepositsRequest): Promise<_43.QueryDepositsResponse>;
                tallyResult(request: _43.QueryTallyResultRequest): Promise<_43.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _44.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _44.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _44.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _44.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _44.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _44.MsgSubmitProposal;
                    };
                    vote(value: _44.MsgVote): {
                        typeUrl: string;
                        value: _44.MsgVote;
                    };
                    voteWeighted(value: _44.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _44.MsgVoteWeighted;
                    };
                    deposit(value: _44.MsgDeposit): {
                        typeUrl: string;
                        value: _44.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _44.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _44.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _44.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _44.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _44.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _44.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _44.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _44.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _44.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _44.MsgSubmitProposal;
                    };
                    vote(value: _44.MsgVote): {
                        typeUrl: string;
                        value: _44.MsgVote;
                    };
                    voteWeighted(value: _44.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _44.MsgVoteWeighted;
                    };
                    deposit(value: _44.MsgDeposit): {
                        typeUrl: string;
                        value: _44.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _44.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _44.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _44.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _44.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _44.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _44.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _44.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _44.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _44.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSubmitProposal;
                fromJSON(object: any): _44.MsgSubmitProposal;
                toJSON(message: _44.MsgSubmitProposal): unknown;
                fromPartial(object: any): _44.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _44.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgSubmitProposalResponse;
                fromJSON(object: any): _44.MsgSubmitProposalResponse;
                toJSON(message: _44.MsgSubmitProposalResponse): unknown;
                fromPartial(object: any): _44.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _44.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgVote;
                fromJSON(object: any): _44.MsgVote;
                toJSON(message: _44.MsgVote): unknown;
                fromPartial(object: any): _44.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _44.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgVoteResponse;
                fromJSON(_: any): _44.MsgVoteResponse;
                toJSON(_: _44.MsgVoteResponse): unknown;
                fromPartial(_: any): _44.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _44.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgVoteWeighted;
                fromJSON(object: any): _44.MsgVoteWeighted;
                toJSON(message: _44.MsgVoteWeighted): unknown;
                fromPartial(object: any): _44.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _44.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgVoteWeightedResponse;
                fromJSON(_: any): _44.MsgVoteWeightedResponse;
                toJSON(_: _44.MsgVoteWeightedResponse): unknown;
                fromPartial(_: any): _44.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _44.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgDeposit;
                fromJSON(object: any): _44.MsgDeposit;
                toJSON(message: _44.MsgDeposit): unknown;
                fromPartial(object: any): _44.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _44.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.MsgDepositResponse;
                fromJSON(_: any): _44.MsgDepositResponse;
                toJSON(_: _44.MsgDepositResponse): unknown;
                fromPartial(_: any): _44.MsgDepositResponse;
            };
            Content_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any | _42.TextProposal;
            QueryProposalRequest: {
                encode(message: _43.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryProposalRequest;
                fromJSON(object: any): _43.QueryProposalRequest;
                toJSON(message: _43.QueryProposalRequest): unknown;
                fromPartial(object: any): _43.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _43.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryProposalResponse;
                fromJSON(object: any): _43.QueryProposalResponse;
                toJSON(message: _43.QueryProposalResponse): unknown;
                fromPartial(object: any): _43.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _43.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryProposalsRequest;
                fromJSON(object: any): _43.QueryProposalsRequest;
                toJSON(message: _43.QueryProposalsRequest): unknown;
                fromPartial(object: any): _43.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _43.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryProposalsResponse;
                fromJSON(object: any): _43.QueryProposalsResponse;
                toJSON(message: _43.QueryProposalsResponse): unknown;
                fromPartial(object: any): _43.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _43.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryVoteRequest;
                fromJSON(object: any): _43.QueryVoteRequest;
                toJSON(message: _43.QueryVoteRequest): unknown;
                fromPartial(object: any): _43.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _43.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryVoteResponse;
                fromJSON(object: any): _43.QueryVoteResponse;
                toJSON(message: _43.QueryVoteResponse): unknown;
                fromPartial(object: any): _43.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _43.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryVotesRequest;
                fromJSON(object: any): _43.QueryVotesRequest;
                toJSON(message: _43.QueryVotesRequest): unknown;
                fromPartial(object: any): _43.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _43.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryVotesResponse;
                fromJSON(object: any): _43.QueryVotesResponse;
                toJSON(message: _43.QueryVotesResponse): unknown;
                fromPartial(object: any): _43.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _43.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsRequest;
                fromJSON(object: any): _43.QueryParamsRequest;
                toJSON(message: _43.QueryParamsRequest): unknown;
                fromPartial(object: any): _43.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _43.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryParamsResponse;
                fromJSON(object: any): _43.QueryParamsResponse;
                toJSON(message: _43.QueryParamsResponse): unknown;
                fromPartial(object: any): _43.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _43.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDepositRequest;
                fromJSON(object: any): _43.QueryDepositRequest;
                toJSON(message: _43.QueryDepositRequest): unknown;
                fromPartial(object: any): _43.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _43.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDepositResponse;
                fromJSON(object: any): _43.QueryDepositResponse;
                toJSON(message: _43.QueryDepositResponse): unknown;
                fromPartial(object: any): _43.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _43.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDepositsRequest;
                fromJSON(object: any): _43.QueryDepositsRequest;
                toJSON(message: _43.QueryDepositsRequest): unknown;
                fromPartial(object: any): _43.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _43.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryDepositsResponse;
                fromJSON(object: any): _43.QueryDepositsResponse;
                toJSON(message: _43.QueryDepositsResponse): unknown;
                fromPartial(object: any): _43.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _43.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryTallyResultRequest;
                fromJSON(object: any): _43.QueryTallyResultRequest;
                toJSON(message: _43.QueryTallyResultRequest): unknown;
                fromPartial(object: any): _43.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _43.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryTallyResultResponse;
                fromJSON(object: any): _43.QueryTallyResultResponse;
                toJSON(message: _43.QueryTallyResultResponse): unknown;
                fromPartial(object: any): _43.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _42.VoteOption;
            voteOptionToJSON(object: _42.VoteOption): string;
            proposalStatusFromJSON(object: any): _42.ProposalStatus;
            proposalStatusToJSON(object: _42.ProposalStatus): string;
            VoteOption: typeof _42.VoteOption;
            ProposalStatus: typeof _42.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _42.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.WeightedVoteOption;
                fromJSON(object: any): _42.WeightedVoteOption;
                toJSON(message: _42.WeightedVoteOption): unknown;
                fromPartial(object: any): _42.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _42.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.TextProposal;
                fromJSON(object: any): _42.TextProposal;
                toJSON(message: _42.TextProposal): unknown;
                fromPartial(object: any): _42.TextProposal;
            };
            Deposit: {
                encode(message: _42.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Deposit;
                fromJSON(object: any): _42.Deposit;
                toJSON(message: _42.Deposit): unknown;
                fromPartial(object: any): _42.Deposit;
            };
            Proposal: {
                encode(message: _42.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Proposal;
                fromJSON(object: any): _42.Proposal;
                toJSON(message: _42.Proposal): unknown;
                fromPartial(object: any): _42.Proposal;
            };
            TallyResult: {
                encode(message: _42.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.TallyResult;
                fromJSON(object: any): _42.TallyResult;
                toJSON(message: _42.TallyResult): unknown;
                fromPartial(object: any): _42.TallyResult;
            };
            Vote: {
                encode(message: _42.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Vote;
                fromJSON(object: any): _42.Vote;
                toJSON(message: _42.Vote): unknown;
                fromPartial(object: any): _42.Vote;
            };
            DepositParams: {
                encode(message: _42.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.DepositParams;
                fromJSON(object: any): _42.DepositParams;
                toJSON(message: _42.DepositParams): unknown;
                fromPartial(object: any): _42.DepositParams;
            };
            VotingParams: {
                encode(message: _42.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.VotingParams;
                fromJSON(object: any): _42.VotingParams;
                toJSON(message: _42.VotingParams): unknown;
                fromPartial(object: any): _42.VotingParams;
            };
            TallyParams: {
                encode(message: _42.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.TallyParams;
                fromJSON(object: any): _42.TallyParams;
                toJSON(message: _42.TallyParams): unknown;
                fromPartial(object: any): _42.TallyParams;
            };
            GenesisState: {
                encode(message: _41.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GenesisState;
                fromJSON(object: any): _41.GenesisState;
                toJSON(message: _41.GenesisState): unknown;
                fromPartial(object: any): _41.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _129.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _46.QueryParamsRequest): Promise<_46.QueryParamsResponse>;
                subspaces(request?: _46.QuerySubspacesRequest): Promise<_46.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _46.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryParamsRequest;
                fromJSON(object: any): _46.QueryParamsRequest;
                toJSON(message: _46.QueryParamsRequest): unknown;
                fromPartial(object: any): _46.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _46.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryParamsResponse;
                fromJSON(object: any): _46.QueryParamsResponse;
                toJSON(message: _46.QueryParamsResponse): unknown;
                fromPartial(object: any): _46.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _46.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QuerySubspacesRequest;
                fromJSON(_: any): _46.QuerySubspacesRequest;
                toJSON(_: _46.QuerySubspacesRequest): unknown;
                fromPartial(_: any): _46.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _46.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QuerySubspacesResponse;
                fromJSON(object: any): _46.QuerySubspacesResponse;
                toJSON(message: _46.QuerySubspacesResponse): unknown;
                fromPartial(object: any): _46.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _46.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Subspace;
                fromJSON(object: any): _46.Subspace;
                toJSON(message: _46.Subspace): unknown;
                fromPartial(object: any): _46.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _45.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ParameterChangeProposal;
                fromJSON(object: any): _45.ParameterChangeProposal;
                toJSON(message: _45.ParameterChangeProposal): unknown;
                fromPartial(object: any): _45.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _45.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.ParamChange;
                fromJSON(object: any): _45.ParamChange;
                toJSON(message: _45.ParamChange): unknown;
                fromPartial(object: any): _45.ParamChange;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _137.MsgClientImpl;
            QueryClientImpl: typeof _130.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _49.QueryValidatorsRequest): Promise<_49.QueryValidatorsResponse>;
                validator(request: _49.QueryValidatorRequest): Promise<_49.QueryValidatorResponse>;
                validatorDelegations(request: _49.QueryValidatorDelegationsRequest): Promise<_49.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _49.QueryValidatorUnbondingDelegationsRequest): Promise<_49.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _49.QueryDelegationRequest): Promise<_49.QueryDelegationResponse>;
                unbondingDelegation(request: _49.QueryUnbondingDelegationRequest): Promise<_49.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _49.QueryDelegatorDelegationsRequest): Promise<_49.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _49.QueryDelegatorUnbondingDelegationsRequest): Promise<_49.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _49.QueryRedelegationsRequest): Promise<_49.QueryRedelegationsResponse>;
                delegatorValidators(request: _49.QueryDelegatorValidatorsRequest): Promise<_49.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _49.QueryDelegatorValidatorRequest): Promise<_49.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _49.QueryHistoricalInfoRequest): Promise<_49.QueryHistoricalInfoResponse>;
                pool(request?: _49.QueryPoolRequest): Promise<_49.QueryPoolResponse>;
                params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _51.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _51.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _51.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _51.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _51.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _51.MsgCreateValidator): {
                        typeUrl: string;
                        value: _51.MsgCreateValidator;
                    };
                    editValidator(value: _51.MsgEditValidator): {
                        typeUrl: string;
                        value: _51.MsgEditValidator;
                    };
                    delegate(value: _51.MsgDelegate): {
                        typeUrl: string;
                        value: _51.MsgDelegate;
                    };
                    beginRedelegate(value: _51.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _51.MsgBeginRedelegate;
                    };
                    undelegate(value: _51.MsgUndelegate): {
                        typeUrl: string;
                        value: _51.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _51.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _51.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _51.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _51.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _51.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _51.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _51.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _51.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _51.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _51.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _51.MsgCreateValidator): {
                        typeUrl: string;
                        value: _51.MsgCreateValidator;
                    };
                    editValidator(value: _51.MsgEditValidator): {
                        typeUrl: string;
                        value: _51.MsgEditValidator;
                    };
                    delegate(value: _51.MsgDelegate): {
                        typeUrl: string;
                        value: _51.MsgDelegate;
                    };
                    beginRedelegate(value: _51.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _51.MsgBeginRedelegate;
                    };
                    undelegate(value: _51.MsgUndelegate): {
                        typeUrl: string;
                        value: _51.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _51.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _51.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _51.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _51.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _51.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _51.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _51.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _51.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _51.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _51.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _51.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgCreateValidator;
                fromJSON(object: any): _51.MsgCreateValidator;
                toJSON(message: _51.MsgCreateValidator): unknown;
                fromPartial(object: any): _51.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _51.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgCreateValidatorResponse;
                fromJSON(_: any): _51.MsgCreateValidatorResponse;
                toJSON(_: _51.MsgCreateValidatorResponse): unknown;
                fromPartial(_: any): _51.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _51.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgEditValidator;
                fromJSON(object: any): _51.MsgEditValidator;
                toJSON(message: _51.MsgEditValidator): unknown;
                fromPartial(object: any): _51.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _51.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgEditValidatorResponse;
                fromJSON(_: any): _51.MsgEditValidatorResponse;
                toJSON(_: _51.MsgEditValidatorResponse): unknown;
                fromPartial(_: any): _51.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _51.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgDelegate;
                fromJSON(object: any): _51.MsgDelegate;
                toJSON(message: _51.MsgDelegate): unknown;
                fromPartial(object: any): _51.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _51.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgDelegateResponse;
                fromJSON(_: any): _51.MsgDelegateResponse;
                toJSON(_: _51.MsgDelegateResponse): unknown;
                fromPartial(_: any): _51.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _51.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgBeginRedelegate;
                fromJSON(object: any): _51.MsgBeginRedelegate;
                toJSON(message: _51.MsgBeginRedelegate): unknown;
                fromPartial(object: any): _51.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _51.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgBeginRedelegateResponse;
                fromJSON(object: any): _51.MsgBeginRedelegateResponse;
                toJSON(message: _51.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: any): _51.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _51.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgUndelegate;
                fromJSON(object: any): _51.MsgUndelegate;
                toJSON(message: _51.MsgUndelegate): unknown;
                fromPartial(object: any): _51.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _51.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.MsgUndelegateResponse;
                fromJSON(object: any): _51.MsgUndelegateResponse;
                toJSON(message: _51.MsgUndelegateResponse): unknown;
                fromPartial(object: any): _51.MsgUndelegateResponse;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            bondStatusFromJSON(object: any): _50.BondStatus;
            bondStatusToJSON(object: _50.BondStatus): string;
            BondStatus: typeof _50.BondStatus;
            HistoricalInfo: {
                encode(message: _50.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.HistoricalInfo;
                fromJSON(object: any): _50.HistoricalInfo;
                toJSON(message: _50.HistoricalInfo): unknown;
                fromPartial(object: any): _50.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _50.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.CommissionRates;
                fromJSON(object: any): _50.CommissionRates;
                toJSON(message: _50.CommissionRates): unknown;
                fromPartial(object: any): _50.CommissionRates;
            };
            Commission: {
                encode(message: _50.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Commission;
                fromJSON(object: any): _50.Commission;
                toJSON(message: _50.Commission): unknown;
                fromPartial(object: any): _50.Commission;
            };
            Description: {
                encode(message: _50.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Description;
                fromJSON(object: any): _50.Description;
                toJSON(message: _50.Description): unknown;
                fromPartial(object: any): _50.Description;
            };
            Validator: {
                encode(message: _50.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Validator;
                fromJSON(object: any): _50.Validator;
                toJSON(message: _50.Validator): unknown;
                fromPartial(object: any): _50.Validator;
            };
            ValAddresses: {
                encode(message: _50.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.ValAddresses;
                fromJSON(object: any): _50.ValAddresses;
                toJSON(message: _50.ValAddresses): unknown;
                fromPartial(object: any): _50.ValAddresses;
            };
            DVPair: {
                encode(message: _50.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.DVPair;
                fromJSON(object: any): _50.DVPair;
                toJSON(message: _50.DVPair): unknown;
                fromPartial(object: any): _50.DVPair;
            };
            DVPairs: {
                encode(message: _50.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.DVPairs;
                fromJSON(object: any): _50.DVPairs;
                toJSON(message: _50.DVPairs): unknown;
                fromPartial(object: any): _50.DVPairs;
            };
            DVVTriplet: {
                encode(message: _50.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.DVVTriplet;
                fromJSON(object: any): _50.DVVTriplet;
                toJSON(message: _50.DVVTriplet): unknown;
                fromPartial(object: any): _50.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _50.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.DVVTriplets;
                fromJSON(object: any): _50.DVVTriplets;
                toJSON(message: _50.DVVTriplets): unknown;
                fromPartial(object: any): _50.DVVTriplets;
            };
            Delegation: {
                encode(message: _50.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Delegation;
                fromJSON(object: any): _50.Delegation;
                toJSON(message: _50.Delegation): unknown;
                fromPartial(object: any): _50.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _50.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.UnbondingDelegation;
                fromJSON(object: any): _50.UnbondingDelegation;
                toJSON(message: _50.UnbondingDelegation): unknown;
                fromPartial(object: any): _50.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _50.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.UnbondingDelegationEntry;
                fromJSON(object: any): _50.UnbondingDelegationEntry;
                toJSON(message: _50.UnbondingDelegationEntry): unknown;
                fromPartial(object: any): _50.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _50.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.RedelegationEntry;
                fromJSON(object: any): _50.RedelegationEntry;
                toJSON(message: _50.RedelegationEntry): unknown;
                fromPartial(object: any): _50.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _50.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Redelegation;
                fromJSON(object: any): _50.Redelegation;
                toJSON(message: _50.Redelegation): unknown;
                fromPartial(object: any): _50.Redelegation;
            };
            Params: {
                encode(message: _50.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Params;
                fromJSON(object: any): _50.Params;
                toJSON(message: _50.Params): unknown;
                fromPartial(object: any): _50.Params;
            };
            DelegationResponse: {
                encode(message: _50.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.DelegationResponse;
                fromJSON(object: any): _50.DelegationResponse;
                toJSON(message: _50.DelegationResponse): unknown;
                fromPartial(object: any): _50.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _50.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.RedelegationEntryResponse;
                fromJSON(object: any): _50.RedelegationEntryResponse;
                toJSON(message: _50.RedelegationEntryResponse): unknown;
                fromPartial(object: any): _50.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _50.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.RedelegationResponse;
                fromJSON(object: any): _50.RedelegationResponse;
                toJSON(message: _50.RedelegationResponse): unknown;
                fromPartial(object: any): _50.RedelegationResponse;
            };
            Pool: {
                encode(message: _50.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Pool;
                fromJSON(object: any): _50.Pool;
                toJSON(message: _50.Pool): unknown;
                fromPartial(object: any): _50.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _49.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorsRequest;
                fromJSON(object: any): _49.QueryValidatorsRequest;
                toJSON(message: _49.QueryValidatorsRequest): unknown;
                fromPartial(object: any): _49.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _49.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorsResponse;
                fromJSON(object: any): _49.QueryValidatorsResponse;
                toJSON(message: _49.QueryValidatorsResponse): unknown;
                fromPartial(object: any): _49.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _49.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorRequest;
                fromJSON(object: any): _49.QueryValidatorRequest;
                toJSON(message: _49.QueryValidatorRequest): unknown;
                fromPartial(object: any): _49.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _49.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorResponse;
                fromJSON(object: any): _49.QueryValidatorResponse;
                toJSON(message: _49.QueryValidatorResponse): unknown;
                fromPartial(object: any): _49.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _49.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _49.QueryValidatorDelegationsRequest;
                toJSON(message: _49.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: any): _49.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _49.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _49.QueryValidatorDelegationsResponse;
                toJSON(message: _49.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: any): _49.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _49.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _49.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _49.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: any): _49.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _49.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _49.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _49.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: any): _49.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _49.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegationRequest;
                fromJSON(object: any): _49.QueryDelegationRequest;
                toJSON(message: _49.QueryDelegationRequest): unknown;
                fromPartial(object: any): _49.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _49.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegationResponse;
                fromJSON(object: any): _49.QueryDelegationResponse;
                toJSON(message: _49.QueryDelegationResponse): unknown;
                fromPartial(object: any): _49.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _49.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _49.QueryUnbondingDelegationRequest;
                toJSON(message: _49.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: any): _49.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _49.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _49.QueryUnbondingDelegationResponse;
                toJSON(message: _49.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: any): _49.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _49.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _49.QueryDelegatorDelegationsRequest;
                toJSON(message: _49.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: any): _49.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _49.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _49.QueryDelegatorDelegationsResponse;
                toJSON(message: _49.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: any): _49.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _49.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _49.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _49.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: any): _49.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _49.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _49.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _49.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: any): _49.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _49.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryRedelegationsRequest;
                fromJSON(object: any): _49.QueryRedelegationsRequest;
                toJSON(message: _49.QueryRedelegationsRequest): unknown;
                fromPartial(object: any): _49.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _49.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryRedelegationsResponse;
                fromJSON(object: any): _49.QueryRedelegationsResponse;
                toJSON(message: _49.QueryRedelegationsResponse): unknown;
                fromPartial(object: any): _49.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _49.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _49.QueryDelegatorValidatorsRequest;
                toJSON(message: _49.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: any): _49.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _49.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _49.QueryDelegatorValidatorsResponse;
                toJSON(message: _49.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: any): _49.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _49.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _49.QueryDelegatorValidatorRequest;
                toJSON(message: _49.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: any): _49.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _49.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _49.QueryDelegatorValidatorResponse;
                toJSON(message: _49.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: any): _49.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _49.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryHistoricalInfoRequest;
                fromJSON(object: any): _49.QueryHistoricalInfoRequest;
                toJSON(message: _49.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: any): _49.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _49.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryHistoricalInfoResponse;
                fromJSON(object: any): _49.QueryHistoricalInfoResponse;
                toJSON(message: _49.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: any): _49.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _49.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryPoolRequest;
                fromJSON(_: any): _49.QueryPoolRequest;
                toJSON(_: _49.QueryPoolRequest): unknown;
                fromPartial(_: any): _49.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _49.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryPoolResponse;
                fromJSON(object: any): _49.QueryPoolResponse;
                toJSON(message: _49.QueryPoolResponse): unknown;
                fromPartial(object: any): _49.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _49.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryParamsRequest;
                fromJSON(_: any): _49.QueryParamsRequest;
                toJSON(_: _49.QueryParamsRequest): unknown;
                fromPartial(_: any): _49.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _49.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryParamsResponse;
                fromJSON(object: any): _49.QueryParamsResponse;
                toJSON(message: _49.QueryParamsResponse): unknown;
                fromPartial(object: any): _49.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _48.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.GenesisState;
                fromJSON(object: any): _48.GenesisState;
                toJSON(message: _48.GenesisState): unknown;
                fromPartial(object: any): _48.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _48.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.LastValidatorPower;
                fromJSON(object: any): _48.LastValidatorPower;
                toJSON(message: _48.LastValidatorPower): unknown;
                fromPartial(object: any): _48.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _47.AuthorizationType;
            authorizationTypeToJSON(object: _47.AuthorizationType): string;
            AuthorizationType: typeof _47.AuthorizationType;
            StakeAuthorization: {
                encode(message: _47.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.StakeAuthorization;
                fromJSON(object: any): _47.StakeAuthorization;
                toJSON(message: _47.StakeAuthorization): unknown;
                fromPartial(object: any): _47.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _47.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.StakeAuthorization_Validators;
                fromJSON(object: any): _47.StakeAuthorization_Validators;
                toJSON(message: _47.StakeAuthorization_Validators): unknown;
                fromPartial(object: any): _47.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _52.SignMode;
                signModeToJSON(object: _52.SignMode): string;
                SignMode: typeof _52.SignMode;
                SignatureDescriptors: {
                    encode(message: _52.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SignatureDescriptors;
                    fromJSON(object: any): _52.SignatureDescriptors;
                    toJSON(message: _52.SignatureDescriptors): unknown;
                    fromPartial(object: any): _52.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _52.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SignatureDescriptor;
                    fromJSON(object: any): _52.SignatureDescriptor;
                    toJSON(message: _52.SignatureDescriptor): unknown;
                    fromPartial(object: any): _52.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _52.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SignatureDescriptor_Data;
                    fromJSON(object: any): _52.SignatureDescriptor_Data;
                    toJSON(message: _52.SignatureDescriptor_Data): unknown;
                    fromPartial(object: any): _52.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _52.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _52.SignatureDescriptor_Data_Single;
                    toJSON(message: _52.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: any): _52.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _52.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _52.SignatureDescriptor_Data_Multi;
                    toJSON(message: _52.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: any): _52.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _131.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _53.SimulateRequest): Promise<_53.SimulateResponse>;
                getTx(request: _53.GetTxRequest): Promise<_53.GetTxResponse>;
                broadcastTx(request: _53.BroadcastTxRequest): Promise<_53.BroadcastTxResponse>;
                getTxsEvent(request: _53.GetTxsEventRequest): Promise<_53.GetTxsEventResponse>;
                getBlockWithTxs(request: _53.GetBlockWithTxsRequest): Promise<_53.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _54.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Tx;
                fromJSON(object: any): _54.Tx;
                toJSON(message: _54.Tx): unknown;
                fromPartial(object: any): _54.Tx;
            };
            TxRaw: {
                encode(message: _54.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.TxRaw;
                fromJSON(object: any): _54.TxRaw;
                toJSON(message: _54.TxRaw): unknown;
                fromPartial(object: any): _54.TxRaw;
            };
            SignDoc: {
                encode(message: _54.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.SignDoc;
                fromJSON(object: any): _54.SignDoc;
                toJSON(message: _54.SignDoc): unknown;
                fromPartial(object: any): _54.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _54.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.SignDocDirectAux;
                fromJSON(object: any): _54.SignDocDirectAux;
                toJSON(message: _54.SignDocDirectAux): unknown;
                fromPartial(object: any): _54.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _54.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.TxBody;
                fromJSON(object: any): _54.TxBody;
                toJSON(message: _54.TxBody): unknown;
                fromPartial(object: any): _54.TxBody;
            };
            AuthInfo: {
                encode(message: _54.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.AuthInfo;
                fromJSON(object: any): _54.AuthInfo;
                toJSON(message: _54.AuthInfo): unknown;
                fromPartial(object: any): _54.AuthInfo;
            };
            SignerInfo: {
                encode(message: _54.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.SignerInfo;
                fromJSON(object: any): _54.SignerInfo;
                toJSON(message: _54.SignerInfo): unknown;
                fromPartial(object: any): _54.SignerInfo;
            };
            ModeInfo: {
                encode(message: _54.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ModeInfo;
                fromJSON(object: any): _54.ModeInfo;
                toJSON(message: _54.ModeInfo): unknown;
                fromPartial(object: any): _54.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _54.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ModeInfo_Single;
                fromJSON(object: any): _54.ModeInfo_Single;
                toJSON(message: _54.ModeInfo_Single): unknown;
                fromPartial(object: any): _54.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _54.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.ModeInfo_Multi;
                fromJSON(object: any): _54.ModeInfo_Multi;
                toJSON(message: _54.ModeInfo_Multi): unknown;
                fromPartial(object: any): _54.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _54.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Fee;
                fromJSON(object: any): _54.Fee;
                toJSON(message: _54.Fee): unknown;
                fromPartial(object: any): _54.Fee;
            };
            Tip: {
                encode(message: _54.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Tip;
                fromJSON(object: any): _54.Tip;
                toJSON(message: _54.Tip): unknown;
                fromPartial(object: any): _54.Tip;
            };
            AuxSignerData: {
                encode(message: _54.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.AuxSignerData;
                fromJSON(object: any): _54.AuxSignerData;
                toJSON(message: _54.AuxSignerData): unknown;
                fromPartial(object: any): _54.AuxSignerData;
            };
            orderByFromJSON(object: any): _53.OrderBy;
            orderByToJSON(object: _53.OrderBy): string;
            broadcastModeFromJSON(object: any): _53.BroadcastMode;
            broadcastModeToJSON(object: _53.BroadcastMode): string;
            OrderBy: typeof _53.OrderBy;
            BroadcastMode: typeof _53.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _53.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GetTxsEventRequest;
                fromJSON(object: any): _53.GetTxsEventRequest;
                toJSON(message: _53.GetTxsEventRequest): unknown;
                fromPartial(object: any): _53.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _53.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GetTxsEventResponse;
                fromJSON(object: any): _53.GetTxsEventResponse;
                toJSON(message: _53.GetTxsEventResponse): unknown;
                fromPartial(object: any): _53.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _53.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.BroadcastTxRequest;
                fromJSON(object: any): _53.BroadcastTxRequest;
                toJSON(message: _53.BroadcastTxRequest): unknown;
                fromPartial(object: any): _53.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _53.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.BroadcastTxResponse;
                fromJSON(object: any): _53.BroadcastTxResponse;
                toJSON(message: _53.BroadcastTxResponse): unknown;
                fromPartial(object: any): _53.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _53.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.SimulateRequest;
                fromJSON(object: any): _53.SimulateRequest;
                toJSON(message: _53.SimulateRequest): unknown;
                fromPartial(object: any): _53.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _53.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.SimulateResponse;
                fromJSON(object: any): _53.SimulateResponse;
                toJSON(message: _53.SimulateResponse): unknown;
                fromPartial(object: any): _53.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _53.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GetTxRequest;
                fromJSON(object: any): _53.GetTxRequest;
                toJSON(message: _53.GetTxRequest): unknown;
                fromPartial(object: any): _53.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _53.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GetTxResponse;
                fromJSON(object: any): _53.GetTxResponse;
                toJSON(message: _53.GetTxResponse): unknown;
                fromPartial(object: any): _53.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _53.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GetBlockWithTxsRequest;
                fromJSON(object: any): _53.GetBlockWithTxsRequest;
                toJSON(message: _53.GetBlockWithTxsRequest): unknown;
                fromPartial(object: any): _53.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _53.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.GetBlockWithTxsResponse;
                fromJSON(object: any): _53.GetBlockWithTxsResponse;
                toJSON(message: _53.GetBlockWithTxsResponse): unknown;
                fromPartial(object: any): _53.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _138.MsgClientImpl;
            QueryClientImpl: typeof _132.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _55.QueryCurrentPlanRequest): Promise<_55.QueryCurrentPlanResponse>;
                appliedPlan(request: _55.QueryAppliedPlanRequest): Promise<_55.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _55.QueryUpgradedConsensusStateRequest): Promise<_55.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _55.QueryModuleVersionsRequest): Promise<_55.QueryModuleVersionsResponse>;
                authority(request?: _55.QueryAuthorityRequest): Promise<_55.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _56.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _56.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _56.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _56.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _56.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _56.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _56.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _56.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _56.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _56.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _56.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _56.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _56.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _56.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _56.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _56.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _56.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _56.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _57.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Plan;
                fromJSON(object: any): _57.Plan;
                toJSON(message: _57.Plan): unknown;
                fromPartial(object: any): _57.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _57.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.SoftwareUpgradeProposal;
                fromJSON(object: any): _57.SoftwareUpgradeProposal;
                toJSON(message: _57.SoftwareUpgradeProposal): unknown;
                fromPartial(object: any): _57.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _57.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _57.CancelSoftwareUpgradeProposal;
                toJSON(message: _57.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: any): _57.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _57.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ModuleVersion;
                fromJSON(object: any): _57.ModuleVersion;
                toJSON(message: _57.ModuleVersion): unknown;
                fromPartial(object: any): _57.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _56.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSoftwareUpgrade;
                fromJSON(object: any): _56.MsgSoftwareUpgrade;
                toJSON(message: _56.MsgSoftwareUpgrade): unknown;
                fromPartial(object: any): _56.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _56.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _56.MsgSoftwareUpgradeResponse;
                toJSON(_: _56.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: any): _56.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _56.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgCancelUpgrade;
                fromJSON(object: any): _56.MsgCancelUpgrade;
                toJSON(message: _56.MsgCancelUpgrade): unknown;
                fromPartial(object: any): _56.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _56.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgCancelUpgradeResponse;
                fromJSON(_: any): _56.MsgCancelUpgradeResponse;
                toJSON(_: _56.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: any): _56.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _55.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryCurrentPlanRequest;
                fromJSON(_: any): _55.QueryCurrentPlanRequest;
                toJSON(_: _55.QueryCurrentPlanRequest): unknown;
                fromPartial(_: any): _55.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _55.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryCurrentPlanResponse;
                fromJSON(object: any): _55.QueryCurrentPlanResponse;
                toJSON(message: _55.QueryCurrentPlanResponse): unknown;
                fromPartial(object: any): _55.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _55.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAppliedPlanRequest;
                fromJSON(object: any): _55.QueryAppliedPlanRequest;
                toJSON(message: _55.QueryAppliedPlanRequest): unknown;
                fromPartial(object: any): _55.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _55.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAppliedPlanResponse;
                fromJSON(object: any): _55.QueryAppliedPlanResponse;
                toJSON(message: _55.QueryAppliedPlanResponse): unknown;
                fromPartial(object: any): _55.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _55.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _55.QueryUpgradedConsensusStateRequest;
                toJSON(message: _55.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: any): _55.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _55.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _55.QueryUpgradedConsensusStateResponse;
                toJSON(message: _55.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: any): _55.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _55.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryModuleVersionsRequest;
                fromJSON(object: any): _55.QueryModuleVersionsRequest;
                toJSON(message: _55.QueryModuleVersionsRequest): unknown;
                fromPartial(object: any): _55.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _55.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryModuleVersionsResponse;
                fromJSON(object: any): _55.QueryModuleVersionsResponse;
                toJSON(message: _55.QueryModuleVersionsResponse): unknown;
                fromPartial(object: any): _55.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _55.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAuthorityRequest;
                fromJSON(_: any): _55.QueryAuthorityRequest;
                toJSON(_: _55.QueryAuthorityRequest): unknown;
                fromPartial(_: any): _55.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _55.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAuthorityResponse;
                fromJSON(object: any): _55.QueryAuthorityResponse;
                toJSON(message: _55.QueryAuthorityResponse): unknown;
                fromPartial(object: any): _55.QueryAuthorityResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _133.MsgClientImpl;
                };
                bank: {
                    v1beta1: _134.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _135.MsgClientImpl;
                };
                gov: {
                    v1beta1: _136.MsgClientImpl;
                };
                staking: {
                    v1beta1: _137.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _138.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _16.QueryAccountsRequest): Promise<_16.QueryAccountsResponse>;
                        account(request: _16.QueryAccountRequest): Promise<_16.QueryAccountResponse>;
                        params(request?: _16.QueryParamsRequest): Promise<_16.QueryParamsResponse>;
                        moduleAccounts(request?: _16.QueryModuleAccountsRequest): Promise<_16.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _16.Bech32PrefixRequest): Promise<_16.Bech32PrefixResponse>;
                        addressBytesToString(request: _16.AddressBytesToStringRequest): Promise<_16.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _16.AddressStringToBytesRequest): Promise<_16.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _20.QueryGrantsRequest): Promise<_20.QueryGrantsResponse>;
                        granterGrants(request: _20.QueryGranterGrantsRequest): Promise<_20.QueryGranterGrantsResponse>;
                        granteeGrants(request: _20.QueryGranteeGrantsRequest): Promise<_20.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _25.QueryBalanceRequest): Promise<_25.QueryBalanceResponse>;
                        allBalances(request: _25.QueryAllBalancesRequest): Promise<_25.QueryAllBalancesResponse>;
                        spendableBalances(request: _25.QuerySpendableBalancesRequest): Promise<_25.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _25.QueryTotalSupplyRequest): Promise<_25.QueryTotalSupplyResponse>;
                        supplyOf(request: _25.QuerySupplyOfRequest): Promise<_25.QuerySupplyOfResponse>;
                        params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                        denomMetadata(request: _25.QueryDenomMetadataRequest): Promise<_25.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _25.QueryDenomsMetadataRequest): Promise<_25.QueryDenomsMetadataResponse>;
                        denomOwners(request: _25.QueryDenomOwnersRequest): Promise<_25.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _39.QueryParamsRequest): Promise<_39.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _39.QueryValidatorOutstandingRewardsRequest): Promise<_39.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _39.QueryValidatorCommissionRequest): Promise<_39.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _39.QueryValidatorSlashesRequest): Promise<_39.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _39.QueryDelegationRewardsRequest): Promise<_39.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _39.QueryDelegationTotalRewardsRequest): Promise<_39.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _39.QueryDelegatorValidatorsRequest): Promise<_39.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _39.QueryDelegatorWithdrawAddressRequest): Promise<_39.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _39.QueryCommunityPoolRequest): Promise<_39.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _43.QueryProposalRequest): Promise<_43.QueryProposalResponse>;
                        proposals(request: _43.QueryProposalsRequest): Promise<_43.QueryProposalsResponse>;
                        vote(request: _43.QueryVoteRequest): Promise<_43.QueryVoteResponse>;
                        votes(request: _43.QueryVotesRequest): Promise<_43.QueryVotesResponse>;
                        params(request: _43.QueryParamsRequest): Promise<_43.QueryParamsResponse>;
                        deposit(request: _43.QueryDepositRequest): Promise<_43.QueryDepositResponse>;
                        deposits(request: _43.QueryDepositsRequest): Promise<_43.QueryDepositsResponse>;
                        tallyResult(request: _43.QueryTallyResultRequest): Promise<_43.QueryTallyResultResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _46.QueryParamsRequest): Promise<_46.QueryParamsResponse>;
                        subspaces(request?: _46.QuerySubspacesRequest): Promise<_46.QuerySubspacesResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _49.QueryValidatorsRequest): Promise<_49.QueryValidatorsResponse>;
                        validator(request: _49.QueryValidatorRequest): Promise<_49.QueryValidatorResponse>;
                        validatorDelegations(request: _49.QueryValidatorDelegationsRequest): Promise<_49.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _49.QueryValidatorUnbondingDelegationsRequest): Promise<_49.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _49.QueryDelegationRequest): Promise<_49.QueryDelegationResponse>;
                        unbondingDelegation(request: _49.QueryUnbondingDelegationRequest): Promise<_49.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _49.QueryDelegatorDelegationsRequest): Promise<_49.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _49.QueryDelegatorUnbondingDelegationsRequest): Promise<_49.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _49.QueryRedelegationsRequest): Promise<_49.QueryRedelegationsResponse>;
                        delegatorValidators(request: _49.QueryDelegatorValidatorsRequest): Promise<_49.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _49.QueryDelegatorValidatorRequest): Promise<_49.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _49.QueryHistoricalInfoRequest): Promise<_49.QueryHistoricalInfoResponse>;
                        pool(request?: _49.QueryPoolRequest): Promise<_49.QueryPoolResponse>;
                        params(request?: _49.QueryParamsRequest): Promise<_49.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _53.SimulateRequest): Promise<_53.SimulateResponse>;
                        getTx(request: _53.GetTxRequest): Promise<_53.GetTxResponse>;
                        broadcastTx(request: _53.BroadcastTxRequest): Promise<_53.BroadcastTxResponse>;
                        getTxsEvent(request: _53.GetTxsEventRequest): Promise<_53.GetTxsEventResponse>;
                        getBlockWithTxs(request: _53.GetBlockWithTxsRequest): Promise<_53.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _55.QueryCurrentPlanRequest): Promise<_55.QueryCurrentPlanResponse>;
                        appliedPlan(request: _55.QueryAppliedPlanRequest): Promise<_55.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _55.QueryUpgradedConsensusStateRequest): Promise<_55.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _55.QueryModuleVersionsRequest): Promise<_55.QueryModuleVersionsResponse>;
                        authority(request?: _55.QueryAuthorityRequest): Promise<_55.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
