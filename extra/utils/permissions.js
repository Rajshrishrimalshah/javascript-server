
// import {PERMISSION_ALL,PERMISSION_READ,PERMISSION_WRITE,PERMISSION_DELETE,
//         MODULE_USER,ROLE_OF_TRAINER,ROLE_OF_TRAINEE,ROLL_OF_HEAD_TRAINER} from '../constant.js'


export const PERMISSION_ALL = 'all';
export const PERMISSION_READ = "read";
export const PERMISSION_WRITE = "write";
export const PERMISSION_DELETE = "delete";
export const MODULE_USER = "getUsers";
export  const ROLE_OF_TRAINER = "trainer";
export  const ROLE_OF_TRAINEE = "trainee";
export const ROLL_OF_HEAD_TRAINER = "head-trainer";


const PERMISSION = {
	MODULE_USER: {
		[PERMISSION_ALL]: [ROLL_OF_HEAD_TRAINER],
		[PERMISSION_READ]: [ROLE_OF_TRAINEE, ROLE_OF_TRAINER],
		[PERMISSION_WRITE]: [ROLE_OF_TRAINER],
		[PERMISSION_DELETE]: [],
	},
};

export default function hasPermission(module,role,permissionType) {
  if(!PERMISSION[module]) return false;

  if(!PERMISSION[module][permissionType]) return false

  if(PERMISSION[module][PERMISSION_ALL] && PERMISSION[module][PERMISSION_ALL] == -1) return false;

  return true;

};


