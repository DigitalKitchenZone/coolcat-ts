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
import * as _103 from "./alloc/v1beta1/tx.amino";
import * as _104 from "./catdrop/v1beta1/tx.amino";
import * as _105 from "./alloc/v1beta1/tx.registry";
import * as _106 from "./catdrop/v1beta1/tx.registry";
import * as _107 from "./alloc/v1beta1/query.rpc.Query";
import * as _108 from "./catdrop/v1beta1/query.rpc.Query";
import * as _109 from "./mint/v1beta1/query.rpc.Query";
import * as _110 from "./alloc/v1beta1/tx.rpc.msg";
import * as _111 from "./catdrop/v1beta1/tx.rpc.msg";
import * as _159 from "./rpc.query";
import * as _160 from "./rpc.tx";
export namespace coolcat {
  export namespace alloc {
    export const v1beta1 = { ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._103,
      ..._105,
      ..._107,
      ..._110
    };
  }
  export namespace catdrop {
    export const v1beta1 = { ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._104,
      ..._106,
      ..._108,
      ..._111
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._10,
      ..._11,
      ..._12,
      ..._109
    };
  }
  export const ClientFactory = { ..._159,
    ..._160
  };
}