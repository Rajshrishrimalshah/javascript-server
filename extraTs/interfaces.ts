export interface IDPattern {
  (max: number): void;
}

export interface IEPattern {
  (max: number): void;
}

export interface IValid {
    traineeEmail: string;
    reviewerEmail: string;
  }



export interface IHasPer {
  (module: string, role: string, permission: string): boolean;
}
