import React from 'react';

const formConfig = [
	{
		id: 1,
		title: 'Adding a Hospital rate to facilitate Claims Payment',
		requiresComplaintsCheck: false,
		requiresFreetype: true,

		steps: [
			{
				step: 1,
				heading: 'Member details',

				items: [
					{
						type: 'txt',
						name: 'memberName',
						label: 'Member name',
						id: 'memberName',
						//value: 'simon',
						// validationType: 'string',

						// validations: [
						// 	{
						// 		type: 'required',
						// 		params: ['this field is required'],
						// 	},
						// 	// {
						// 	// 	type: 'min',
						// 	// 	params: [5, 'name cannot be less than 5 characters'],
						// 	// },
						// 	// {
						// 	// 	type: 'max',
						// 	// 	params: [10, 'name cannot be more than 10 characters'],
						// 	// },
						// ],
					},
					{
						type: 'txt',
						name: 'membershipNumber',
						label: 'Membership number',
						id: 'membershipNumber',
						//value: 'txtxtxtx',
						// validationType: 'string',
						// validations: [
						// 	{
						// 		type: 'required',
						// 		params: ['this field is required'],
						// 	},
						// ],
					},

					// {
					// 	type: 'txt',
					// 	name: 'claimAssesmentNumber',
					// 	label: 'Claim assessment number',
					// 	id: 'claimAssesmentNumber',
					// 	validationType: 'string',
					// 	validations: [
					// 		{
					// 			type: 'required',
					// 			params: ['this field is required'],
					// 		},
					// 	],
					// },
					// {
					// 	type: 'txt',
					// 	name: 'workpacketNumber',
					// 	label: 'Workpacket number',
					// 	id: 'workpacketNumber',
					// 	validationType: 'string',
					// 	validations: [
					// 		{
					// 			type: 'required',
					// 			params: ['this field is required'],
					// 		},
					// 	],
					// },
					// {
					// 	type: 'radio',
					// 	name: 'memberPaidInvoice',
					// 	label: 'Member has paid?',
					// 	id: 'memberPaidInvoice',
					// 	options: ['Yes', 'No'],
					// 	validationType: 'string',
					// 	validations: [
					// 		{
					// 			type: 'required',
					// 			params: ['this field is required'],
					// 		},
					// 	],
					// },
					// {
					// 	type: 'radio',
					// 	name: 'providerPolicyAware',
					// 	label: 'Member made provider aware of their AXA policy?',
					// 	id: 'providerPolicyAware',
					// 	options: ['Yes', 'No'],
					// 	validationType: 'string',
					// 	validations: [
					// 		{
					// 			type: 'required',
					// 			params: ['this field is required'],
					// 		},
					// 	],
					// },

					// <Section>
				],
			},
			{
				step: 3,
				heading: 'Provider details',
				items: [
					{
						type: 'txt',
						name: 'providerName',
						label: 'Provider name',
						id: 'providerName',
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
						name: 'providerNumber',
						label: 'Provider number',
						id: 'providerNumber',
						// validationType: 'string',
						// validations: [
						// 	{
						// 		type: 'required',
						// 		params: ['this field is required'],
						// 	},
						// ],
					},
					{
						type: 'txt',
						name: 'contactName',
						label: 'Contact name',
						id: 'contactName',
						// validationType: 'string',
						// validations: [
						// 	{
						// 		type: 'required',
						// 		params: ['this field is required'],
						// 	},
						// ],
					},
					{
						type: 'txt',
						name: 'emailAddress',
						label: 'Email address',
						id: 'emailAddress',
						// validationType: 'string',
						// validations: [
						// 	{
						// 		type: 'required',
						// 		params: ['this field is required'],
						// 	},
						// ],
					},
				],
			},
			{
				step: 2,
				heading: 'Your details',
				items: [
					{
						type: 'txt',
						name: 'yourName',
						label: 'Your name',
						id: 'yourName',
						// validationType: 'string',
						// validations: [
						// 	{
						// 		type: 'required',
						// 		params: ['this field is required'],
						// 	},
						// ],
					},

					{
						type: 'txt',
						name: 'yourEmailAddress',
						label: 'Your email address',
						id: 'yourEmailAddress',
					},
				],
				//form: React.lazy(() => import('./components/User')),
			},
		],
	},
	{
		id: 2,
		title: 'Asking for payment upfront',
		requiresFreetype: true,
		requiresComplaintsCheck: true,
		steps: [
			{
				step: 1,
				heading: 'Member details',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: false,
					},
					claimNumber: {
						required: false,
					},
					workpacketNumber: {
						required: false,
					},
					providerPolicyAware: {
						required: true,
					},
					memberPaidInvoice: {
						required: true,
					},
				},
			},
			{
				step: 2,
				heading: 'Provider details',
				form: React.lazy(() =>
					import('./components/provider/ProviderCopyRemittance')
				),
			},
			{
				step: 3,
				heading: 'Your details',
				form: React.lazy(() => import('./components/User')),
			},
		],
	},
	{
		id: 3,
		title: 'Charging for medical reports',
		requiresFreetype: true,
		requiresComplaintsCheck: true,
		steps: [
			{
				step: 1,
				heading: 'Member details',
				form: React.lazy(() => import('./components/member/MemberClaim')),
			},
			{
				step: 2,
				heading: 'Your details',
				form: React.lazy(() => import('./components/User')),
			},
		],
	},
	{
		id: 4,
		title: 'Concerns about Provider Behaviour and/or potential fraud',
		requiresFreetype: true,
		requiresComplaintsCheck: true,
		steps: [
			{
				step: 1,
				heading: 'Member details',
				form: React.lazy(() => import('./components/member/MemberClaim')),
			},
		],
	},
	{
		id: 5,
		title:
			'Contractual shortfall chasers for fee approved specialists, practitioners and ZZ clinics',
		requiresFreetype: true,
		requiresComplaintsCheck: false,
		steps: [
			{
				step: 1,
				title: 'Member details',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: false,
					},
					claimNumber: {
						required: false,
					},
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
	{
		id: 6,
		title: 'Copy EDI request',
		requiresFreetype: true,
		requiresComplaintsCheck: false,
		steps: [
			{
				step: 1,
				heading: 'Member details',
				form: React.lazy(() => import('./components/member/MemberClaim')),
			},
			{
				step: 2,
				heading: 'Provider details',
				form: React.lazy(() => import('./components/provider/CopyEdiRequest')),
			},
		],
	},
	{
		id: 7,
		title: 'Copy remittance for a Provider',
		requiresFreetype: true,
		requiresComplaintsCheck: true,
		steps: [
			{
				step: 1,
				heading: 'Member details',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: true,
					},
				},
			},
			{
				step: 2,
				heading: 'Provider details',
				form: React.lazy(() =>
					import('./components/provider/ProviderCopyRemittance')
				),
			},
			{
				step: 3,
				heading: 'Your details',
				form: React.lazy(() => import('./components/User')),
			},
		],
	},
	{
		id: 8,
		title: 'Dummy code needed',
		requiresFreetype: false,
		requiresComplaintsCheck: false,
		steps: [],
	},
	{
		id: 9,
		title: 'Follow-up within 10 days/preoperative assessment',
		requiresFreetype: true,
		requiresComplaintsCheck: false,
		steps: [
			{
				step: 1,
				heading: 'Member details',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: true,
					},
					claimNumber: {
						//required: true,
					},
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
	{
		id: 10,
		title: 'Hospital relationship enquiry',
		requiresFreetype: true,
		requiresComplaintsCheck: false,
		steps: [
			{
				step: 1,
				heading: 'Member details',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: true,
					},
				},
			},
			{
				step: 2,
				heading: 'Hospital',
				form: React.lazy(() =>
					import('./components/provider/HospitalRelationshipEnquiry')
				),
			},
			{
				step: 3,
				heading: 'Your details',
				form: React.lazy(() => import('./components/User')),
			},
		],
	},

	{
		id: 11,
		title: 'Incorrect specialist/practitioner/ZZ clinic details',
		requiresFreetype: true,
		requiresComplaintsCheck: false,
		steps: [],
	},
	{
		id: 12,
		title: 'Information received for a closed code',
		requiresFreetype: true,
		requiresComplaintsCheck: true,
		steps: [
			{
				step: 1,
				heading: 'Member',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: true,
					},
					claimNumber: {
						required: false,
					},
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
	{
		id: 13,
		title: 'Multiple specialist request',
		requiresFreetype: true,
		requiresComplaintsCheck: true,
		steps: [
			{
				step: 1,
				heading: 'Member',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: true,
					},
					claimNumber: {
						required: false,
					},
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
	{
		id: 14,
		title: 'Post-operative fee uplift',
		requiresFreetype: true,
		requiresComplaintsCheck: true,
		steps: [
			{
				step: 1,
				heading: 'Member',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: true,
					},
					claimNumber: {
						required: false,
					},
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
	{
		id: 15,
		title: 'Potential medical or clinical negligence',
		requiresFreetype: true,
		requiresComplaintsCheck: false,
		steps: [
			{
				step: 1,
				heading: 'Member',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				// how to make some standard field member name/number optional/required
				// make all opt-in? and mark required?
				options: {
					claimAssessmentNumber: {
						required: true,
					},
					claimNumber: {
						required: false,
					},
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
	{
		id: 16,
		title: 'Pre-operative fee uplift',
		requiresFreetype: true,
		requiresComplaintsCheck: true,
		steps: [
			{
				step: 1,
				heading: 'Member',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				// how to make some standard field member name/number required
				// make all opt-in? and mark required?
				options: {
					claimAssessmentNumber: {
						required: false,
					},
					claimNumber: {
						required: false,
					},
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
	{
		id: 17,
		title: 'Provider rate table query',
		requiresFreetype: false,
		requiresComplaintsCheck: false,
		steps: [
			{
				step: 1,
				heading: 'Member',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
	{
		id: 18,
		title: 'Provider recoup: claim no longer on CREST',
		requiresFreetype: false,
		requiresComplaintsCheck: false,
	},
	{
		id: 19,
		title: 'Provider stop/reissue cheque',
		requiresFreetype: false,
		requiresComplaintsCheck: false,
	},
	{
		id: 20,
		title: 'Query about specialist preference',
		requiresFreetype: true,
		requiresComplaintsCheck: true,
		steps: [
			{
				step: 1,
				heading: 'Member',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: false,
					},
					claimNumber: {
						required: false,
					},
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
	{
		id: 21,
		title: 'Query/incorrect specialist pad notes',
		requiresFreetype: true,
		requiresComplaintsCheck: false,
	},
	{
		id: 22,
		title: 'Sourcing Tool queries',
		requiresFreetype: true,
		requiresComplaintsCheck: false,
		steps: [
			{
				step: 1,
				heading: 'Member',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: false,
					},
					claimNumber: {
						required: false,
					},
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
	{
		id: 23,
		title: 'Sourcing Tool requests:hardcoding and point variance',
		requiresFreetype: true,
		requiresComplaintsCheck: false,
	},
	{
		id: 24,
		title: 'Specialist/practitioner recognition query',
		requiresFreetype: true,
		requiresComplaintsCheck: false,
		steps: [
			{
				step: 1,
				heading: 'Member',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: false,
					},
					claimNumber: {
						required: false,
					},
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
	{
		id: 25,
		title: 'What to use for upcoming surgery',
		requiresFreetype: true,
		requiresComplaintsCheck: true,
		steps: [
			{
				step: 1,
				heading: 'Member',
				form: React.lazy(() => import('./components/member/MemberClaim')),
				options: {
					claimAssessmentNumber: {
						required: false,
					},
					claimNumber: {
						required: false,
					},
					workpacketNumber: {
						required: false,
					},
				},
			},
		],
	},
];

export default formConfig;
