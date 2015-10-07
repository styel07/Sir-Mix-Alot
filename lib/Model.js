var dstore = require('./DataStore.js').store;

function Model(schema) {
  this.schema = schema;
  this.id = null;

  for (var key in schema) {
    this[key] = null;
  }

  if (dstore.hasOwnProperty(this.constructor.name) === false) {
    // creates a space for this models data
    dstore[this.constructor.name] = [];
  }
}

Model.prototype.save = function() {
  if (this.id === null) {
    this.id = this.getNextId();
  }
};

Model.destroy = function() {

};

Model.getNextId = function() {
  var counter = 0;
  for (var i = 0; i < dstore[this.prototype.constructor.name].length; i++) {
    if (dstore[this.prototype.constructor.name][i].id > 0) {
      counter = dstore[this.constructor.name][i].id + 1;
    }
  }
  return counter + 1;
};

module.exports = Model;
