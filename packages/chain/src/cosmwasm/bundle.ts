import * as _58 from "./wasm/v1/genesis";
import * as _59 from "./wasm/v1/ibc";
import * as _60 from "./wasm/v1/proposal";
import * as _61 from "./wasm/v1/query";
import * as _62 from "./wasm/v1/tx";
import * as _63 from "./wasm/v1/types";
import * as _139 from "./wasm/v1/tx.amino";
import * as _140 from "./wasm/v1/tx.registry";
import * as _141 from "./wasm/v1/query.rpc.Query";
import * as _142 from "./wasm/v1/tx.rpc.msg";
import * as _163 from "./rpc.query";
import * as _164 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._139,
      ..._140,
      ..._141,
      ..._142
    };
  }
  export const ClientFactory = { ..._163,
    ..._164
  };
}