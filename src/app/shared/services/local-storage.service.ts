export class LocalStorageService {
  private storage = localStorage;

  public get(key: string): any {
    return this.storage.getItem(key);
  }

  public set(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public remove(key: string): void {
    this.storage.removeItem(key);
  }
}
