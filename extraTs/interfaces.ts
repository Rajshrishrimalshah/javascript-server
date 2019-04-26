export interface Ipattern {
  (max: number):void;
}

export interface Valid {
  (traineeEmail: string,reviewerEmail: string):void;
}

export interface hasPer {
  (module: string, role: string, permission: string): boolean;
}
