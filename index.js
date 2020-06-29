function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {key: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  return obj[key] = value;
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj, delete newObj[key])
}

function destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj[key];
}
