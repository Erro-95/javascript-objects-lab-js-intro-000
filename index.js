function updateObjectWithKeyAndValue(obj, key, value){
  return object.assign({}, obj, {key: value});
}


destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  return obj[key] = value;
}

deleteFromObjectByKey(obj, key){
  return object.assign({}, obj, delete key);
}

destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj[key];
}
