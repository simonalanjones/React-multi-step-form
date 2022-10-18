//export const formSteps = { "form":[
export const formSteps = [
	{
		step: 1,
		heading: 'Member details',
		items: [
			[
				{
					type: 'txt',
					name: 'memberName',
					label: 'Member name',
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
					name: 'membershipNumber',
					label: 'Membership number',
					id: 'membershipNumber',
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
					name: 'claimAssesmentNumber',
					label: 'Claim assessment number',
					id: 'claimAssesmentNumber',
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
		step: 2,
		heading: 'Provider details',
		items: [
			[
				{
					type: 'txt',
					name: 'providerNumber',
					label: 'Provider number',
					id: 'providerNumber',
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
					name: 'providerName',
					label: 'Provider name',
					id: 'providerName',
				},
			],
			[
				{
					type: 'txt',
					name: 'contactName',
					label: 'Contact name',
					id: 'contactName',
				},
				{
					type: 'txt',
					name: 'email',
					label: 'Email address',
					id: 'email',
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