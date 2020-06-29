function updateObjectWithKeyAndValue(obj, key, value){
  return object.assign({}, obj, {key: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  return obj[key] = value;
}

function deleteFromObjectByKey(obj, key){
  const newObj = object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj[key];
}
