let users = {
	getUsers: {
		all: ["head-trainer"],
		read: ["trainee", "trainer"],
		write: ["trainer"],
		delete: []
	}
};

console.log(hasPermission("getUsers", "head-trainer", "delete"));

function hasPermission(module, role, permissiontype) {

  if(!users[module][permissiontype])
  {
    return false;
  }

  // CASE 1 : all
	for (let ALL in users[module]["all"]) {
		if (role === users[module]["all"][ALL]) {
			return true;
		}
	}
	// CASE 2 : read and write
	for (let userRole in users[module][permissiontype]) {
		if (role == users[module][permissiontype][userRole]) {
			return true;
		}


	return false;
}

}
