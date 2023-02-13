---
# try also 'default' to start simple
theme: default
layout: intro
colorSchema: 'auto'
# monaco text editor
# https://sli.dev/custom/highlighters.html
highlighter: shiki
lineNumbers: true
monaco: true
css: unocss
themeConfig:
  primary: #bb1450
transition: slide-left
---

# Inheritance in JavaScript
And how to use it

---
layout: image-right
# the image source
image: 'images/dp.jpg'
---
# Indermohan Singh

Developer Advocate at <a  href="https://dynatrace.com"><logos-dynatrace-icon mr-1/>Dynatrace</a>

<v-clicks>

- From Ludhiana 🇮🇳.
- <logos-auth0-icon /> Auth0 Ambassador
- <logos-ionic-icon/> Ionic Developer Expert
- I often write at <a href="https://inders.in"> inders.in</a>
- Creating courses on <a href="https://inders.in/courses" target="_new" ><mdi-book-open-page-variant mr-1 />inders.in/courses</a>
- Say hi at <a href="https://twitter.com/imsinghk7"><logos-twitter mr-1 class="animate-bounce"/>@imsinghk7</a>

</v-clicks>
---
layout: image
image: 'https://media3.giphy.com/media/h7QWOF5DvIPe0u5xCf/giphy.gif?cid=ecf05e47q81yxc3cqpxtfl8hqba97ylmrru58viw4ovmbop7&rid=giphy.gif&ct=g'
---

---
layout: image
image: 'https://media3.giphy.com/media/rQNY1TP5TUqPAKgx2A/giphy.gif?cid=ecf05e47ioi8v7yp53y8jpeimm77cqvskuzhv8jtr2cme67l&rid=giphy.gif&ct=s'
---


---
layout: quote
---

Explain Inheritance to a 5 year old

<v-click>


> Sure Let's say you have a toy box that has toys inside it. The toy box is like a class in programming ... ... ...
> ---
> --- ChatGPT: AI slightly better than B**d
</v-click>

---
layout: center
---

Inheritance history and general concept


---

# prototype

<v-clicks>

- A special property that all objects in JS have.
- A reference(link) to another object.
- Since protoype is object, it also have prototype.
- `[[Prototype]]` ECMAScript standard.

</v-clicks>
---
layout: center
---
# Reading prototype
```ts
const obj = {};

// standard way
Object.getPrototypeOf(obj);

// or
obj.__proto__;
```

---

# What happens when we access a property?

1.  The JavaScript engine looks for the property on the object
    1.  If it finds the property, then it returns it
1.  Otherwise, the JavaScript engine checks the inherited property of an object by looking at `[[Prototype]]`
    1.  If the property is found, then it returns it
    1.  Otherwise, it looks into `[[Prototype]]` of `[[Prototype]]`. This chain ends when either the property is found or there is no `[[Prototype]]` left, which means that we have reached the end of the prototype chain

---

# Multiple ways of Inheritance

---

# Object literal

```ts
const obj = {};
// prototype comes from Object
```

---

# Object Constructor

```ts
const obj = new Object(); // prototype comes from Object
```
---

# `Object.create` method

```ts {1|3-6|8-9|all}
Object.create(prototype); // returns object with given prototype

// prototype object
let SmartPhone = {
  captureImages: function() {}
};

let iPhone = Object.create(SmartPhone);
iPhone.captureImages(); // works
```
---

# Constructor method


---

# ES6 `class` keyword

---
layout: center
---
# Fancy reading it?

https://inders.in/blog/inheritance-with-javascript-prototypes
