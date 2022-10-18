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
				},
				{
					type: 'txt',
					name: 'claimNumber',
					label: 'Claim number',
					id: 'claimNumber',
				},
			],
			[
				{
					type: 'txt',
					name: 'workpacketNumber',
					label: 'Workpacket number',
					id: 'workpacketNumber',
				},
			],
			[
				{
					type: 'radio',
					name: 'memberMadeProviderAware',
					label:
						'Did the member make provider aware of their AXA policy with us',
					id: 'memberMadeProviderAware',
					options: ['Yes', 'No'],
				},
			],
			[
				{
					type: 'radio',
					name: 'hasMemberPaid',
					label: 'Has the member paid',
					id: 'hasMemberPaid',
					options: ['Yes', 'No'],
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
					type: 'textArea',
					name: 'procedureCodes',
					label: 'Procedure codes',
					id: 'procedureCodes',
				},
			],
			[
				{
					type: 'txt',
					name: 'contactWho',
					label: 'Who do you want us to contact?',
					labelHelper:
						'Name of person and who they are e.g. member/secretary/hospital contact',
					id: 'contactWho',
				},
				{
					type: 'txt',
					name: 'relevantContact',
					label: 'Relevant email/telephone number',
					id: 'relevantContact',
				},
			],
		],
	},
	{
		step: 3,
		heading: 'Your details',
		items: [
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
	},
];