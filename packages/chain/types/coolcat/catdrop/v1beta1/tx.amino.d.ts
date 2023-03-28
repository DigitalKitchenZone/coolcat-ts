import { AminoMsg } from "@cosmjs/amino";
import { MsgClaimFor } from "./tx";
export interface MsgClaimForAminoType extends AminoMsg {
    type: "/coolcat.catdrop.v1beta1.MsgClaimFor";
    value: {
        sender: string;
        address: string;
        action: number;
    };
}
export declare const AminoConverter: {
    "/coolcat.catdrop.v1beta1.MsgClaimFor": {
        aminoType: string;
        toAmino: ({ sender, address, action }: MsgClaimFor) => MsgClaimForAminoType["value"];
        fromAmino: ({ sender, address, action }: MsgClaimForAminoType["value"]) => MsgClaimFor;
    };
};
