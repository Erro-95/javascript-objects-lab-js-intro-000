function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {key: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return object[key] = value;
}

function deleteFromObjectByKey(obj, key){
  return Object.assign({}, obj, delete newObj[key])
}

function destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj[key];
}
