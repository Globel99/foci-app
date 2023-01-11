/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_KEY2: string;
  readonly VITE_TRIPLED_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
