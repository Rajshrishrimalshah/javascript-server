const PERMISSION_ALL = 'all';
const PERMISSION_READ = "read";
const PERMISSION_WRITE = "write";
const PERMISSION_DELETE = "delete";
const MODULE_USER = "getUsers";
const ROLE_OF_TRAINER = "trainer";
const ROLE_OF_TRAINEE = "trainee";
const ROLL_OF_HEAD_TRAINER = "head-trainer";

const PERMISSION = {
	MODULE_USER: {
		[PERMISSION_ALL]: [ROLL_OF_HEAD_TRAINER],
		[PERMISSION_READ]: [ROLE_OF_TRAINEE, ROLE_OF_TRAINER],
		[PERMISSION_WRITE]: [ROLE_OF_TRAINER],
		[PERMISSION_DELETE]: [],
	},
};

let hasPermission = (module,role,permissionType) => {
  if(!PERMISSION[module]) return false;

  if(!PERMISSION[module][permissionType]) return false

  if(PERMISSION[module][PERMISSION_ALL] && PERMISSION[module][PERMISSION_ALL] == -1) return false;

  return true;

};

console.log(hasPermission(MODULE_USER,ROLE_OF_TRAINER,PERMISSION_DELETE));

