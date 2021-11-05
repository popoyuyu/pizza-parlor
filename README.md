# _Pizza Parlor_

#### By _**Jeff Lai**_

#### _Pizza Parlor Web Application_

## Technologies Used

* _HTML_
* _JavaScripit_
* _jQuery_
* _CSS_
* _Boostrap_
* _Markdown_

## Description

_This browser application allows users to see my accomplishments and projects as a developer!_

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of directory._
* _Open index.html in your browser._
* _Site may also be viewed on GitHub Pages at popoyuyu.github.io/portfolio-landing-page_



## Known Bugs

* _No known issues._

## License

_Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._


Copyright (c) _November 5th 2021_ _Jeff Lai_


## TDD

#### Describe: Pizza()

* _Tests: "It should return a Pizza object with two properties for size and toppings"_
*_Code: const myPizza = new Pizza ("medium", ["anchovies", "pineapple"]);_
*_Expected Ouput: Pizza { size: "medium", toppings: ["anchovies", "pineapple"] }_

#### Describe: Pizza.prototype.sizeCost
*_Tests: "It should return the cost of $10 for small, $12 for medium, or $15 for large_
*_Code: const myPizza = new Pizza ("medium", ["anchovies"]);_
        *_pizza.sizeCost();_
        *_pizza;_
*_Expected Output: Pizza { size: "medium", toppings: ["anchovies"] cost:10}_
