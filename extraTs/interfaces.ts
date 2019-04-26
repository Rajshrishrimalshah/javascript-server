export interface Ipattern {
  (max: number):void;
}

export interface Valid {
  traineeEmail: string,reviewerEmail: string;
}

export interface hasPer {
  (module: string, role: string, permission: string): boolean;
}
