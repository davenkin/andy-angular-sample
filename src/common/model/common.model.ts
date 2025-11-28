export enum OsType {
  WINDOWS = 'WINDOWS',
  LINUX = 'LINUX',
  ANDROID = 'ANDROID',
  MACOS = 'MACOS',
}

export const OS_TYPE_NAMES = new Map<OsType, string>([
  [OsType.WINDOWS, 'Windows'],
  [OsType.LINUX, 'Linux'],
  [OsType.ANDROID, 'Android'],
  [OsType.MACOS, 'MacOS'],
]);

export enum CpuArchitecture {
  X86 = 'X86',
  X86_64 = 'X86_64',
  ARM = 'ARM',
  ARM_64 = 'ARM_64',
}

export const CPU_ARCHITECTURE_NAMES = new Map<CpuArchitecture, string>([
  [CpuArchitecture.X86, 'x86'],
  [CpuArchitecture.X86_64, 'x86_64'],
  [CpuArchitecture.ARM, 'ARM'],
  [CpuArchitecture.ARM_64, 'ARM64'],
]);
