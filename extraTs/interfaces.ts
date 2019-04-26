export interface Ipattern {
  max: number;
}

export interface Valid {
  traineeEmail: string;
  reviewerEmail: string;
}

export interface hasPer {
  (module: string, role: string, permission: string): boolean;
}
