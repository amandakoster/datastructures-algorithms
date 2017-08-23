
//STACKS: push, pop, peek, count

function stack(capactiy) {
  this.capacity = capactiy || infinity;
  this.storage = {};
  this.count = 0;
}

stack.proptotype.push = function(value){
  if (this.count < this.capacity) {
    this.storage[this.count ++] = value;
    return this.count;
    }
{
  return 'remove one value or else stack overflow'
};

stack.prototype.pop = function(){
  var value = this.storage[--this.count];
  delete this.storage[this.count];
  if (this.count < 0){
    this.count = 0;
  }
  return value;
};

stack.prototype.peek = function() {
return this.storage[this.count -1]
};

stack.prototype.count = function() {
  return this.count
};
