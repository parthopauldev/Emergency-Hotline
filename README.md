
 What is the difference between getElementByIdgetElementsByClassName, and querySelector / querySelectorAll?
   
Ans: getElementById give a first match element  getelementByClassName give a htmlCollaction ,querySelector give a first match element ,querySelectorAll give nodelist. getElementByIdgetElementsByClassName  is live, querySelector / querySelectorAll is static.

How do you create and insert a new element into the DOM?

Ans: document.createElement() this for create element and body.appendChild() this for insert a new element into dom.

What is Event Bubbling and how does it work?

Ans: when one element under another element and we added addevent listener on parent element and child element than click child element as soon as fire child element evenlistener and parent event listener. this is event bubbling.

What is Event Delegation in JavaScript? Why is it useful?
   
Ans: when we added event listener parent element and click his child element with function peramiter and we use peramiter.target than we get element that element we have clicked. this is event delegation.it is very helpful we can use this instead of loop for better performance.

 What is the difference between preventDefault() and stopPropagation() methods?
    
Ans: preventDefault() dose stop reloading page when we click  submit button on form and stopPropagation() stop event bubbling.
