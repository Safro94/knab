# Technical questions

1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding assignment then use this as an opportunity to explain what you would add.
I spent like 5 to 6 hours but splitted between two days. I'd have added some user accounts, a list with all the currencies so the user could select the ones that he wanted to see.

2. What was the most useful feature that was added to the latest version of your language of choice? Please include a snippet of code that shows how you've used it.
The latest version(ES2021) added the replaceAll method which is super useful for string replacement. You can use it like 

```
let str = 'I have a Macbook, I love my Macbook'
str = str.replaceAll('Macbook', 'dog');
```

But the best features that JS introduced recently are the Nullish Coalescing operator and the Optional Chaining.

The Nullish Coalescing operator is awesome because before this you only had the || operator but this operator checks for falsy values; the Nullish Coalescing operator checks for null and undefined. For example 

```
console.log(12 || "not found") // 12
console.log(0  || "not found") // "not found"

console.log(true  || "not found") // true
console.log(false || "not found") // "not found"

console.log(12 ?? "not found") // 12
console.log(0  ?? "not found") // 0

console.log(true  ?? "not found") // true
console.log(false ?? "not found") // false

console.log(undefined ?? "not found") // "not found"
console.log(null      ?? "not found") // "not found"
```

The optional chaining allows you to write code without doing a lot of if's when you have an object with nested properties. For example,

```
let user = {};
console.log(user.address.street); // Error

console.log(user?.address?.street); // undefined
```

3. How would you track down a performance issue in production? Have you ever had to do this?
I had a couple of times when I had to track down a performance issue. The first thing that I'd check is the infrastructure, with this I mean server CPU usage, watch new relic statistics, etc. Then I'd try to see if some service is taking to long to respond, or a 3rd party service is malfunctioning.
If that's all fine then I'd open the devtools and check the performance tab and also the React profiling tools. If I see a performance issue with some React component then I'd try to use useCallback/useMemo and/or React memo to fix that.
If the bundle is too big, maybe I'd try to split the code in chunks and return only the chunks with the code that should be used in that specific page and then prefetch/preload the rest.
If loading the images is taking too long, I'd try to see if a CDN is being used, or try to add HTTP2, etc.

4. What was the latest technical book you have read or tech conference you have been to? What did you
learn?
The last "conference" was an online workshop that I saw from Kent Dodds, the creator of React Testing Library. I learnt how to use the library, not to test implementation details but to test the user interaction with the UI. When and how to mock 3rh party modules, etc.

5. What do you think about this technical assessment?
I think it's okay but maybe gives a lot of freedom and someone can potentially make the challenge too complex just to show 'he knows what he is doing' but sometimes making something more complex doesn't mean you know more than other person. I'd also add some UI sketch because someone could also make the UI super simple and the other one create a full page and go way over the scope of the challenge.

6. Please, describe yourself using JSON.
```
{
  "name": "Matias Safranchik",
  "age": 26,
  "status": "Single",
  "kids": 0,
  "family": {
    "mother": {
      "name": "Elizabeth"
    },
    "father": {
      "name": "Gustavo"
    }
  },
  "languages": [
    "spanish",
    "english"
  ],
  "hobbies": [
    "movies",
    "cooking",
    "gym",
    "programming"
  ],
  "nationalities": [
    "Argentinian",
    "Polish"
  ]
}
```