function updateObjectWithKeyAndValue(object, key, value){
  return object.assign({}, obj, {key: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return obj[key] = value;
}

function deleteFromObjectByKey(object, key){
  return newObj = object.assign({}, obj, delete obj[key]);
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete obj[key];
}
