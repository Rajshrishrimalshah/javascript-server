


const PERMISSION = {
	MODULE_USER: {
		[PERMISSION_ALL]: [ROLL_OF_HEAD_TRAINER],
		[PERMISSION_READ]: [ROLE_OF_TRAINEE, ROLE_OF_TRAINER],
		[PERMISSION_WRITE]: [ROLE_OF_TRAINER],
		[PERMISSION_DELETE]: [],
	},
};

console.log(hasPermission(MODULE_USER,ROLL_OF_HEAD_TRAINER,PERMISSION_DELETE));

function hasPermission(module, role, permissiontype) {

  if(!PERMISSION[module][permissiontype])
  {
    return false;
  }

  // CASE 1 : all
	for (let ALL in PERMISSION[module]["all"]) {
		if (role ===  PERMISSION[module]["all"][ALL]) {
			return true;
		}
	}
	// CASE 2 : read and write
	for (let userRole in PERMISSION[module][permissiontype]) {
		if (role == PERMISSION[module][permissiontype][userRole]) {
			return true;
		}


	return false;
}

}
