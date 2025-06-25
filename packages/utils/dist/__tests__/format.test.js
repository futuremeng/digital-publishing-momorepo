/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-05 22:06:33
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-05 22:06:40
 * @FilePath: /one-monorepo/packages/utils/src/__tests__/format.test.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
import { formatDate } from '../format';
import { describe, it, expect } from 'vitest';
describe('formatDate', () => {
    it('should format date correctly', () => {
        const date = new Date('2025-06-05T09:58:00');
        expect(formatDate(date)).toBe('2025-06-05');
    });
});
