export interface Environment {
  production: boolean;
  apiHost: string;
  keycloakUrl: string;
}

export enum OsType {
  WINDOWS = 'WINDOWS',
  LINUX = 'LINUX',
  ANDROID = 'ANDROID',
  MACOS = 'MACOS',
}

export enum CpuArchitecture {
  X86 = 'X86',
  X86_64 = 'X86_64',
  ARM = 'ARM',
  ARM_64 = 'ARM_64',
}
