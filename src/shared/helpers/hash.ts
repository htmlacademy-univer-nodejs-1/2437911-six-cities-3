import * as crypto from 'node:crypto';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHash = crypto.createHmac('sha256', salt);
  return shaHash.update(line).digest('hex');
};
