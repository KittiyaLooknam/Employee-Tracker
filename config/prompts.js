module.exports = {
    mainMenuPrompt: {
        type: "list",
        name: "menu",
        message: "Choose one of the following",
        choices: [
            "View All Departments",   
            "View All Roles",
            "View All Employees",  
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "Quit Application",
        ],
    },

    viewDepartmentPrompt: {
        type: "list",
        name: "departmentId",
        message: "Which department would you like to view?",
        choices: "departmentChoices",
    },

    viewRolesPrompt: {
        type: "list",
        name: "roles_Id",
        message: "Which employee role would you like to view?",
        choices: "roleChoices",
    },

    viewEmployeesPrompt: {
        type: "list",
		name: "employeeId",
		message: "Which employee would you like to view?",
		choices: "employeeChoices",
    },

    addDepartmentPrompt: {
        name: "department",
        type: "input",
        message: "What is the name of the department?",
    },
    
    
    addEmployeePrompt: [
        {
            name: "firstName",
            type: "input",
            message: "What is your employee's first name?",
        },

        {
            name: "lastName",
            type: "input",
            message: "What is your employee's last name?",
        },
		
		{
			name: "role",
			type: "list",
			message: "Choose employee's job position",
			choices: [],
		},
		
		{
			name: "manager",
			type: "list",
			message: "Choose the manager of this employee:",
			choices: [],
		},
    ],

    addRolePrompt: [
        {
			type: "input",
			name: "role",
			message: "What is the employees role?",
		},
		
		{
			type: "input",
			name: "roleSalary",
			message: "What is this role's salary?",
		},
		
		{
			type: "list",
			name: "departmentId",
			message: "Which department is this in?",
			choices: [],
		},
    ],

    updateEmployeeRolePrompt: [
        {
			name: "update",
			type: "list",
			message: "Which employee's role would you like to update?:",
			choices: [],
		},
	
		{
			name: "role",
			type: "list",
			message: "What is the employee's new role?",
			choices: [],
		},
    ],
        
    };