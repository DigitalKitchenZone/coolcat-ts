import * as _70 from "./applications/transfer/v1/genesis";
import * as _71 from "./applications/transfer/v1/query";
import * as _72 from "./applications/transfer/v1/transfer";
import * as _73 from "./applications/transfer/v1/tx";
import * as _74 from "./applications/transfer/v2/packet";
import * as _75 from "./core/channel/v1/channel";
import * as _76 from "./core/channel/v1/genesis";
import * as _77 from "./core/channel/v1/query";
import * as _78 from "./core/channel/v1/tx";
import * as _79 from "./core/client/v1/client";
import * as _80 from "./core/client/v1/genesis";
import * as _81 from "./core/client/v1/query";
import * as _82 from "./core/client/v1/tx";
import * as _83 from "./core/commitment/v1/commitment";
import * as _84 from "./core/connection/v1/connection";
import * as _85 from "./core/connection/v1/genesis";
import * as _86 from "./core/connection/v1/query";
import * as _87 from "./core/connection/v1/tx";
import * as _88 from "./lightclients/localhost/v1/localhost";
import * as _89 from "./lightclients/solomachine/v1/solomachine";
import * as _90 from "./lightclients/solomachine/v2/solomachine";
import * as _91 from "./lightclients/tendermint/v1/tendermint";
import * as _151 from "./applications/transfer/v1/query.rpc.Query";
import * as _152 from "./core/channel/v1/query.rpc.Query";
import * as _153 from "./core/client/v1/query.rpc.Query";
import * as _154 from "./core/connection/v1/query.rpc.Query";
import * as _155 from "./applications/transfer/v1/tx.rpc.msg";
import * as _156 from "./core/channel/v1/tx.rpc.msg";
import * as _157 from "./core/client/v1/tx.rpc.msg";
import * as _158 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _155.MsgClientImpl;
                QueryClientImpl: typeof _151.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _71.QueryDenomTraceRequest): Promise<_71.QueryDenomTraceResponse>;
                    denomTraces(request?: _71.QueryDenomTracesRequest): Promise<_71.QueryDenomTracesResponse>;
                    params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _73.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _73.MsgTransfer): {
                            typeUrl: string;
                            value: _73.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _73.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _73.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _73.MsgTransfer): {
                            typeUrl: string;
                            value: _73.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _73.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _73.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _73.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgTransfer;
                    fromJSON(object: any): _73.MsgTransfer;
                    toJSON(message: _73.MsgTransfer): unknown;
                    fromPartial(object: any): _73.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _73.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.MsgTransferResponse;
                    fromJSON(_: any): _73.MsgTransferResponse;
                    toJSON(_: _73.MsgTransferResponse): unknown;
                    fromPartial(_: any): _73.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _72.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.DenomTrace;
                    fromJSON(object: any): _72.DenomTrace;
                    toJSON(message: _72.DenomTrace): unknown;
                    fromPartial(object: any): _72.DenomTrace;
                };
                Params: {
                    encode(message: _72.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Params;
                    fromJSON(object: any): _72.Params;
                    toJSON(message: _72.Params): unknown;
                    fromPartial(object: any): _72.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _71.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryDenomTraceRequest;
                    fromJSON(object: any): _71.QueryDenomTraceRequest;
                    toJSON(message: _71.QueryDenomTraceRequest): unknown;
                    fromPartial(object: any): _71.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _71.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryDenomTraceResponse;
                    fromJSON(object: any): _71.QueryDenomTraceResponse;
                    toJSON(message: _71.QueryDenomTraceResponse): unknown;
                    fromPartial(object: any): _71.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _71.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryDenomTracesRequest;
                    fromJSON(object: any): _71.QueryDenomTracesRequest;
                    toJSON(message: _71.QueryDenomTracesRequest): unknown;
                    fromPartial(object: any): _71.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _71.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryDenomTracesResponse;
                    fromJSON(object: any): _71.QueryDenomTracesResponse;
                    toJSON(message: _71.QueryDenomTracesResponse): unknown;
                    fromPartial(object: any): _71.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _71.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryParamsRequest;
                    fromJSON(_: any): _71.QueryParamsRequest;
                    toJSON(_: _71.QueryParamsRequest): unknown;
                    fromPartial(_: any): _71.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _71.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.QueryParamsResponse;
                    fromJSON(object: any): _71.QueryParamsResponse;
                    toJSON(message: _71.QueryParamsResponse): unknown;
                    fromPartial(object: any): _71.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _70.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.GenesisState;
                    fromJSON(object: any): _70.GenesisState;
                    toJSON(message: _70.GenesisState): unknown;
                    fromPartial(object: any): _70.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _74.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.FungibleTokenPacketData;
                    fromJSON(object: any): _74.FungibleTokenPacketData;
                    toJSON(message: _74.FungibleTokenPacketData): unknown;
                    fromPartial(object: any): _74.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _156.MsgClientImpl;
                QueryClientImpl: typeof _152.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _77.QueryChannelRequest): Promise<_77.QueryChannelResponse>;
                    channels(request?: _77.QueryChannelsRequest): Promise<_77.QueryChannelsResponse>;
                    connectionChannels(request: _77.QueryConnectionChannelsRequest): Promise<_77.QueryConnectionChannelsResponse>;
                    channelClientState(request: _77.QueryChannelClientStateRequest): Promise<_77.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _77.QueryChannelConsensusStateRequest): Promise<_77.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _77.QueryPacketCommitmentRequest): Promise<_77.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _77.QueryPacketCommitmentsRequest): Promise<_77.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _77.QueryPacketReceiptRequest): Promise<_77.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _77.QueryPacketAcknowledgementRequest): Promise<_77.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _77.QueryPacketAcknowledgementsRequest): Promise<_77.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _77.QueryUnreceivedPacketsRequest): Promise<_77.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _77.QueryUnreceivedAcksRequest): Promise<_77.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _77.QueryNextSequenceReceiveRequest): Promise<_77.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _78.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _78.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _78.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _78.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _78.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _78.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _78.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _78.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _78.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _78.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _78.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _78.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _78.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _78.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _78.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _78.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _78.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _78.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _78.MsgRecvPacket): {
                            typeUrl: string;
                            value: _78.MsgRecvPacket;
                        };
                        timeout(value: _78.MsgTimeout): {
                            typeUrl: string;
                            value: _78.MsgTimeout;
                        };
                        timeoutOnClose(value: _78.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _78.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _78.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _78.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _78.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _78.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _78.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _78.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _78.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _78.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _78.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _78.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _78.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _78.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _78.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _78.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _78.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _78.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _78.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _78.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _78.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _78.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _78.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _78.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _78.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _78.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _78.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _78.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _78.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _78.MsgRecvPacket): {
                            typeUrl: string;
                            value: _78.MsgRecvPacket;
                        };
                        timeout(value: _78.MsgTimeout): {
                            typeUrl: string;
                            value: _78.MsgTimeout;
                        };
                        timeoutOnClose(value: _78.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _78.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _78.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _78.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _78.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _78.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _78.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _78.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _78.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _78.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _78.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _78.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _78.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _78.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _78.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _78.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _78.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _78.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _78.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _78.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _78.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _78.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _78.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _78.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _78.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelOpenInit;
                    fromJSON(object: any): _78.MsgChannelOpenInit;
                    toJSON(message: _78.MsgChannelOpenInit): unknown;
                    fromPartial(object: any): _78.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _78.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _78.MsgChannelOpenInitResponse;
                    toJSON(_: _78.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: any): _78.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _78.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelOpenTry;
                    fromJSON(object: any): _78.MsgChannelOpenTry;
                    toJSON(message: _78.MsgChannelOpenTry): unknown;
                    fromPartial(object: any): _78.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _78.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _78.MsgChannelOpenTryResponse;
                    toJSON(_: _78.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: any): _78.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _78.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelOpenAck;
                    fromJSON(object: any): _78.MsgChannelOpenAck;
                    toJSON(message: _78.MsgChannelOpenAck): unknown;
                    fromPartial(object: any): _78.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _78.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _78.MsgChannelOpenAckResponse;
                    toJSON(_: _78.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: any): _78.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _78.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelOpenConfirm;
                    fromJSON(object: any): _78.MsgChannelOpenConfirm;
                    toJSON(message: _78.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: any): _78.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _78.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _78.MsgChannelOpenConfirmResponse;
                    toJSON(_: _78.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: any): _78.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _78.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelCloseInit;
                    fromJSON(object: any): _78.MsgChannelCloseInit;
                    toJSON(message: _78.MsgChannelCloseInit): unknown;
                    fromPartial(object: any): _78.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _78.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _78.MsgChannelCloseInitResponse;
                    toJSON(_: _78.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: any): _78.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _78.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelCloseConfirm;
                    fromJSON(object: any): _78.MsgChannelCloseConfirm;
                    toJSON(message: _78.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: any): _78.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _78.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _78.MsgChannelCloseConfirmResponse;
                    toJSON(_: _78.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: any): _78.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _78.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgRecvPacket;
                    fromJSON(object: any): _78.MsgRecvPacket;
                    toJSON(message: _78.MsgRecvPacket): unknown;
                    fromPartial(object: any): _78.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _78.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgRecvPacketResponse;
                    fromJSON(_: any): _78.MsgRecvPacketResponse;
                    toJSON(_: _78.MsgRecvPacketResponse): unknown;
                    fromPartial(_: any): _78.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _78.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgTimeout;
                    fromJSON(object: any): _78.MsgTimeout;
                    toJSON(message: _78.MsgTimeout): unknown;
                    fromPartial(object: any): _78.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _78.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgTimeoutResponse;
                    fromJSON(_: any): _78.MsgTimeoutResponse;
                    toJSON(_: _78.MsgTimeoutResponse): unknown;
                    fromPartial(_: any): _78.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _78.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgTimeoutOnClose;
                    fromJSON(object: any): _78.MsgTimeoutOnClose;
                    toJSON(message: _78.MsgTimeoutOnClose): unknown;
                    fromPartial(object: any): _78.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _78.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _78.MsgTimeoutOnCloseResponse;
                    toJSON(_: _78.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: any): _78.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _78.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgAcknowledgement;
                    fromJSON(object: any): _78.MsgAcknowledgement;
                    toJSON(message: _78.MsgAcknowledgement): unknown;
                    fromPartial(object: any): _78.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _78.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.MsgAcknowledgementResponse;
                    fromJSON(_: any): _78.MsgAcknowledgementResponse;
                    toJSON(_: _78.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: any): _78.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _77.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryChannelRequest;
                    fromJSON(object: any): _77.QueryChannelRequest;
                    toJSON(message: _77.QueryChannelRequest): unknown;
                    fromPartial(object: any): _77.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _77.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryChannelResponse;
                    fromJSON(object: any): _77.QueryChannelResponse;
                    toJSON(message: _77.QueryChannelResponse): unknown;
                    fromPartial(object: any): _77.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _77.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryChannelsRequest;
                    fromJSON(object: any): _77.QueryChannelsRequest;
                    toJSON(message: _77.QueryChannelsRequest): unknown;
                    fromPartial(object: any): _77.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _77.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryChannelsResponse;
                    fromJSON(object: any): _77.QueryChannelsResponse;
                    toJSON(message: _77.QueryChannelsResponse): unknown;
                    fromPartial(object: any): _77.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _77.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _77.QueryConnectionChannelsRequest;
                    toJSON(message: _77.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: any): _77.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _77.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _77.QueryConnectionChannelsResponse;
                    toJSON(message: _77.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: any): _77.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _77.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryChannelClientStateRequest;
                    fromJSON(object: any): _77.QueryChannelClientStateRequest;
                    toJSON(message: _77.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: any): _77.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _77.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryChannelClientStateResponse;
                    fromJSON(object: any): _77.QueryChannelClientStateResponse;
                    toJSON(message: _77.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: any): _77.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _77.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _77.QueryChannelConsensusStateRequest;
                    toJSON(message: _77.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: any): _77.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _77.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _77.QueryChannelConsensusStateResponse;
                    toJSON(message: _77.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: any): _77.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _77.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _77.QueryPacketCommitmentRequest;
                    toJSON(message: _77.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: any): _77.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _77.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _77.QueryPacketCommitmentResponse;
                    toJSON(message: _77.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: any): _77.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _77.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _77.QueryPacketCommitmentsRequest;
                    toJSON(message: _77.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: any): _77.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _77.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _77.QueryPacketCommitmentsResponse;
                    toJSON(message: _77.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: any): _77.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _77.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryPacketReceiptRequest;
                    fromJSON(object: any): _77.QueryPacketReceiptRequest;
                    toJSON(message: _77.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: any): _77.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _77.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryPacketReceiptResponse;
                    fromJSON(object: any): _77.QueryPacketReceiptResponse;
                    toJSON(message: _77.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: any): _77.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _77.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _77.QueryPacketAcknowledgementRequest;
                    toJSON(message: _77.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: any): _77.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _77.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _77.QueryPacketAcknowledgementResponse;
                    toJSON(message: _77.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: any): _77.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _77.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _77.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _77.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: any): _77.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _77.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _77.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _77.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: any): _77.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _77.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _77.QueryUnreceivedPacketsRequest;
                    toJSON(message: _77.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: any): _77.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _77.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _77.QueryUnreceivedPacketsResponse;
                    toJSON(message: _77.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: any): _77.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _77.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _77.QueryUnreceivedAcksRequest;
                    toJSON(message: _77.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: any): _77.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _77.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _77.QueryUnreceivedAcksResponse;
                    toJSON(message: _77.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: any): _77.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _77.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _77.QueryNextSequenceReceiveRequest;
                    toJSON(message: _77.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: any): _77.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _77.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _77.QueryNextSequenceReceiveResponse;
                    toJSON(message: _77.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: any): _77.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _76.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.GenesisState;
                    fromJSON(object: any): _76.GenesisState;
                    toJSON(message: _76.GenesisState): unknown;
                    fromPartial(object: any): _76.GenesisState;
                };
                PacketSequence: {
                    encode(message: _76.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.PacketSequence;
                    fromJSON(object: any): _76.PacketSequence;
                    toJSON(message: _76.PacketSequence): unknown;
                    fromPartial(object: any): _76.PacketSequence;
                };
                stateFromJSON(object: any): _75.State;
                stateToJSON(object: _75.State): string;
                orderFromJSON(object: any): _75.Order;
                orderToJSON(object: _75.Order): string;
                State: typeof _75.State;
                Order: typeof _75.Order;
                Channel: {
                    encode(message: _75.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Channel;
                    fromJSON(object: any): _75.Channel;
                    toJSON(message: _75.Channel): unknown;
                    fromPartial(object: any): _75.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _75.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.IdentifiedChannel;
                    fromJSON(object: any): _75.IdentifiedChannel;
                    toJSON(message: _75.IdentifiedChannel): unknown;
                    fromPartial(object: any): _75.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _75.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Counterparty;
                    fromJSON(object: any): _75.Counterparty;
                    toJSON(message: _75.Counterparty): unknown;
                    fromPartial(object: any): _75.Counterparty;
                };
                Packet: {
                    encode(message: _75.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Packet;
                    fromJSON(object: any): _75.Packet;
                    toJSON(message: _75.Packet): unknown;
                    fromPartial(object: any): _75.Packet;
                };
                PacketState: {
                    encode(message: _75.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.PacketState;
                    fromJSON(object: any): _75.PacketState;
                    toJSON(message: _75.PacketState): unknown;
                    fromPartial(object: any): _75.PacketState;
                };
                Acknowledgement: {
                    encode(message: _75.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Acknowledgement;
                    fromJSON(object: any): _75.Acknowledgement;
                    toJSON(message: _75.Acknowledgement): unknown;
                    fromPartial(object: any): _75.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _157.MsgClientImpl;
                QueryClientImpl: typeof _153.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _81.QueryClientStateRequest): Promise<_81.QueryClientStateResponse>;
                    clientStates(request?: _81.QueryClientStatesRequest): Promise<_81.QueryClientStatesResponse>;
                    consensusState(request: _81.QueryConsensusStateRequest): Promise<_81.QueryConsensusStateResponse>;
                    consensusStates(request: _81.QueryConsensusStatesRequest): Promise<_81.QueryConsensusStatesResponse>;
                    clientStatus(request: _81.QueryClientStatusRequest): Promise<_81.QueryClientStatusResponse>;
                    clientParams(request?: _81.QueryClientParamsRequest): Promise<_81.QueryClientParamsResponse>;
                    upgradedClientState(request?: _81.QueryUpgradedClientStateRequest): Promise<_81.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _81.QueryUpgradedConsensusStateRequest): Promise<_81.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _82.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _82.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _82.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _82.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _82.MsgCreateClient): {
                            typeUrl: string;
                            value: _82.MsgCreateClient;
                        };
                        updateClient(value: _82.MsgUpdateClient): {
                            typeUrl: string;
                            value: _82.MsgUpdateClient;
                        };
                        upgradeClient(value: _82.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _82.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _82.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _82.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _82.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _82.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _82.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _82.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _82.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _82.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _82.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _82.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _82.MsgCreateClient): {
                            typeUrl: string;
                            value: _82.MsgCreateClient;
                        };
                        updateClient(value: _82.MsgUpdateClient): {
                            typeUrl: string;
                            value: _82.MsgUpdateClient;
                        };
                        upgradeClient(value: _82.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _82.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _82.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _82.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _82.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _82.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _82.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _82.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _82.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _82.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _82.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _82.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _82.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCreateClient;
                    fromJSON(object: any): _82.MsgCreateClient;
                    toJSON(message: _82.MsgCreateClient): unknown;
                    fromPartial(object: any): _82.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _82.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgCreateClientResponse;
                    fromJSON(_: any): _82.MsgCreateClientResponse;
                    toJSON(_: _82.MsgCreateClientResponse): unknown;
                    fromPartial(_: any): _82.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _82.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgUpdateClient;
                    fromJSON(object: any): _82.MsgUpdateClient;
                    toJSON(message: _82.MsgUpdateClient): unknown;
                    fromPartial(object: any): _82.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _82.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgUpdateClientResponse;
                    fromJSON(_: any): _82.MsgUpdateClientResponse;
                    toJSON(_: _82.MsgUpdateClientResponse): unknown;
                    fromPartial(_: any): _82.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _82.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgUpgradeClient;
                    fromJSON(object: any): _82.MsgUpgradeClient;
                    toJSON(message: _82.MsgUpgradeClient): unknown;
                    fromPartial(object: any): _82.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _82.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgUpgradeClientResponse;
                    fromJSON(_: any): _82.MsgUpgradeClientResponse;
                    toJSON(_: _82.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: any): _82.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _82.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _82.MsgSubmitMisbehaviour;
                    toJSON(message: _82.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: any): _82.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _82.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _82.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _82.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: any): _82.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _81.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClientStateRequest;
                    fromJSON(object: any): _81.QueryClientStateRequest;
                    toJSON(message: _81.QueryClientStateRequest): unknown;
                    fromPartial(object: any): _81.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _81.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClientStateResponse;
                    fromJSON(object: any): _81.QueryClientStateResponse;
                    toJSON(message: _81.QueryClientStateResponse): unknown;
                    fromPartial(object: any): _81.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _81.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClientStatesRequest;
                    fromJSON(object: any): _81.QueryClientStatesRequest;
                    toJSON(message: _81.QueryClientStatesRequest): unknown;
                    fromPartial(object: any): _81.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _81.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClientStatesResponse;
                    fromJSON(object: any): _81.QueryClientStatesResponse;
                    toJSON(message: _81.QueryClientStatesResponse): unknown;
                    fromPartial(object: any): _81.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _81.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConsensusStateRequest;
                    fromJSON(object: any): _81.QueryConsensusStateRequest;
                    toJSON(message: _81.QueryConsensusStateRequest): unknown;
                    fromPartial(object: any): _81.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _81.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConsensusStateResponse;
                    fromJSON(object: any): _81.QueryConsensusStateResponse;
                    toJSON(message: _81.QueryConsensusStateResponse): unknown;
                    fromPartial(object: any): _81.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _81.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConsensusStatesRequest;
                    fromJSON(object: any): _81.QueryConsensusStatesRequest;
                    toJSON(message: _81.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: any): _81.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _81.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryConsensusStatesResponse;
                    fromJSON(object: any): _81.QueryConsensusStatesResponse;
                    toJSON(message: _81.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: any): _81.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _81.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClientStatusRequest;
                    fromJSON(object: any): _81.QueryClientStatusRequest;
                    toJSON(message: _81.QueryClientStatusRequest): unknown;
                    fromPartial(object: any): _81.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _81.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClientStatusResponse;
                    fromJSON(object: any): _81.QueryClientStatusResponse;
                    toJSON(message: _81.QueryClientStatusResponse): unknown;
                    fromPartial(object: any): _81.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _81.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClientParamsRequest;
                    fromJSON(_: any): _81.QueryClientParamsRequest;
                    toJSON(_: _81.QueryClientParamsRequest): unknown;
                    fromPartial(_: any): _81.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _81.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryClientParamsResponse;
                    fromJSON(object: any): _81.QueryClientParamsResponse;
                    toJSON(message: _81.QueryClientParamsResponse): unknown;
                    fromPartial(object: any): _81.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _81.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _81.QueryUpgradedClientStateRequest;
                    toJSON(_: _81.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: any): _81.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _81.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _81.QueryUpgradedClientStateResponse;
                    toJSON(message: _81.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: any): _81.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _81.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _81.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _81.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: any): _81.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _81.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _81.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _81.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: any): _81.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _80.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GenesisState;
                    fromJSON(object: any): _80.GenesisState;
                    toJSON(message: _80.GenesisState): unknown;
                    fromPartial(object: any): _80.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _80.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.GenesisMetadata;
                    fromJSON(object: any): _80.GenesisMetadata;
                    toJSON(message: _80.GenesisMetadata): unknown;
                    fromPartial(object: any): _80.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _80.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _80.IdentifiedGenesisMetadata;
                    toJSON(message: _80.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: any): _80.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _79.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.IdentifiedClientState;
                    fromJSON(object: any): _79.IdentifiedClientState;
                    toJSON(message: _79.IdentifiedClientState): unknown;
                    fromPartial(object: any): _79.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _79.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ConsensusStateWithHeight;
                    fromJSON(object: any): _79.ConsensusStateWithHeight;
                    toJSON(message: _79.ConsensusStateWithHeight): unknown;
                    fromPartial(object: any): _79.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _79.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ClientConsensusStates;
                    fromJSON(object: any): _79.ClientConsensusStates;
                    toJSON(message: _79.ClientConsensusStates): unknown;
                    fromPartial(object: any): _79.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _79.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ClientUpdateProposal;
                    fromJSON(object: any): _79.ClientUpdateProposal;
                    toJSON(message: _79.ClientUpdateProposal): unknown;
                    fromPartial(object: any): _79.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _79.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.UpgradeProposal;
                    fromJSON(object: any): _79.UpgradeProposal;
                    toJSON(message: _79.UpgradeProposal): unknown;
                    fromPartial(object: any): _79.UpgradeProposal;
                };
                Height: {
                    encode(message: _79.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Height;
                    fromJSON(object: any): _79.Height;
                    toJSON(message: _79.Height): unknown;
                    fromPartial(object: any): _79.Height;
                };
                Params: {
                    encode(message: _79.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Params;
                    fromJSON(object: any): _79.Params;
                    toJSON(message: _79.Params): unknown;
                    fromPartial(object: any): _79.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _83.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MerkleRoot;
                    fromJSON(object: any): _83.MerkleRoot;
                    toJSON(message: _83.MerkleRoot): unknown;
                    fromPartial(object: any): _83.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _83.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MerklePrefix;
                    fromJSON(object: any): _83.MerklePrefix;
                    toJSON(message: _83.MerklePrefix): unknown;
                    fromPartial(object: any): _83.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _83.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MerklePath;
                    fromJSON(object: any): _83.MerklePath;
                    toJSON(message: _83.MerklePath): unknown;
                    fromPartial(object: any): _83.MerklePath;
                };
                MerkleProof: {
                    encode(message: _83.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.MerkleProof;
                    fromJSON(object: any): _83.MerkleProof;
                    toJSON(message: _83.MerkleProof): unknown;
                    fromPartial(object: any): _83.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _158.MsgClientImpl;
                QueryClientImpl: typeof _154.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _86.QueryConnectionRequest): Promise<_86.QueryConnectionResponse>;
                    connections(request?: _86.QueryConnectionsRequest): Promise<_86.QueryConnectionsResponse>;
                    clientConnections(request: _86.QueryClientConnectionsRequest): Promise<_86.QueryClientConnectionsResponse>;
                    connectionClientState(request: _86.QueryConnectionClientStateRequest): Promise<_86.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _86.QueryConnectionConsensusStateRequest): Promise<_86.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _87.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _87.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _87.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _87.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _87.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _87.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _87.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _87.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _87.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _87.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _87.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _87.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _87.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _87.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _87.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _87.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _87.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _87.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _87.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _87.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _87.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _87.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _87.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _87.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _87.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _87.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgConnectionOpenInit;
                    fromJSON(object: any): _87.MsgConnectionOpenInit;
                    toJSON(message: _87.MsgConnectionOpenInit): unknown;
                    fromPartial(object: any): _87.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _87.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _87.MsgConnectionOpenInitResponse;
                    toJSON(_: _87.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: any): _87.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _87.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgConnectionOpenTry;
                    fromJSON(object: any): _87.MsgConnectionOpenTry;
                    toJSON(message: _87.MsgConnectionOpenTry): unknown;
                    fromPartial(object: any): _87.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _87.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _87.MsgConnectionOpenTryResponse;
                    toJSON(_: _87.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: any): _87.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _87.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgConnectionOpenAck;
                    fromJSON(object: any): _87.MsgConnectionOpenAck;
                    toJSON(message: _87.MsgConnectionOpenAck): unknown;
                    fromPartial(object: any): _87.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _87.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _87.MsgConnectionOpenAckResponse;
                    toJSON(_: _87.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: any): _87.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _87.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _87.MsgConnectionOpenConfirm;
                    toJSON(message: _87.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: any): _87.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _87.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _87.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _87.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: any): _87.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _86.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConnectionRequest;
                    fromJSON(object: any): _86.QueryConnectionRequest;
                    toJSON(message: _86.QueryConnectionRequest): unknown;
                    fromPartial(object: any): _86.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _86.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConnectionResponse;
                    fromJSON(object: any): _86.QueryConnectionResponse;
                    toJSON(message: _86.QueryConnectionResponse): unknown;
                    fromPartial(object: any): _86.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _86.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConnectionsRequest;
                    fromJSON(object: any): _86.QueryConnectionsRequest;
                    toJSON(message: _86.QueryConnectionsRequest): unknown;
                    fromPartial(object: any): _86.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _86.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConnectionsResponse;
                    fromJSON(object: any): _86.QueryConnectionsResponse;
                    toJSON(message: _86.QueryConnectionsResponse): unknown;
                    fromPartial(object: any): _86.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _86.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClientConnectionsRequest;
                    fromJSON(object: any): _86.QueryClientConnectionsRequest;
                    toJSON(message: _86.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: any): _86.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _86.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryClientConnectionsResponse;
                    fromJSON(object: any): _86.QueryClientConnectionsResponse;
                    toJSON(message: _86.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: any): _86.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _86.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _86.QueryConnectionClientStateRequest;
                    toJSON(message: _86.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: any): _86.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _86.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _86.QueryConnectionClientStateResponse;
                    toJSON(message: _86.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: any): _86.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _86.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _86.QueryConnectionConsensusStateRequest;
                    toJSON(message: _86.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: any): _86.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _86.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _86.QueryConnectionConsensusStateResponse;
                    toJSON(message: _86.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: any): _86.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _85.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.GenesisState;
                    fromJSON(object: any): _85.GenesisState;
                    toJSON(message: _85.GenesisState): unknown;
                    fromPartial(object: any): _85.GenesisState;
                };
                stateFromJSON(object: any): _84.State;
                stateToJSON(object: _84.State): string;
                State: typeof _84.State;
                ConnectionEnd: {
                    encode(message: _84.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ConnectionEnd;
                    fromJSON(object: any): _84.ConnectionEnd;
                    toJSON(message: _84.ConnectionEnd): unknown;
                    fromPartial(object: any): _84.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _84.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.IdentifiedConnection;
                    fromJSON(object: any): _84.IdentifiedConnection;
                    toJSON(message: _84.IdentifiedConnection): unknown;
                    fromPartial(object: any): _84.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _84.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Counterparty;
                    fromJSON(object: any): _84.Counterparty;
                    toJSON(message: _84.Counterparty): unknown;
                    fromPartial(object: any): _84.Counterparty;
                };
                ClientPaths: {
                    encode(message: _84.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ClientPaths;
                    fromJSON(object: any): _84.ClientPaths;
                    toJSON(message: _84.ClientPaths): unknown;
                    fromPartial(object: any): _84.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _84.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.ConnectionPaths;
                    fromJSON(object: any): _84.ConnectionPaths;
                    toJSON(message: _84.ConnectionPaths): unknown;
                    fromPartial(object: any): _84.ConnectionPaths;
                };
                Version: {
                    encode(message: _84.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Version;
                    fromJSON(object: any): _84.Version;
                    toJSON(message: _84.Version): unknown;
                    fromPartial(object: any): _84.Version;
                };
                Params: {
                    encode(message: _84.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Params;
                    fromJSON(object: any): _84.Params;
                    toJSON(message: _84.Params): unknown;
                    fromPartial(object: any): _84.Params;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _88.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.ClientState;
                    fromJSON(object: any): _88.ClientState;
                    toJSON(message: _88.ClientState): unknown;
                    fromPartial(object: any): _88.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _89.DataType;
                dataTypeToJSON(object: _89.DataType): string;
                DataType: typeof _89.DataType;
                ClientState: {
                    encode(message: _89.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ClientState;
                    fromJSON(object: any): _89.ClientState;
                    toJSON(message: _89.ClientState): unknown;
                    fromPartial(object: any): _89.ClientState;
                };
                ConsensusState: {
                    encode(message: _89.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ConsensusState;
                    fromJSON(object: any): _89.ConsensusState;
                    toJSON(message: _89.ConsensusState): unknown;
                    fromPartial(object: any): _89.ConsensusState;
                };
                Header: {
                    encode(message: _89.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Header;
                    fromJSON(object: any): _89.Header;
                    toJSON(message: _89.Header): unknown;
                    fromPartial(object: any): _89.Header;
                };
                Misbehaviour: {
                    encode(message: _89.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Misbehaviour;
                    fromJSON(object: any): _89.Misbehaviour;
                    toJSON(message: _89.Misbehaviour): unknown;
                    fromPartial(object: any): _89.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _89.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignatureAndData;
                    fromJSON(object: any): _89.SignatureAndData;
                    toJSON(message: _89.SignatureAndData): unknown;
                    fromPartial(object: any): _89.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _89.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.TimestampedSignatureData;
                    fromJSON(object: any): _89.TimestampedSignatureData;
                    toJSON(message: _89.TimestampedSignatureData): unknown;
                    fromPartial(object: any): _89.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _89.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.SignBytes;
                    fromJSON(object: any): _89.SignBytes;
                    toJSON(message: _89.SignBytes): unknown;
                    fromPartial(object: any): _89.SignBytes;
                };
                HeaderData: {
                    encode(message: _89.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.HeaderData;
                    fromJSON(object: any): _89.HeaderData;
                    toJSON(message: _89.HeaderData): unknown;
                    fromPartial(object: any): _89.HeaderData;
                };
                ClientStateData: {
                    encode(message: _89.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ClientStateData;
                    fromJSON(object: any): _89.ClientStateData;
                    toJSON(message: _89.ClientStateData): unknown;
                    fromPartial(object: any): _89.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _89.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ConsensusStateData;
                    fromJSON(object: any): _89.ConsensusStateData;
                    toJSON(message: _89.ConsensusStateData): unknown;
                    fromPartial(object: any): _89.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _89.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ConnectionStateData;
                    fromJSON(object: any): _89.ConnectionStateData;
                    toJSON(message: _89.ConnectionStateData): unknown;
                    fromPartial(object: any): _89.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _89.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.ChannelStateData;
                    fromJSON(object: any): _89.ChannelStateData;
                    toJSON(message: _89.ChannelStateData): unknown;
                    fromPartial(object: any): _89.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _89.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PacketCommitmentData;
                    fromJSON(object: any): _89.PacketCommitmentData;
                    toJSON(message: _89.PacketCommitmentData): unknown;
                    fromPartial(object: any): _89.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _89.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PacketAcknowledgementData;
                    fromJSON(object: any): _89.PacketAcknowledgementData;
                    toJSON(message: _89.PacketAcknowledgementData): unknown;
                    fromPartial(object: any): _89.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _89.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PacketReceiptAbsenceData;
                    fromJSON(object: any): _89.PacketReceiptAbsenceData;
                    toJSON(message: _89.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: any): _89.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _89.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.NextSequenceRecvData;
                    fromJSON(object: any): _89.NextSequenceRecvData;
                    toJSON(message: _89.NextSequenceRecvData): unknown;
                    fromPartial(object: any): _89.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _90.DataType;
                dataTypeToJSON(object: _90.DataType): string;
                DataType: typeof _90.DataType;
                ClientState: {
                    encode(message: _90.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ClientState;
                    fromJSON(object: any): _90.ClientState;
                    toJSON(message: _90.ClientState): unknown;
                    fromPartial(object: any): _90.ClientState;
                };
                ConsensusState: {
                    encode(message: _90.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ConsensusState;
                    fromJSON(object: any): _90.ConsensusState;
                    toJSON(message: _90.ConsensusState): unknown;
                    fromPartial(object: any): _90.ConsensusState;
                };
                Header: {
                    encode(message: _90.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Header;
                    fromJSON(object: any): _90.Header;
                    toJSON(message: _90.Header): unknown;
                    fromPartial(object: any): _90.Header;
                };
                Misbehaviour: {
                    encode(message: _90.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Misbehaviour;
                    fromJSON(object: any): _90.Misbehaviour;
                    toJSON(message: _90.Misbehaviour): unknown;
                    fromPartial(object: any): _90.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _90.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignatureAndData;
                    fromJSON(object: any): _90.SignatureAndData;
                    toJSON(message: _90.SignatureAndData): unknown;
                    fromPartial(object: any): _90.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _90.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.TimestampedSignatureData;
                    fromJSON(object: any): _90.TimestampedSignatureData;
                    toJSON(message: _90.TimestampedSignatureData): unknown;
                    fromPartial(object: any): _90.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _90.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.SignBytes;
                    fromJSON(object: any): _90.SignBytes;
                    toJSON(message: _90.SignBytes): unknown;
                    fromPartial(object: any): _90.SignBytes;
                };
                HeaderData: {
                    encode(message: _90.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.HeaderData;
                    fromJSON(object: any): _90.HeaderData;
                    toJSON(message: _90.HeaderData): unknown;
                    fromPartial(object: any): _90.HeaderData;
                };
                ClientStateData: {
                    encode(message: _90.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ClientStateData;
                    fromJSON(object: any): _90.ClientStateData;
                    toJSON(message: _90.ClientStateData): unknown;
                    fromPartial(object: any): _90.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _90.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ConsensusStateData;
                    fromJSON(object: any): _90.ConsensusStateData;
                    toJSON(message: _90.ConsensusStateData): unknown;
                    fromPartial(object: any): _90.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _90.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ConnectionStateData;
                    fromJSON(object: any): _90.ConnectionStateData;
                    toJSON(message: _90.ConnectionStateData): unknown;
                    fromPartial(object: any): _90.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _90.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ChannelStateData;
                    fromJSON(object: any): _90.ChannelStateData;
                    toJSON(message: _90.ChannelStateData): unknown;
                    fromPartial(object: any): _90.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _90.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PacketCommitmentData;
                    fromJSON(object: any): _90.PacketCommitmentData;
                    toJSON(message: _90.PacketCommitmentData): unknown;
                    fromPartial(object: any): _90.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _90.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PacketAcknowledgementData;
                    fromJSON(object: any): _90.PacketAcknowledgementData;
                    toJSON(message: _90.PacketAcknowledgementData): unknown;
                    fromPartial(object: any): _90.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _90.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PacketReceiptAbsenceData;
                    fromJSON(object: any): _90.PacketReceiptAbsenceData;
                    toJSON(message: _90.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: any): _90.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _90.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.NextSequenceRecvData;
                    fromJSON(object: any): _90.NextSequenceRecvData;
                    toJSON(message: _90.NextSequenceRecvData): unknown;
                    fromPartial(object: any): _90.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _91.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ClientState;
                    fromJSON(object: any): _91.ClientState;
                    toJSON(message: _91.ClientState): unknown;
                    fromPartial(object: any): _91.ClientState;
                };
                ConsensusState: {
                    encode(message: _91.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.ConsensusState;
                    fromJSON(object: any): _91.ConsensusState;
                    toJSON(message: _91.ConsensusState): unknown;
                    fromPartial(object: any): _91.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _91.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Misbehaviour;
                    fromJSON(object: any): _91.Misbehaviour;
                    toJSON(message: _91.Misbehaviour): unknown;
                    fromPartial(object: any): _91.Misbehaviour;
                };
                Header: {
                    encode(message: _91.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Header;
                    fromJSON(object: any): _91.Header;
                    toJSON(message: _91.Header): unknown;
                    fromPartial(object: any): _91.Header;
                };
                Fraction: {
                    encode(message: _91.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Fraction;
                    fromJSON(object: any): _91.Fraction;
                    toJSON(message: _91.Fraction): unknown;
                    fromPartial(object: any): _91.Fraction;
                };
            };
        }
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
            ibc: {
                applications: {
                    transfer: {
                        v1: _155.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _156.MsgClientImpl;
                    };
                    client: {
                        v1: _157.MsgClientImpl;
                    };
                    connection: {
                        v1: _158.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _71.QueryDenomTraceRequest): Promise<_71.QueryDenomTraceResponse>;
                            denomTraces(request?: _71.QueryDenomTracesRequest): Promise<_71.QueryDenomTracesResponse>;
                            params(request?: _71.QueryParamsRequest): Promise<_71.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _77.QueryChannelRequest): Promise<_77.QueryChannelResponse>;
                            channels(request?: _77.QueryChannelsRequest): Promise<_77.QueryChannelsResponse>;
                            connectionChannels(request: _77.QueryConnectionChannelsRequest): Promise<_77.QueryConnectionChannelsResponse>;
                            channelClientState(request: _77.QueryChannelClientStateRequest): Promise<_77.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _77.QueryChannelConsensusStateRequest): Promise<_77.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _77.QueryPacketCommitmentRequest): Promise<_77.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _77.QueryPacketCommitmentsRequest): Promise<_77.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _77.QueryPacketReceiptRequest): Promise<_77.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _77.QueryPacketAcknowledgementRequest): Promise<_77.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _77.QueryPacketAcknowledgementsRequest): Promise<_77.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _77.QueryUnreceivedPacketsRequest): Promise<_77.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _77.QueryUnreceivedAcksRequest): Promise<_77.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _77.QueryNextSequenceReceiveRequest): Promise<_77.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _81.QueryClientStateRequest): Promise<_81.QueryClientStateResponse>;
                            clientStates(request?: _81.QueryClientStatesRequest): Promise<_81.QueryClientStatesResponse>;
                            consensusState(request: _81.QueryConsensusStateRequest): Promise<_81.QueryConsensusStateResponse>;
                            consensusStates(request: _81.QueryConsensusStatesRequest): Promise<_81.QueryConsensusStatesResponse>;
                            clientStatus(request: _81.QueryClientStatusRequest): Promise<_81.QueryClientStatusResponse>;
                            clientParams(request?: _81.QueryClientParamsRequest): Promise<_81.QueryClientParamsResponse>;
                            upgradedClientState(request?: _81.QueryUpgradedClientStateRequest): Promise<_81.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _81.QueryUpgradedConsensusStateRequest): Promise<_81.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _86.QueryConnectionRequest): Promise<_86.QueryConnectionResponse>;
                            connections(request?: _86.QueryConnectionsRequest): Promise<_86.QueryConnectionsResponse>;
                            clientConnections(request: _86.QueryClientConnectionsRequest): Promise<_86.QueryClientConnectionsResponse>;
                            connectionClientState(request: _86.QueryConnectionClientStateRequest): Promise<_86.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _86.QueryConnectionConsensusStateRequest): Promise<_86.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
