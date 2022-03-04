import ION from '@decentralized-identity/ion-tools';
import {ionApiServer, ionLocalApiServer} from "../../config/ion";

async function resolveIonDid (did) {
  const didDocument = await ION.resolve(did, { nodeEndpoint: `${ionLocalApiServer}/identifiers/` });
  // const didDocument = await ION.resolve(did);
  console.log(JSON.stringify(didDocument, null, 2));
}

export default resolveIonDid;
