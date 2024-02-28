### Auto Text Animation

# Async-Await Approach

--> Using async function and promise making delays.

# Recursion Approach

-->without returning the same function but executing it using setTimeout

# Leanings

--> await is not in use if the function is not returning the promise.

--> We cannot use await with setTimeout because it's not a promise.

--> The async function having loop inside it we call the function which returning the promise cause the indirectly the async function will also returning the promise and we can await it
example: In asyncAwaited.js we use method to do same thing as of recursion with setTimeout in that we have function type which run the loop and that loop executed the awaited function which returns the promise which can indirectly cause the type function appearing as a returning the promise that's why we use that type function in the start function and use await in front of it.
