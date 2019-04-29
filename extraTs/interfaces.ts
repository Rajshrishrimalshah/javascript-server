export interface Ipattern {
  (max: number): void;
}

export interface Valid {
  (users:{traineeEmail: string;reviewerEmail: string;}[]): void;
}

export interface hasPer {
  (module: string, role: string, permission: string): boolean;
}
