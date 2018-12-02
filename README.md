# _plus-minus_

#### _array programming challenge, 12.01.2018_

#### By _**planeswalker1**_

## Description

_This repository has been created in order to showcase a programming challenge about arrays completed in JavaScript._

## challenge

Given an array of numbers, calculate the fractions of its elements that are positive, negative, and are zeros. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10<sup>-4<sup> are acceptable.

For example, given the array arr = [1, 1, 0, -1, -1] there are 5 elements, two positive, two negative and one zero. Their ratios would be 2 / 5 = .400000, 2/ 5 = 0.400000 and 1 / 5 = 0.200000. It should be printed as

```
0.400000
0.400000
0.200000
```
<strong>Function Description</strong>

make a function that should print out the ratio of positive, negative and zero items in the array, each on a separate line rounded to six decimal places.

this function has the following parameter(s):

* numbers: an array of numbers

<strong>Input Format</strong>

The first line contains an integer, <em>n</em> , denoting the size of the array.

The second line contains <em>n</em> space-separated numbers describing an array of numbers <em>arr(arr[0], arr[1], arr[2], ..., arr[n - 1])</em>.

<strong>Constraints</strong>

<em>0 < n <= 100</em>

<em>-100 <= arr[i] <= 100</em>

<strong>Output Format</strong>

You must print the following  lines:

1. A decimal representing of the fraction of positive numbers in the array compared to its size.
2. A decimal representing of the fraction of negative numbers in the array compared to its size.
3. A decimal representing of the fraction of zeros in the array compared to its size.

<strong>Sample Input</strong>

```
6
-4 3 -9 0 4 1
```

<strong>Sample Output</strong>

```
0.500000
0.333333
0.166667
```

<strong>Explanation</strong>

There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.

The proportions of occurrence are positive: 3 / 6 = 0.500000, negative: 2 / 6 = 0.333333 and zeros: 1 / 6 = 0.166667.

## Setup/Installation Requirements

* _Clone repository_
* _Navigate to the cloned repository_
* _open main.js with code editor of choice to see my solution_

## Known Bugs

_I don't think there are any bugs_

## Support and contact details

_If you run into any issues or have questions, ideas or concerns contact me at daniel.munozdev@gmail.com_

## Technologies Used

_JavaScript_