/*
 * @Author: FutureMeng futuremeng@gmail.com
 * @Date: 2025-06-05 22:00:13
 * @LastEditors: FutureMeng futuremeng@gmail.com
 * @LastEditTime: 2025-06-05 22:04:34
 * @FilePath: /one-monorepo/packages/utils/src/audio.ts
 * @Description:
 * Copyright (c) 2025 by Jiulu.ltd, All Rights Reserved.
 */
export function playAudio(url) {
    return new Promise((resolve, reject) => {
        const audio = new Audio(url);
        audio.onended = () => resolve();
        audio.onerror = () => reject(new Error('Failed to play audio'));
        audio.play();
    });
}
