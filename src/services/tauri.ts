import { invoke, isTauri } from "@tauri-apps/api/core";
import type { AppInfo } from "@/types/app";

export class IpcError extends Error {
  readonly code: string;

  constructor(message: string, code = "IPC_ERROR") {
    super(message);
    this.name = "IpcError";
    this.code = code;
  }
}

export async function getAppInfo(): Promise<AppInfo> {
  if (!isTauri()) {
    throw new IpcError("Application information is only available in the desktop app.", "DESKTOP_ONLY");
  }

  try {
    return await invoke<AppInfo>("get_app_info");
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof error.message === "string"
    ) {
      const code =
        "code" in error && typeof error.code === "string" ? error.code : "IPC_ERROR";
      throw new IpcError(error.message, code);
    }

    if (typeof error === "string") {
      throw new IpcError(error);
    }

    throw new IpcError("The desktop command failed with an unexpected error.");
  }
}
