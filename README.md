animateContent
==============

JQuery plug-in for animate your content on your page

Demo
==== 

[Go to the demo page](http://syncoop.maisondacote.fr/demo/animateContent/)


Quick use
=========

Suppose you have this code :

```html
<ul>
  <li data-ordre="0" data-ClassName="first_content" class="foo first"> 1st content</li>
  <li data-ordre="1" data-ClassName="second_content" class="foo"> 2nd content</li>
  <li data-ordre="2" data-ClassName="third_content" class="foo"> 3rd content</li>
</ul>

<div class="first_content"> Lorem ipsum </div>

<div class="second_content"> dolor sit amet </div>

<div class="third_content"> consectetur adipiscing elit. </div>

```

When you call `$('.foo').animateContent()`, the content in the "li" tag become clickable, and the content 
in the div are subject to css property ( display: none, opacity: 0, etc ).



Arguments
=========

speed: animation speed in milliseconds ( default : 500 )

gap: lag between the initial position and the position after animation in px ( default : -150 ). Used on the animation "meltedTranslation".

effect: Effect of the animation ( "meltedTranslation", "melted" ).

callback: Function call after the animation.



Specifics classes
=================

first: class that designates the first element shown. 



Data attributes
===============

data-ClassName: it designates the associated class.

data-ordre: defines the order of appearance of the elements.

