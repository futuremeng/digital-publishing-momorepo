/*
 * @Author: be_loving@163.com
 * @Date: 2024-12-20 10:55:55
 * @LastEditors: be_loving@163.com
 * @LastEditTime: 2024-12-20 17:28:42
 * @FilePath: /one-monorepo/packages/one-vite-app-micro-basic/build/federation/federationConf.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import federation from "@originjs/vite-plugin-federation";

export function federationConf(isBuild: boolean) {
  return federation({
    name: "one-main",
    remotes: {
      "one-basic": (isBuild ? "" : "http://localhost:7001") + "/one-basic/assets/remoteEntry.js",
    },
    shared: ["vue"],
  });
}
