import { http } from "@tauri-apps/api";
import { YNetwork } from "ynetwork";

async function tauriRequestResolver({ method, url, data, headers }) {
  try {
    const response = await http.fetch(url, {
      url,
      method: method.toUpperCase(),
      body: JSON.stringify(data),
      headers,
      responseType: 2,
    });

    let result = response.data;
    let status = response.status ?? -1;
    let responseHeaders = response.headers ?? {};

    if (response.headers["content-type"]?.includes("application/json")) {
      result = JSON.parse(result);
    }

    return {
      headers: responseHeaders,
      status,
      data: result,
    };
  } catch (error) {
    return {
      status: -1,
      data: error.message,
      headers: {},
      error,
    };
  }
}

if (import.meta.env.VITE_HTTP_HANDLER === "NATIVE") {
  YNetwork.setRequestRunner(tauriRequestResolver);
}
