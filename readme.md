### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

1.getElementById give first mach one element. getelementByClassName give a htmlCollaction ,querySelector give a first match element ,querySelectorAll give nodelist. 2. document.createElement() this for create element.document.getElementById().appendChild() this for insert a new element into dom.
3.when one element under another element and we added addevent listener on parent element and child element than click child element as soon as fire child element evenlistener and parent event listener. this is event bubbling.
4.when we added event listener parent element and click his child element with function peramiter than we got element that element we have clicked. this is event delegation.
5.preventDefault() dose stop reloading page when we submit form buttom and stopPropagation() stop event bubbling.
