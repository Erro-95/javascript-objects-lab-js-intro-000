function updateObjectWithKeyAndValue(obj, key, value){
  return object.assign({}, obj, {key: value});
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  return obj[key] = value;
}

function deleteFromObjectByKey(obj, key){
  return object.assign({}, obj, delete key);
}

function destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj[key];
}
