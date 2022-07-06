export class EventManager {
    private readonly subscribers: (() => void)[] = [];
  
    subscribe(fn: () => void): void {
      this.subscribers.push(fn);
    }
  
    unsubscribe(fn: () => void): void {
      const index = this.subscribers.indexOf(fn);
      if (index >= 0) {
        this.subscribers.splice(index, 1);
      }
    }
  
    notify(): void {
      this.subscribers.forEach((s) => s());
    }
  }