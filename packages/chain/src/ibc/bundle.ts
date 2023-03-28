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
import * as _143 from "./applications/transfer/v1/tx.amino";
import * as _144 from "./core/channel/v1/tx.amino";
import * as _145 from "./core/client/v1/tx.amino";
import * as _146 from "./core/connection/v1/tx.amino";
import * as _147 from "./applications/transfer/v1/tx.registry";
import * as _148 from "./core/channel/v1/tx.registry";
import * as _149 from "./core/client/v1/tx.registry";
import * as _150 from "./core/connection/v1/tx.registry";
import * as _151 from "./applications/transfer/v1/query.rpc.Query";
import * as _152 from "./core/channel/v1/query.rpc.Query";
import * as _153 from "./core/client/v1/query.rpc.Query";
import * as _154 from "./core/connection/v1/query.rpc.Query";
import * as _155 from "./applications/transfer/v1/tx.rpc.msg";
import * as _156 from "./core/channel/v1/tx.rpc.msg";
import * as _157 from "./core/client/v1/tx.rpc.msg";
import * as _158 from "./core/connection/v1/tx.rpc.msg";
import * as _165 from "./rpc.query";
import * as _166 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._70,
        ..._71,
        ..._72,
        ..._73,
        ..._143,
        ..._147,
        ..._151,
        ..._155
      };
      export const v2 = { ..._74
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._75,
        ..._76,
        ..._77,
        ..._78,
        ..._144,
        ..._148,
        ..._152,
        ..._156
      };
    }
    export namespace client {
      export const v1 = { ..._79,
        ..._80,
        ..._81,
        ..._82,
        ..._145,
        ..._149,
        ..._153,
        ..._157
      };
    }
    export namespace commitment {
      export const v1 = { ..._83
      };
    }
    export namespace connection {
      export const v1 = { ..._84,
        ..._85,
        ..._86,
        ..._87,
        ..._146,
        ..._150,
        ..._154,
        ..._158
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._88
      };
    }
    export namespace solomachine {
      export const v1 = { ..._89
      };
      export const v2 = { ..._90
      };
    }
    export namespace tendermint {
      export const v1 = { ..._91
      };
    }
  }
  export const ClientFactory = { ..._165,
    ..._166
  };
}