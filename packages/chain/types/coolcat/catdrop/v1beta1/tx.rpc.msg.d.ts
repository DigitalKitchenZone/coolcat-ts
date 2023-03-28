import { Rpc } from "../../../helpers";
import { MsgClaimFor, MsgClaimForResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    claimFor(request: MsgClaimFor): Promise<MsgClaimForResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    claimFor: (request: MsgClaimFor) => Promise<MsgClaimForResponse>;
}
