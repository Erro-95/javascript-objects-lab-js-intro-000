function updateObjectWithKeyAndValue(obj, key, value){
  return object.assign({}, obj, {key: value});
}


destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  return obj[key] = value;
}
