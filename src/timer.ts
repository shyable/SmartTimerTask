export type ExecutionFunc = () => void;

export interface Timer {
  getTime(): number;
  runDelayed(func: ExecutionFunc, waitTime: number): void;
  cancel(): void;
}

export class DummyTimer implements Timer {
  private _pendingTask: number = 0;

  getTime(): number {
    return Date.now();
  }

  runDelayed(func: ExecutionFunc, waitTime: number): void {
    if (this._pendingTask) throw new Error(`A task is already running!`);

    this._pendingTask = setTimeout(() => {
      func();
      clearInterval(this._pendingTask);
      this._pendingTask = 0;
    }, waitTime);
  }

  cancel(): void {
    if (this._pendingTask) clearTimeout(this._pendingTask);
    this._pendingTask = 0;
  }
}
