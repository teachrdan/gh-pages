---
title: Must-Ask Questions for Number Inputs
date: "2017-07-14T09:00:00"
layout: post
path: "/2017-07-14-must-ask-questions-for-number-inputs/"
tags:
	- JavaScript, Numbers, Interviews
---

### Here's everything you have to know about your number inputs (JavaScript edition)

As a data primitive, it's easy to forget that there are a number of things you can mistakenly assume about numbers as an input to any function. Here are (all?) the questions you have to ask:

0. Will it always be a number?

  Don't assume your input will always be a number even if it's supposed to be. Add validation (and tests!) wherever needed. This is especially important in JavaScript, where operations like ``10 > 'a'`` evaluate to a boolean, rather than throwing an error.

0. Can the number be negative?

  Assuming an input will be positive is an easy mistake. If they can be negative, make sure your function will still produce expected output. And if the input should never be negative, see #1 above.

0. Can it be ``NaN``, ``inifinity`` or any other non-number number?

	You might not be surprised that ``Infinity`` / ``Number.POSITIVE_INFINITY`` and ``Number.NEGATIVE_INFINITY`` are numbers. But you might be surprised that ``NaN`` is a number. Your code should be able to handle any of these numbers.

0. Will it always be an integer?

	We all know that ``0.4 + 0.2 = 0.6000000000000001``. JavaScript's handling of decimels blows darts. If your function is doing math on its number inputs, account for non-integer values if they may occur.

0. Is it big enough to cause a stack overflow?

  Self-explanatory. If you're dealing with values that may cause a stack overflow, use alogorithms or libraries to help you deal with them.

0. Will it always be a decimel?

  Ok, this is mostly for job interviews. (**Note: All of these questions are good to ask when coding in job interviews!**) But can you assume inputs won't be in the other two forms of numbers accepted by vanilla JS, hexadecimal and binary? Remember that ``parseint()`` takes [any radix between 2 and 36](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) as its second parameter!

0. BONUS the first! For collections of numbers, will the numbers be unique?

  If you know numbers will only occur once, algorithms may be easier to write. And if you know numbers *should* only occur once, you have another case to validate and test for.

0. BONUS the second! For collections of numbers, will the numbers be sorted?

  If you know inputs will be sorted, many operations can be made less expensive.
