export function isBoolean(value) {
  // Write code that checks if the type of `value` is Boolean.
  if(typeof value === "boolean"){
    console.log("Sangha Yoon");
    return true;
  } else {
    return false;
  }
}

export function isNumber(value) {
  // Write code that checks if the type of `value` is Number.
  if(typeof value === "number"){
    return true;
  }  else {
    return false;
  }
}

export function isString(value) {
  // Write code that checks if the type of `value` is String.
  if(typeof value === "string"){
    return true;
  } else {
    return false;
  }
}

export function isNull(value) {
  // Write code that checks if the type of `value` is Null.
  if(value === null){
    return true;
  } else {
    return false;
  }
}

export function isUndefined(value) {
  // Write code that checks if the type of `value` is Undefined.
  if(typeof value === "undefined"){
    return true;
  } else {
    return false;
  }
}

export function isFunction(value) {
  // Write code that checks if the type of `value` is Function.
  if(typeof value === "function"){
    return true;
  } else {
    return false;
  }
}

export function isArray(value) {
  // Write code that checks if the type of `value` is Array.
  if(value.constructor === Array){
    return true;
  } else {
    return false;
  }
}

export function isObject(value) {
  // Write code that checks if the type of `value` is Object.
  // return true if the value is plain object, and return false if the value is not plain object such as array, function, etc

  //Null and undefined should not be allowed because they cannot be measured in constructor property!!!
  if(value === null){
    return false;
  }

  if(typeof value === "undefined"){
    return false;
  }

  if(value.constructor === Object){
    return true;
  } else {
    if(typeof value === "object"){
      if(Object.getPrototypeOf(value) === null){
        return true;
      } else {
        if(Object.getPrototypeOf(value).constructor === Object){
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
}
