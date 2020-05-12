exports.getDate = function() {
  // Check for day of the week: 0 = sunday; 6 = saturday (weeks start at 0)
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
    // Check for day of the week: 0 = sunday; 6 = saturday (weeks start at 0)
    const today = new Date();
    const options = {
      weekday: "long",
    };
    
    return today.toLocaleDateString("en-US", options);
  }
  
