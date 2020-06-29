function updateObjectWithKeyAndValue(obj, key, value){
  return object.assign({}, obj, {key: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  return obj[key] = value;
}

function deleteFromObjectByKey(obj, key){
  return newObj = object.assign({}, obj, delete obj[key]);
}

function destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj[key];
}
