







function updateObjectWithKeyAndValue(obj, key, value){
  const newObj = object.assign({}, obj, {key: value});
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  return obj[key] = value;
}

function deleteFromObjectByKey(obj, key){
  var newObj = object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj[key];
}
