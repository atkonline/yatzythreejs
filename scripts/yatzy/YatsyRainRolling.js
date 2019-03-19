// MAIN

// standard global variables

var container, scene, camera, renderer, controls, stats, world, dice = [];
var keypressed = false;


// FUNCTIONS
function init()
{
	// SCENE
	scene = new THREE.Scene();
	// CAMERA
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.01, FAR = 20000;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	camera.position.set(0,30,30);
	// RENDERER
    renderer = new THREE.WebGLRenderer( {antialias:true} );
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor( 0x536878, 0.5);
	//#536878


	container = document.getElementById( 'ThreeJS' );
    container.appendChild( renderer.domElement );
    
    
	// EVENTS
	// CONTROLS
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	// STATS
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.bottom = '0px';
	stats.domElement.style.zIndex = 100;
	container.appendChild( stats.domElement );

	let ambient = new THREE.AmbientLight('#ffffff', 0.3);
	scene.add(ambient);

    let directionalLight = new THREE.DirectionalLight('#ffffff', 0.5);
    directionalLight.position.x = -1000;
    directionalLight.position.y = 1000;
    directionalLight.position.z = 1000;
    scene.add(directionalLight);

    let light = new THREE.SpotLight(0xefdfd5, 1.3);
    light.position.y = 100;
    light.target.position.set(0, 0, 0);
    light.castShadow = true;
    light.shadow.camera.near = 50;
    light.shadow.camera.far = 110;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    scene.add(light);
    

	// FLOOR
	var floorMaterial = new THREE.MeshPhongMaterial( { color: '#536878', side: THREE.DoubleSide } );
	var floorGeometry = new THREE.PlaneGeometry(60, 60, 10, 10);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.receiveShadow  = true;
	floor.rotation.x = Math.PI / 2;
	scene.add(floor);
	// SKYBOX/FOG
	var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
	var skyBoxMaterial = new THREE.MeshPhongMaterial( { color: 0x9999ff, side: THREE.BackSide } );
	var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
	// scene.add(skyBox);
	scene.fog = new THREE.FogExp2( 0x9999ff, 0.00025 );

	////////////
	// CUSTOM //
	////////////
    world = new CANNON.World();

    world.gravity.set(0, -9.82 * 20, 0);
    world.broadphase = new CANNON.NaiveBroadphase();
    world.solver.iterations = 16;
    
    DiceManager.setWorld(world);

    //Floor
    let floorBody = new CANNON.Body({mass: 0, shape: new CANNON.Plane(), material: DiceManager.floorBodyMaterial});
    floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
    world.add(floorBody);

    //Walls

    var colors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'];
    for (var i = 0; i < 5; i++) {
        var die = new DiceD6({size: 1.5, backColor: colors[i]});
        scene.add(die.getObject());
        dice.push(die);
    }
    randomDiceThrow();
   
    scene.addEventListener(
			'update',
			function() {  
              
			}
        );

      
    //setInterval(randomDiceThrow, 3000);
    

    requestAnimationFrame( animate );
}
function randomDiceThrow(values) {
    if(typeof values == "undefined"){
        values =[1,1,1,1,1]
    }
    var diceValues = [];
    let values2d = values;
     

    for (var i = 0; i < dice.length; i++) {
        let yRand = Math.random() * 20
        dice[i].getObject().position.x = -15 - (i % 3) * 1.5;
        dice[i].getObject().position.y = 2 + Math.floor(i / 3) * 1.5;
        dice[i].getObject().position.z = -15 + (i % 3) * 1.5;
        dice[i].getObject().quaternion.x = (Math.random()*90-45) * Math.PI / 180;
        dice[i].getObject().quaternion.z = (Math.random()*90-45) * Math.PI / 180;
        dice[i].updateBodyFromMesh();
        let rand = Math.random() * 5;
        dice[i].getObject().body.velocity.set(25 + rand, 40 + yRand, 15 + rand);
        dice[i].getObject().body.angularVelocity.set(20 * Math.random() -10, 20 * Math.random() -10, 20 * Math.random() -10);

        diceValues.push({dice: dice[i], value: values2d[i]});
    }

    DiceManager.prepareValues(diceValues);
    console.log(diceValues);
    console.log("you 3D rolled: " + diceValues[0].value + ' ' 
                               + diceValues[1].value + ' '
                               + diceValues[2].value + ' '
                               + diceValues[3].value + ' '
                               + diceValues[4].value + ' ' ); 
    console.log(diceValues);
    return diceValues;
    
}
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
function animate()
{
    updatePhysics();
	render();
	update();

    requestAnimationFrame( animate );
}

function updatePhysics() {
    world.step(1.0 / 55.0);

    for (var i in dice) {
        dice[i].updateMeshFromBody();
    }
}

function update()
{

	controls.update();
	stats.update();
}

function render()
{
	renderer.render( scene, camera );
}

 