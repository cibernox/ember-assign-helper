import { helper as buildHelper } from "@ember/component/helper";

export function assign(params) {
  return Object.assign({}, ...params);
}

export default buildHelper(assign);
