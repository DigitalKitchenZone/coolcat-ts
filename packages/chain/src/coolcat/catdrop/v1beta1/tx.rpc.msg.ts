import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgClaimFor, MsgClaimForResponse } from "./tx";
/** Msg defines the Msg service. */

export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  claimFor(request: MsgClaimFor): Promise<MsgClaimForResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* this line is used by starport scaffolding # proto/tx/rpc */


  claimFor = async (request: MsgClaimFor): Promise<MsgClaimForResponse> => {
    const data = MsgClaimFor.encode(request).finish();
    const promise = this.rpc.request("coolcat.catdrop.v1beta1.Msg", "ClaimFor", data);
    return promise.then(data => MsgClaimForResponse.decode(new _m0.Reader(data)));
  };
}