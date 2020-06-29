function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj
}

function deleteFromObjectByKey(obj, key){
  return Object.assign({}, obj, {delete [key]})
}

function destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj[key];
}
