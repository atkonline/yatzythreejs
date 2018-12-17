function getVolume(geometry) {

  let position = geometry.attributes.position;
  let faces = position.count / 3;
  let sum = 0;
  let p1 = new THREE.Vector3(),
    p2 = new THREE.Vector3(),
    p3 = new THREE.Vector3();
  for (let i = 0; i < faces; i++) {
    p1.fromBufferAttribute(position, i * 3 + 0);
    p2.fromBufferAttribute(position, i * 3 + 1);
    p3.fromBufferAttribute(position, i * 3 + 2);
    sum += signedVolumeOfTriangle(p1, p2, p3);
  }
  return sum;

}

function signedVolumeOfTriangle(p1, p2, p3) {
  return p1.dot(p2.cross(p3)) / 6.0;
}

//calculate which side landed.
var m = object.matrix.elements;
var mx = Math.abs(m[1]);
var my = Math.abs(m[5]);
var mz = Math.abs(m[9]);
if(mx>my){
 if(mx>mz){if(m[1]>0)side = 0;else side = 1;}
 else{ if(m[9]>0])side = 2;else side=3;}
}else{
 if(my>mz){if(m[5]>0)side = 4;else side = 5;}
 else{ if(m[9]>0])side = 2;else side=3;}
}