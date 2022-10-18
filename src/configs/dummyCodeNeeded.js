//export const formSteps = { "form":[
export const formSteps = [
	{
		step: 1,
		heading: 'Code details',
		items: [
			[
				{
					type: 'txt',
					name: 'dummyCodeName',
					label: 'Name of dummy code',
					id: 'memberName',
					validationType: 'string',
					validations: [
						{
							type: 'required',
							params: ['this field is required'],
						},
					],
				},
				{
					type: 'txt',
					name: 'specialistType',
					label: 'Specialist Type and Specialty',
					id: 'specialistType',
					validationType: 'string',
					validations: [
						{
							type: 'required',
							params: ['this field is required'],
						},
					],
				},
			],
			[
				{
					type: 'txt',
					name: 'corpGroupNumber',
					label: 'Corp Group and Group Number',
					id: 'corpGroupNumber',
					validationType: 'string',
					validations: [
						{
							type: 'required',
							params: ['this field is required'],
						},
					],
				},
				{
					type: 'txt',
					name: 'intendedCodeUse',
					label: 'Intended Use of Code',
					id: 'intendedCodeUse',
					validationType: 'string',
					validations: [
						{
							type: 'required',
							params: ['this field is required'],
						},
					],
				},
			],
			[
				{
					type: 'textArea',
					name: 'address',
					label: 'Address',
					labelHelper: 'Please put AXA Health if unknown',
					id: 'address',
					validationType: 'string',
					validations: [
						{
							type: 'required',
							params: ['this field is required'],
						},
					],
				},
			],
		],
	},
	{
		step: 3,
		heading: 'Your details',
		items: [
			[
				{
					type: 'txt',
					name: 'yourName',
					label: 'Your name',
					id: 'yourName',
				},
				{
					type: 'txt',
					name: 'yourEmailAddress',
					label: 'Your email address',
					id: 'yourEmailAddress',
					validationType: 'string',
					validations: [
						{
							type: 'required',
							params: ['this field is required'],
						},
						{
							type: 'email',
							params: ['valid email is required'],
						},
					],
				},
			],
			[
				{
					type: 'txt',
					name: 'yourDept',
					label: 'Your department',
					id: 'yourDept',
					validationType: 'string',
					validations: [
						{
							type: 'required',
							params: ['this field is required'],
						},
					],
				},
			],
		],
	},
];
