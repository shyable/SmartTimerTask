# Smart-Timer Task
You are provided with a DummyTimer class able to run functions delayed. It contains 3 methods:

- getTime() - Returns the current system time.
- runDelayed(func, waitTime) - Runs a function delayed.
- cancel() - Cancels the current pending task.

The only issue with this Timer is that you cannot run multiple executions on it. It can only run one function at a time.

Write your own SmartTimer, based on this Timer which can queue multiple executions without failing.

An example of the dummy timer failing because of using the DummyTimer:

```typescript
// A failing example with the dummy timer
let myTimer = new DummyTimer();

myTimer.runDelayed(() => console.log('Hello world!'), 1000);

// Our code will fail here, this timer only supports one queued task
myTimer.runDelayed(() => console.log('Nice one!'), 2000);
```

## Running this project
You can simply run the following:
> npm start

And you are good to go!