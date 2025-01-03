

    ```` typescript
    const showError = (val: string): void => {
    console.log(val);
    };

    // this never return a value , when a error is found
    const handleError = (errMsg: string): never => {
    throw new Error(errMsg);
    console.log(errMsg);
    };
    showError('x');
    console.log(showError('abhay'));
    // this returns a undefined, as wb declare it as void
    console.log('check1');
    console.log(handleError('abhay'));
    console.log('check2 ');
// above code returns a error, as t can never return , but we are using a value for returning.
````
