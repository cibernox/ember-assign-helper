import { assign as oAssign } from '@ember/polyfills'
import { helper as buildHelper } from "@ember/component/helper";

export function assign(params) {
  return oAssign({}, ...params);
}

export default buildHelper(assign);
