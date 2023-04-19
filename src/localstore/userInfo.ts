import CryptoJS from 'crypto-js';
import { STORAGE_USER_KEY } from '@/constants/index.ts';

class UserInfoStorage {
  private tasks: Record<string, Function> = {};

  private encrypt(data: any): string {
    // 将 data 对象转成字符串，然后进行加密操作
    const str = JSON.stringify(data);
    // 这里使用 CryptoJS 库进行 AES 加密操作
    return CryptoJS.AES.encrypt(str, 'secret-key').toString();
  }

  private decrypt(str: string): any {
    // 将加密后的字符串进行解密操作
    const bytes = CryptoJS.AES.decrypt(str, 'secret-key');
    // 将解密后的字符串转成对象
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  public get(key: string) {
    // 解密取值
    const encryptedData = localStorage.getItem(key);
    if (encryptedData) {
      return this.decrypt(encryptedData);
    }
    return null;
  }

  public set(value: any) {
    // 加密存储
    const encryptedData = this.encrypt(value);
    localStorage.setItem(STORAGE_USER_KEY, encryptedData);

    // 执行 tasks 中的回调函数
    for (const key in this.tasks) {
      if (key === STORAGE_USER_KEY) {
        this.tasks[key](value);
      }
    }
  }

  public clear() {
    localStorage.removeItem(STORAGE_USER_KEY);
  }

  public subscribe(key: string, cb: Function) {
    // 事件订阅，监听变化
    this.tasks[key] = cb;
  }
}

export const uis = new UserInfoStorage();
