export interface RegisterReq { name: string; email: string; phone: string; }
export interface VerifyReq { email: string; code: string; }
export interface Tokens { accessToken: string; refreshToken: string; }
export interface MessageDto { id?: string; direction: 'in'|'out'; body: string; createdUtc?: string; }
export interface VitalEntry { id?: string; type: 'BP'|'HR'|'SpO2'|'Weight'|'Temp'; value1: number; value2?: number; createdUtc?: string; }
export interface Med { id: string; name: string; dose: string; next: string; }
