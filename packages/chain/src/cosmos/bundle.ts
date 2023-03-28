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
import * as _112 from "./authz/v1beta1/tx.amino";
import * as _113 from "./bank/v1beta1/tx.amino";
import * as _114 from "./distribution/v1beta1/tx.amino";
import * as _115 from "./gov/v1beta1/tx.amino";
import * as _116 from "./staking/v1beta1/tx.amino";
import * as _117 from "./upgrade/v1beta1/tx.amino";
import * as _118 from "./authz/v1beta1/tx.registry";
import * as _119 from "./bank/v1beta1/tx.registry";
import * as _120 from "./distribution/v1beta1/tx.registry";
import * as _121 from "./gov/v1beta1/tx.registry";
import * as _122 from "./staking/v1beta1/tx.registry";
import * as _123 from "./upgrade/v1beta1/tx.registry";
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
import * as _161 from "./rpc.query";
import * as _162 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = { ..._14,
      ..._15,
      ..._16,
      ..._124
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._112,
      ..._118,
      ..._125,
      ..._133
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._22,
      ..._23,
      ..._24,
      ..._25,
      ..._26,
      ..._113,
      ..._119,
      ..._126,
      ..._134
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._27
      };
    }
    export namespace query {
      export const v1beta1 = { ..._28
      };
    }
    export namespace reflection {
      export const v2alpha1 = { ..._29
      };
    }
    export const v1beta1 = { ..._30
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._31
    };
    export namespace hd {
      export const v1 = { ..._32
      };
    }
    export namespace keyring {
      export const v1 = { ..._33
      };
    }
    export const multisig = { ..._34
    };
    export const secp256k1 = { ..._35
    };
    export const secp256r1 = { ..._36
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._114,
      ..._120,
      ..._127,
      ..._135
    };
  }
  export namespace gov {
    export const v1beta1 = { ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._115,
      ..._121,
      ..._128,
      ..._136
    };
  }
  export namespace params {
    export const v1beta1 = { ..._45,
      ..._46,
      ..._129
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._51,
      ..._116,
      ..._122,
      ..._130,
      ..._137
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._52
      };
    }
    export const v1beta1 = { ..._53,
      ..._54,
      ..._131
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._55,
      ..._56,
      ..._57,
      ..._117,
      ..._123,
      ..._132,
      ..._138
    };
  }
  export const ClientFactory = { ..._161,
    ..._162
  };
}