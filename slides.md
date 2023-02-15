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
- Developer | Musician | Author
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

<div v-click-hide>

Inheritance is the process by which genetic information is passed on from parent to child.

</div>

<v-after>

**In Programming**: Inheritance is the process by which features are passed on from parent to child.

</v-after>

---
layout: quote
---
```cpp {1-4|1-9|6-12|6-15|1-9,12,17-18|20-21}
class SmartPhone {
  public:
  void captureImages() {}
};

class Iphone: public SmartPhone {
  public:
  void faceIDScan() {}
};

// creating object of Iphone
Iphone x;

// calling method on object
x.faceIDScan();

// calling an inherited method
x.captureImages();

// calling unknown method
x.blablabla(); // ❌ error
```

---
layout: center
---

<v-clicks>

- JavaScript is not class-based language
- It's an **object-oriented** language
</v-clicks>


---
layout: quote
---

# Objects are first-class citizen

```ts {1-3|1-6|1-3,8-9}
const greeting = {
  message: "Welcome to freeCodeCamp!"
};

// accessing properties
greeting.message; // Welcome to freeCodeCamp!

// where does this comes from?
greeting.toString(); 
```

---
layout: center
---

<v-clicks>

- Every object has a special property called **[[Prototype]]**.
- This property is a **link** to an object.
- Since **[[Prototype]]** is object, it also has it's own **[[Prototype]]**
</v-clicks>

<!--
it's called prototype chain.
-->

---
layout: center
---

# Demo

<!-- const obj = {}; -->
---
layout: center
---
# How's this chain constructed?
---
layout: center
---
# Object literal

```ts
const obj = {};
```

---
layout: center
---

# Object Constructor

```ts
const obj = new Object();
```
---
layout: center
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
layout: center
---

# Constructor method

```ts
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
}

Rectangle.prototype.calcArea = function() {
  return this.height * this.width;
}

const rectangle = new Rectangle(10, 20);
```

<v-click>

🧠 Why use **prototype**?
</v-click>
---
layout: center
---

# ES6 `class` keyword

```ts
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

const rectangle = new Rectangle(10, 20);
```

---
layout: center
---

# Using `extends`

```ts
class Parent {
  scold() {}
}

class Child extends Parent {
  haveFun() {}
}

const child = new Child();
```
---
layout: center
---


# What happens when we access a property?

<!-- Show that in devtools -->
---

# How to access the `[[Prototype]]`

```ts
const obj = {};

// standard
Object.getPrototypeOf(obj);

// non-standard
obj.__proto__;
```

---

# How to check if property is inherited?

```ts
const object1 = {"property1": 42};

console.log(object1.hasOwnProperty('property1'));
// Expected output: true

console.log(object1.hasOwnProperty('toString'));
// Expected output: false
```

---
layout: center
---
# Fancy reading it?

https://inders.in/blog/inheritance-with-javascript-prototypes
