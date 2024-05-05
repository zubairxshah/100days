/* Question 23: Conditional Tests: Write a series of conditional tests. 
Predict the results of each test. */

let a = 'Time';
let b = 'Money';
console.log('let a = \'Time\'\; let b = \'Money\';')

let c = a === 'Time' && b === 'Money';
console.log('let c = a === \'Time\' && b === \'Money\'\;')
{console.log('A truthy statement '+ c)};

c = a === 'Time' || b === 'Money';
console.log('c = a === \'Time\' || b === \'Money\'');
{console.log('A truthy statement '+ c)};

c = a !== 'Time' || b === 'Money';
console.log('c = a !== \'Time\' || b === \'Money\'');
{console.log('A truthy statement '+ c)};

c = a === 'Date' || b === 'Money';
console.log('c = a === \'Date\' || b === \'Money\'');
{console.log('A truthy statement '+ c)};

c = a === 'Time';
console.log('c = a === \'Time\'');
{console.log('A truthy statement '+ c)};

c = a !== 'Time' || b !== 'Money';
console.log('c = a !== \'Time\' || b !== \'Money\'')
{console.log('A falsy statement '+ c)};

c = a !== 'Time';
console.log('c = a !== \'Time\'');
{console.log('A falsy statement '+ c)};

c = a === 'Date';
console.log('c = a === \'Date\'')
{console.log('A falsy statement '+ c)};

c = b === 'Cash';
console.log('c = b === \'Cash\'')
{console.log('A falsy statement '+ c)};

c = a === 'Date' && b === 'Money';
console.log('c = a === \'Date\' && b === \'Money\'')
{console.log('A falsy statement '+ c)};