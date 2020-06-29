function updateObjectWithKeyAndValue(obj, key, value){
  const newObj =  Object.assign({}, obj, key: value)
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  return obj[key] = value;
}

function deleteFromObjectByKey(obj, key){
  return Object.assign({}, obj, delete newObj[key])
}

function destructivelyDeleteFromObjectByKey(obj, key){
  return delete obj[key];
}
