import * as _58 from "./wasm/v1/genesis";
import * as _59 from "./wasm/v1/ibc";
import * as _60 from "./wasm/v1/proposal";
import * as _61 from "./wasm/v1/query";
import * as _62 from "./wasm/v1/tx";
import * as _63 from "./wasm/v1/types";
import * as _141 from "./wasm/v1/query.rpc.Query";
import * as _142 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _142.MsgClientImpl;
            QueryClientImpl: typeof _141.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _61.QueryContractInfoRequest): Promise<_61.QueryContractInfoResponse>;
                contractHistory(request: _61.QueryContractHistoryRequest): Promise<_61.QueryContractHistoryResponse>;
                contractsByCode(request: _61.QueryContractsByCodeRequest): Promise<_61.QueryContractsByCodeResponse>;
                allContractState(request: _61.QueryAllContractStateRequest): Promise<_61.QueryAllContractStateResponse>;
                rawContractState(request: _61.QueryRawContractStateRequest): Promise<_61.QueryRawContractStateResponse>;
                smartContractState(request: _61.QuerySmartContractStateRequest): Promise<_61.QuerySmartContractStateResponse>;
                code(request: _61.QueryCodeRequest): Promise<_61.QueryCodeResponse>;
                codes(request?: _61.QueryCodesRequest): Promise<_61.QueryCodesResponse>;
                pinnedCodes(request?: _61.QueryPinnedCodesRequest): Promise<_61.QueryPinnedCodesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _62.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _62.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _62.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _62.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _62.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _62.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _62.MsgStoreCode): {
                        typeUrl: string;
                        value: _62.MsgStoreCode;
                    };
                    instantiateContract(value: _62.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _62.MsgInstantiateContract;
                    };
                    executeContract(value: _62.MsgExecuteContract): {
                        typeUrl: string;
                        value: _62.MsgExecuteContract;
                    };
                    migrateContract(value: _62.MsgMigrateContract): {
                        typeUrl: string;
                        value: _62.MsgMigrateContract;
                    };
                    updateAdmin(value: _62.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _62.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _62.MsgClearAdmin): {
                        typeUrl: string;
                        value: _62.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _62.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _62.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _62.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _62.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _62.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _62.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _62.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _62.MsgInstantiateContract;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _62.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _62.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _62.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _62.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _62.MsgStoreCode): {
                        typeUrl: string;
                        value: _62.MsgStoreCode;
                    };
                    instantiateContract(value: _62.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _62.MsgInstantiateContract;
                    };
                    executeContract(value: _62.MsgExecuteContract): {
                        typeUrl: string;
                        value: _62.MsgExecuteContract;
                    };
                    migrateContract(value: _62.MsgMigrateContract): {
                        typeUrl: string;
                        value: _62.MsgMigrateContract;
                    };
                    updateAdmin(value: _62.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _62.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _62.MsgClearAdmin): {
                        typeUrl: string;
                        value: _62.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _62.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                        };
                    }) => _62.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _62.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _62.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _62.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _62.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _62.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _62.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _62.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _62.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _62.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _62.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _63.AccessType;
            accessTypeToJSON(object: _63.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _63.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _63.ContractCodeHistoryOperationType): string;
            AccessType: typeof _63.AccessType;
            ContractCodeHistoryOperationType: typeof _63.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _63.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.AccessTypeParam;
                fromJSON(object: any): _63.AccessTypeParam;
                toJSON(message: _63.AccessTypeParam): unknown;
                fromPartial(object: any): _63.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _63.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.AccessConfig;
                fromJSON(object: any): _63.AccessConfig;
                toJSON(message: _63.AccessConfig): unknown;
                fromPartial(object: any): _63.AccessConfig;
            };
            Params: {
                encode(message: _63.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Params;
                fromJSON(object: any): _63.Params;
                toJSON(message: _63.Params): unknown;
                fromPartial(object: any): _63.Params;
            };
            CodeInfo: {
                encode(message: _63.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.CodeInfo;
                fromJSON(object: any): _63.CodeInfo;
                toJSON(message: _63.CodeInfo): unknown;
                fromPartial(object: any): _63.CodeInfo;
            };
            ContractInfo: {
                encode(message: _63.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ContractInfo;
                fromJSON(object: any): _63.ContractInfo;
                toJSON(message: _63.ContractInfo): unknown;
                fromPartial(object: any): _63.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _63.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.ContractCodeHistoryEntry;
                fromJSON(object: any): _63.ContractCodeHistoryEntry;
                toJSON(message: _63.ContractCodeHistoryEntry): unknown;
                fromPartial(object: any): _63.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _63.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.AbsoluteTxPosition;
                fromJSON(object: any): _63.AbsoluteTxPosition;
                toJSON(message: _63.AbsoluteTxPosition): unknown;
                fromPartial(object: any): _63.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _63.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Model;
                fromJSON(object: any): _63.Model;
                toJSON(message: _63.Model): unknown;
                fromPartial(object: any): _63.Model;
            };
            ContractInfoExtension_InterfaceDecoder: (input: Uint8Array | import("protobufjs").Reader) => import("../google/protobuf/any").Any;
            MsgStoreCode: {
                encode(message: _62.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgStoreCode;
                fromJSON(object: any): _62.MsgStoreCode;
                toJSON(message: _62.MsgStoreCode): unknown;
                fromPartial(object: any): _62.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _62.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgStoreCodeResponse;
                fromJSON(object: any): _62.MsgStoreCodeResponse;
                toJSON(message: _62.MsgStoreCodeResponse): unknown;
                fromPartial(object: any): _62.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _62.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgInstantiateContract;
                fromJSON(object: any): _62.MsgInstantiateContract;
                toJSON(message: _62.MsgInstantiateContract): unknown;
                fromPartial(object: any): _62.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _62.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgInstantiateContractResponse;
                fromJSON(object: any): _62.MsgInstantiateContractResponse;
                toJSON(message: _62.MsgInstantiateContractResponse): unknown;
                fromPartial(object: any): _62.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _62.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgExecuteContract;
                fromJSON(object: any): _62.MsgExecuteContract;
                toJSON(message: _62.MsgExecuteContract): unknown;
                fromPartial(object: any): _62.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _62.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgExecuteContractResponse;
                fromJSON(object: any): _62.MsgExecuteContractResponse;
                toJSON(message: _62.MsgExecuteContractResponse): unknown;
                fromPartial(object: any): _62.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _62.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgMigrateContract;
                fromJSON(object: any): _62.MsgMigrateContract;
                toJSON(message: _62.MsgMigrateContract): unknown;
                fromPartial(object: any): _62.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _62.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgMigrateContractResponse;
                fromJSON(object: any): _62.MsgMigrateContractResponse;
                toJSON(message: _62.MsgMigrateContractResponse): unknown;
                fromPartial(object: any): _62.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _62.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateAdmin;
                fromJSON(object: any): _62.MsgUpdateAdmin;
                toJSON(message: _62.MsgUpdateAdmin): unknown;
                fromPartial(object: any): _62.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _62.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgUpdateAdminResponse;
                fromJSON(_: any): _62.MsgUpdateAdminResponse;
                toJSON(_: _62.MsgUpdateAdminResponse): unknown;
                fromPartial(_: any): _62.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _62.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgClearAdmin;
                fromJSON(object: any): _62.MsgClearAdmin;
                toJSON(message: _62.MsgClearAdmin): unknown;
                fromPartial(object: any): _62.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _62.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgClearAdminResponse;
                fromJSON(_: any): _62.MsgClearAdminResponse;
                toJSON(_: _62.MsgClearAdminResponse): unknown;
                fromPartial(_: any): _62.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _61.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryContractInfoRequest;
                fromJSON(object: any): _61.QueryContractInfoRequest;
                toJSON(message: _61.QueryContractInfoRequest): unknown;
                fromPartial(object: any): _61.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _61.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryContractInfoResponse;
                fromJSON(object: any): _61.QueryContractInfoResponse;
                toJSON(message: _61.QueryContractInfoResponse): unknown;
                fromPartial(object: any): _61.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _61.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryContractHistoryRequest;
                fromJSON(object: any): _61.QueryContractHistoryRequest;
                toJSON(message: _61.QueryContractHistoryRequest): unknown;
                fromPartial(object: any): _61.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _61.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryContractHistoryResponse;
                fromJSON(object: any): _61.QueryContractHistoryResponse;
                toJSON(message: _61.QueryContractHistoryResponse): unknown;
                fromPartial(object: any): _61.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _61.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryContractsByCodeRequest;
                fromJSON(object: any): _61.QueryContractsByCodeRequest;
                toJSON(message: _61.QueryContractsByCodeRequest): unknown;
                fromPartial(object: any): _61.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _61.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryContractsByCodeResponse;
                fromJSON(object: any): _61.QueryContractsByCodeResponse;
                toJSON(message: _61.QueryContractsByCodeResponse): unknown;
                fromPartial(object: any): _61.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _61.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryAllContractStateRequest;
                fromJSON(object: any): _61.QueryAllContractStateRequest;
                toJSON(message: _61.QueryAllContractStateRequest): unknown;
                fromPartial(object: any): _61.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _61.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryAllContractStateResponse;
                fromJSON(object: any): _61.QueryAllContractStateResponse;
                toJSON(message: _61.QueryAllContractStateResponse): unknown;
                fromPartial(object: any): _61.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _61.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryRawContractStateRequest;
                fromJSON(object: any): _61.QueryRawContractStateRequest;
                toJSON(message: _61.QueryRawContractStateRequest): unknown;
                fromPartial(object: any): _61.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _61.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryRawContractStateResponse;
                fromJSON(object: any): _61.QueryRawContractStateResponse;
                toJSON(message: _61.QueryRawContractStateResponse): unknown;
                fromPartial(object: any): _61.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _61.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QuerySmartContractStateRequest;
                fromJSON(object: any): _61.QuerySmartContractStateRequest;
                toJSON(message: _61.QuerySmartContractStateRequest): unknown;
                fromPartial(object: any): _61.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _61.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QuerySmartContractStateResponse;
                fromJSON(object: any): _61.QuerySmartContractStateResponse;
                toJSON(message: _61.QuerySmartContractStateResponse): unknown;
                fromPartial(object: any): _61.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _61.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryCodeRequest;
                fromJSON(object: any): _61.QueryCodeRequest;
                toJSON(message: _61.QueryCodeRequest): unknown;
                fromPartial(object: any): _61.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _61.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.CodeInfoResponse;
                fromJSON(object: any): _61.CodeInfoResponse;
                toJSON(message: _61.CodeInfoResponse): unknown;
                fromPartial(object: any): _61.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _61.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryCodeResponse;
                fromJSON(object: any): _61.QueryCodeResponse;
                toJSON(message: _61.QueryCodeResponse): unknown;
                fromPartial(object: any): _61.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _61.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryCodesRequest;
                fromJSON(object: any): _61.QueryCodesRequest;
                toJSON(message: _61.QueryCodesRequest): unknown;
                fromPartial(object: any): _61.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _61.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryCodesResponse;
                fromJSON(object: any): _61.QueryCodesResponse;
                toJSON(message: _61.QueryCodesResponse): unknown;
                fromPartial(object: any): _61.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _61.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryPinnedCodesRequest;
                fromJSON(object: any): _61.QueryPinnedCodesRequest;
                toJSON(message: _61.QueryPinnedCodesRequest): unknown;
                fromPartial(object: any): _61.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _61.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryPinnedCodesResponse;
                fromJSON(object: any): _61.QueryPinnedCodesResponse;
                toJSON(message: _61.QueryPinnedCodesResponse): unknown;
                fromPartial(object: any): _61.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _60.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.StoreCodeProposal;
                fromJSON(object: any): _60.StoreCodeProposal;
                toJSON(message: _60.StoreCodeProposal): unknown;
                fromPartial(object: any): _60.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _60.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.InstantiateContractProposal;
                fromJSON(object: any): _60.InstantiateContractProposal;
                toJSON(message: _60.InstantiateContractProposal): unknown;
                fromPartial(object: any): _60.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _60.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MigrateContractProposal;
                fromJSON(object: any): _60.MigrateContractProposal;
                toJSON(message: _60.MigrateContractProposal): unknown;
                fromPartial(object: any): _60.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _60.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.SudoContractProposal;
                fromJSON(object: any): _60.SudoContractProposal;
                toJSON(message: _60.SudoContractProposal): unknown;
                fromPartial(object: any): _60.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _60.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ExecuteContractProposal;
                fromJSON(object: any): _60.ExecuteContractProposal;
                toJSON(message: _60.ExecuteContractProposal): unknown;
                fromPartial(object: any): _60.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _60.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.UpdateAdminProposal;
                fromJSON(object: any): _60.UpdateAdminProposal;
                toJSON(message: _60.UpdateAdminProposal): unknown;
                fromPartial(object: any): _60.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _60.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ClearAdminProposal;
                fromJSON(object: any): _60.ClearAdminProposal;
                toJSON(message: _60.ClearAdminProposal): unknown;
                fromPartial(object: any): _60.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _60.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PinCodesProposal;
                fromJSON(object: any): _60.PinCodesProposal;
                toJSON(message: _60.PinCodesProposal): unknown;
                fromPartial(object: any): _60.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _60.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.UnpinCodesProposal;
                fromJSON(object: any): _60.UnpinCodesProposal;
                toJSON(message: _60.UnpinCodesProposal): unknown;
                fromPartial(object: any): _60.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _59.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgIBCSend;
                fromJSON(object: any): _59.MsgIBCSend;
                toJSON(message: _59.MsgIBCSend): unknown;
                fromPartial(object: any): _59.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _59.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.MsgIBCCloseChannel;
                fromJSON(object: any): _59.MsgIBCCloseChannel;
                toJSON(message: _59.MsgIBCCloseChannel): unknown;
                fromPartial(object: any): _59.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _58.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GenesisState;
                fromJSON(object: any): _58.GenesisState;
                toJSON(message: _58.GenesisState): unknown;
                fromPartial(object: any): _58.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _58.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.GenesisState_GenMsgs;
                fromJSON(object: any): _58.GenesisState_GenMsgs;
                toJSON(message: _58.GenesisState_GenMsgs): unknown;
                fromPartial(object: any): _58.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _58.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Code;
                fromJSON(object: any): _58.Code;
                toJSON(message: _58.Code): unknown;
                fromPartial(object: any): _58.Code;
            };
            Contract: {
                encode(message: _58.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Contract;
                fromJSON(object: any): _58.Contract;
                toJSON(message: _58.Contract): unknown;
                fromPartial(object: any): _58.Contract;
            };
            Sequence: {
                encode(message: _58.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Sequence;
                fromJSON(object: any): _58.Sequence;
                toJSON(message: _58.Sequence): unknown;
                fromPartial(object: any): _58.Sequence;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
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
            cosmwasm: {
                wasm: {
                    v1: _142.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _61.QueryContractInfoRequest): Promise<_61.QueryContractInfoResponse>;
                        contractHistory(request: _61.QueryContractHistoryRequest): Promise<_61.QueryContractHistoryResponse>;
                        contractsByCode(request: _61.QueryContractsByCodeRequest): Promise<_61.QueryContractsByCodeResponse>;
                        allContractState(request: _61.QueryAllContractStateRequest): Promise<_61.QueryAllContractStateResponse>;
                        rawContractState(request: _61.QueryRawContractStateRequest): Promise<_61.QueryRawContractStateResponse>;
                        smartContractState(request: _61.QuerySmartContractStateRequest): Promise<_61.QuerySmartContractStateResponse>;
                        code(request: _61.QueryCodeRequest): Promise<_61.QueryCodeResponse>;
                        codes(request?: _61.QueryCodesRequest): Promise<_61.QueryCodesResponse>;
                        pinnedCodes(request?: _61.QueryPinnedCodesRequest): Promise<_61.QueryPinnedCodesResponse>;
                    };
                };
            };
        }>;
    };
}
