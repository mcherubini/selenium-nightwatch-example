const EventEmitter = require('events');

class SelectDropdown extends EventEmitter {
  command(ms, cb) {
    // If we don't pass the milliseconds, the client will
    // be suspended indefinitely
    if (!ms) {
      return this;
    }

    setTimeout(() => {
      // if we have a callback, call it right before the complete event
      if (cb) {
        cb.call(this.api);
      }

      this.emit('complete');
    }, ms);

    return this;
  }
}

module.exports = SelectDropdown;