export const example7 = {
	"script": "profile",
	"source": {
		"type": "method",
		"method": "getInfoData",
		"where": ["md5(id)"]
	},
	"forcefill": {
		"groupuid": "#SESS_GROUP_NAME#",
		"guid": "#SESS_GUID#",
		"company_id": "#COMP_ID#"
	},
	"gotolink": "infoview/profile.main/{hashid}?",
	"fields": {
		"full_name": {
			"label": "Name",
			"group": "Info",
			"required": true,
			"width": 12,
		},

		"organization": {
			"label": "Partner",
			"group": "Info",
			"type": "dataSelectorFromTable",
			"table": "profiletbl_organisation",
			"columns": "organization as title,id as value",
			"where": {
				"blocked": "false",
				"company_id": "#COMP_ID#"
			},
			"no-option": "Select Partner",
			"orderby": "organization asc",
			"required": true
		},
		
		"type": {
			"label": "Company Type",
			"group": "Info",
			"no-option": "Select Company Type",
			"type": "dataSelector",
			"groupid": "profile_type",
			"required": true,
			"multiple": true
		},
		"category": {
			"label": "Industry",
			"group": "Info",
			"type": "dataSelector",
			"groupid": "org_category",
			"no-option": "Select Industry",
			"required": true
		},
		"email1": {
			"label": "Email",
			"group": "Info",
			"type": "email",
			"required": true
		},
		"email2": {
			"label": "Alternate Email",
			"group": "Info",
			"type": "email"
		},
		"mobile": {
			"label": "Mobile",
			"group": "Info",
			"type": "phone",
			"required": true,
			"minlength": 10
		},
		"mobile_others": {
			"label": "Phone",
			"group": "Info",
			"type": "phone",
			"minlength": 10
		},
		"profile_code": {
			"label": "Client CRN",
			"group": "Info",
			"type": "text",
			"minlength": "4",
			"maxlength": "10",
			"required": true
		},
		"assigned_to": {
			"label": "Assigned To",
			"group": "Info",
			"type": "dataSelectorFromTable",
			"table": "staff_tbl",
			"columns": "full_name as title,loginid as value",
			"where": {
				"blocked": "false",
				"loginid !=''": "RAW",
				"company_id": "#COMP_ID#"
			},
			"required": false,
			"width": 6,
			"search": true
		},
		"fax": {
			"label": "Fax",
			"group": "Info"
		},
		"owner": {
			"label": "Owner",
			"group": "Info",
			"width": 6
		},
		"demography": {
			"label": "Primary Demography",
			"group": "Info",
			"type": "dataSelector",
			"groupid": "country",
			"width": 6,
			"no-option": "Select Primary Demography",
			"required": true
		},
		"website": {
			"label": "Website",
			"group": "Info",
			"type": "url"
		},
		"tags": {
			"label": "Tags",
			"group": "Info",
			"type": "tags",
			"width": 6
		},

		"remarks": {
			"label": "Remarks",
			"group": "Info",
			"type": "textarea",
			"width": 12
		},
		"blocked": {
			"label": "Blocked",
			"group": "Info",
			"type": "dataSelector",
			"groupid": "boolean",
			"vmode": "edit",
			"required": true
		},
		"blacklist": {
			"label": "Blacklisted",
			"group": "Info",
			"type": "dataSelector",
			"groupid": "boolean",
			"vmode": "edit",
			"required": true
		},
		"pan": {
			"label": "PAN No.",
			"required": false,
			"group": "Info",
			"maxlength": 10,
			"minlength": 10
		},
		"gst": {
			"label": "GST No.",
			"required": false,
			"group": "Info",
			"maxlength": 15,
			"minlength": 15
		}
	},
	"infoview": {
		"template":"tab",
		"script": "profile",
		"actions": {
			"addRecord": {
				"label": "",
				"icon": "<i class='fa fa-plus'></i>"
			}
		},
		"groups": {
			"address": {
				"label": "Address",
				"type": "module",
				"src": "infoviewTable",
				"policy": "contact.view.access",
				"script": "profile",
				"vmode": "edit",
				"config": {
					"policy_create": "contact.view.access",
					"policy_delete": "contact.delete.access",
					"policy_update": "contact.update.access",
					"type": "method",
					"method":"getAddresses",
					"uimode": "grid",
					"table": "profiletbl_address",
					"cols": "profiletbl_address.id,profiletbl_address.address_type,profiletbl_address.title as reference_name,profiletbl_address.address,profiletbl_address.street,profiletbl_address.city,profiletbl_address.state,profiletbl_address.country,profiletbl_address.zipcode",
					"where": " md5(profiletbl_address.profile_id)='#refid#'",
					"form": {
						"source": {
							"type": "sql",
							"table": "profiletbl_address",
							"where": ["md5(id)"]
						},
						"script": "profile",
						"forcefill": {
							"guid": "#SESS_GUID#",
							"created_by": "#SESS_USER_ID#",
							"profile_id": "#id#"
						},
						"fields": {
							"address_type": {
								"label": "Address Type",
								"group": "Info",
								"type": "dataSelector",
								"groupid": "address_type",
								"required": true
							},
							"title": {
								"label": "Reference Name",
								"group": "Info",
								"type": "text",
								"required": true
							},

							"address": {
								"label": "Address",
								"group": "Info",
								"type": "text",
								"required": true
							},
							"street": {
								"label": "Street",
								"group": "Info",
								"type": "text",
								"required": true
							},
							"city": {
								"label": "City",
								"group": "Info",
								"type": "text",
								"required": true
							},
							"state": {
								"label": "State",
								"group": "Info",
								"type": "text",
								"required": true
							},
							"country": {
								"label": "Country",
								"group": "Info",
								"type": "dataSelector",
								"groupid": "country"
							},
							"zipcode": {
								"label": "Zipcode",
								"group": "Info",
								"type": "text",
								"maxlength": 6,
								"minlength": 6
							}
						}
					}
				},
				"width": 12
			},
			"social": {
				"label": "Social",
				"type": "module",
				"src": "infoviewTable",
				"policy": "contact.view.access",
				"vmode": "edit",
				"config": {
					"type": "sql",
					"uimode": "grid",
					"policy_create": "contact.view.access",
					"policy_delete": "contact.delete.access",
					"policy_update": "contact.update.access",
					"table": "profiletbl_social",
					"cols": "profiletbl_social.id,profiletbl_social.social_type,profiletbl_social.social_weblink,profiletbl_social.social_userid,profiletbl_social.token_key",
					"where": " md5(profiletbl_social.profile_id)='#refid#'",
					"form": {
						"source": {
							"type": "sql",
							"table": "profiletbl_social",
							"where": ["md5(id)"]
						},
						"forcefill": {
							"guid": "#SESS_GUID#",
							"created_by": "#SESS_USER_ID#",
							"profile_id": "#id#"
						},
						"fields": {
							"social_type": {
								"label": "Social Type",
								"group": "Info",
								"type": "dataSelector",
								"groupid": "social_type",
								"required": true
							},
							"social_weblink": {
								"label": "Social Weblink",
								"group": "Info",
								"type": "url",
								"required": true
							},
							"social_userid": {
								"label": "Social User Id",
								"group": "Info",
								"type": "text",
								"required": true
							},
							"token_key": {
								"label": "Token Key",
								"group": "Info",
								"type": "text",
								"required": true
							}
						}
					}
				},
				"width": 12
			},

			"bank_details": {
				"label": "Bank Details",
				"type": "module",
				"src": "infoviewTable",
				"vmode": "edit",
				"policy": "contact.view.access",
				"config": {
					"type": "sql",
					"uimode": "grid",
					"policy_create": "contact.view.access",
					"policy_delete": "contact.delete.access",
					"policy_update": "contact.update.access",
					"table": "profiletbl_banks",
					"cols": "profiletbl_banks.id,profiletbl_banks.bank_name as bank,profiletbl_banks.bank_acno_name as account_holder_name,profiletbl_banks.bank_acno as account_no,profiletbl_banks.bank_ifsc_code as ifsc_code,profiletbl_banks.bank_branch as branch,profiletbl_banks.bank_address as address,profiletbl_banks.bank_state as state,profiletbl_banks.bank_country as country,profiletbl_banks.bank_swift_code as swift_code",
					"where": " md5(profiletbl_banks.profile_id)='#refid#'",
					"form": {
						"source": {
							"type": "sql",
							"table": "profiletbl_banks",
							"where": ["md5(id)"]
						},
						"forcefill": {
							"guid": "#SESS_GUID#",
							"created_by": "#SESS_USER_ID#",
							"profile_id": "#id#"
						},
						"fields": {
							"bank_name": {
								"label": "Bank",
								"group": "Info",
								"type": "text",
								"required": true
							},
							"bank_acno_name": {
								"label": "Account Holder Name",
								"group": "Info",
								"type": "text",
								"required": true
							},
							"bank_acno": {
								"label": "Account No",
								"group": "Info",
								"type": "text",
								"required": true
							},
							"bank_ifsc_code": {
								"label": "IFSC Code",
								"group": "Info",
								"type": "text",
								"required": true
							},
							"bank_branch": {
								"label": "Branch",
								"group": "Info",
								"type": "text",
								"required": true
							},

							"bank_address": {
								"label": "Address",
								"group": "Info",
								"type": "text",
								"required": true
							},
							"bank_state": {
								"label": "State",
								"group": "Info",
								"type": "text",
								"required": true
							},
							"bank_country": {
								"label": "Country",
								"group": "Info",
								"type": "dataSelector",
								"groupid": "country"
							},
							"bank_swift_code": {
								"label": "SWIFT Code",
								"group": "Info",
								"type": "text"
							}
						}
					}
				},
				"width": 12
			},
			"organization": {
				"label": "Group",
				"type": "module",
				"src": "infoviewTable",
				"policy": "contact.view.access",
				"vmode": "view",
				"config": {
					"DEBUG": false,
					"type": "sql",
					"uimode": "single",
					"table": "profiletbl_organisation,profiletbl",
					"cols": "profiletbl_organisation.organization as name,profiletbl_organisation.org_category as industry,profiletbl_organisation.org_type as partner_type,profiletbl_organisation.org_establishment as date_of_establishment,profiletbl_organisation.org_pan as pan_no,profiletbl_organisation.org_gst as gst_no,profiletbl_organisation.org_mail as email,profiletbl_organisation.org_landline as landline,profiletbl_organisation.org_address1 as address,profiletbl_organisation.org_country1 as country,profiletbl_organisation.org_zipcode1 as zipcode,profiletbl_organisation.org_website as website",
					"where": "profiletbl_organisation.id=profiletbl.organization AND md5(profiletbl.id)='#refid#'"
				},
				"width": 12
			},
			"address_book": {
				"label": "Contacts",
				"type": "module",
				"src": "infoviewTable",
				"vmode": "edit",
				"policy": "contact.view.access",
				"config": {
					"type": "sql",
					"policy_create": "contact.view.access",
					"policy_delete": "contact.delete.access",
					"policy_update": "contact.update.access",
					"table": "profiletbl_contacts",
					"cols": "id,name,designation,email1 as email,mobile,address,state,country",
					"where": "md5(profiletbl_contacts.profile_id)='#refid#'",
					"width": 12,
					"colkey": "profile_id",
					"form": {
						"source": {
							"type": "sql",
							"table": "profiletbl_contacts",
							"where": ["md5(id)"]
						},
						"forcefill": {
							"profile_id": "#REFID#"
						},
						"fields": {
							"name": {
								"label": "Name",
								"type": "text",
								"required": true
							},
							"designation": {
								"label": "Designation",
								"type": "text",
								"required": true
							},
							"email1": {
								"label": "Email",
								"type": "email",
								"required": true
							},
							"mobile": {
								"label": "Mobile",
								"type": "text",
								"required": true,
								"minlength": 10,
								"maxlength": 10
							},
							"address": {
								"label": "Address",
								"type": "text"
							},
							"state": {
								"label": "State",
								"type": "text"
							},
							"country": {
								"label": "Country",
								"type": "dataSelector",
								"groupid": "country"
							}
						}
					}
				},
				"width": 12
			},
			"leads": {
				"label": "Leads",
				"type": "module",
				"src": "infoviewTable",
				"vmode": "view",
				"policy": "contact.view.access",
				"config": {
					"type": "sql",
					"uimode": "grid",
					"table": "lead_tbl,profiletbl",
					"cols": "lead_tbl.id,lead_tbl.title,lead_tbl.lead_date,lead_tbl.net_amount,lead_tbl.lead_status,lead_tbl.lead_type,lead_tbl.lead_priority,lead_tbl.lead_source,lead_tbl.enquiry_type",
					"where": "md5(profiletbl.id)='#refid#' AND lead_tbl.customer_id=profiletbl.id"
				},
				"width": 12
			},
			"projects": {
				"label": "Projects",
				"type": "module",
				"src": "infoviewTable",
				"vmode": "view",
				"policy": "contact.view.access",
				"config": {
					"DEBUG": false,
					"type": "sql",
					"uimode": "grid",
					"table": "project_tbl,data_project_types",
					"cols": "project_tbl.id,project_tbl.title as project,data_project_types.name as project_master,project_tbl.category,project_tbl.status as status,project_tbl.close_date as end_date,project_tbl.manager",
					"where": "md5(project_tbl.profile_id)='#refid#' AND project_tbl.project_typeid=data_project_types.id",
					"orderby": "project_tbl.edited_on DESC"
				},
				"width": 12
			},

			"invoices": {
				"label": "Invoices",
				"type": "module",
				"src": "infoviewTable",
				"vmode": "view",
				"policy": "contact.view.access",
				"config": {
					"DEBUG": false,
					"type": "sql",
					"uimode": "grid",
					"table": "invoices_tbl,profiletbl",
					"cols": "invoices_tbl.id,invoices_tbl.invoiceno as invoice_no,invoices_tbl.date,invoices_tbl.currency,invoices_tbl.total_amount,invoices_tbl.total_payment,(invoices_tbl.total_amount-invoices_tbl.total_payment) as total_due,invoices_tbl.due_date,invoices_tbl.status,invoices_tbl.created_by",
					"where": "invoices_tbl.customer_id=profiletbl.id AND md5(profiletbl.id)='#refid#'"
				},
				"width": 12,
				"hidden": true
			},
			"ledger": {
				"label": "Ledger",
				"type": "module",
				"src": "infoviewTable",
				"vmode": "view",
				"policy": "contact.view.access",
				"config": {
					"type": "sql",
					"uimode": "grid",
					"table": "accounts_tbl,profiletbl",
					"cols": "accounts_tbl.id,accounts_tbl.billno as bill_no,accounts_tbl.fyear as fiscal_year,accounts_tbl.accounting_date,accounts_tbl.tax_status,accounts_tbl.issuer_bank,accounts_tbl.beneficiary_bank,accounts_tbl.payment_base_amount",
					"where": "accounts_tbl.profile_id=profiletbl.id AND md5(profiletbl.id)='#refid#'"
				},
				"width": 12,
				"hidden": false
			},
			"purchase": {
				"label": "Purchase",
				"type": "module",
				"src": "infoviewTable",
				"vmode": "view",
				"policy": "contact.view.access",
				"config": {
					"type": "sql",
					"uimode": "grid",
					"table": "profiletbl,purchase_tbl",
					"cols": "purchase_tbl.id,purchase_tbl.purchaseno as purchase_inv_no,purchase_tbl.date as purchase_date,purchase_tbl.due_date,purchase_tbl.total_amount,purchase_tbl.total_payment,(purchase_tbl.total_amount-purchase_tbl.total_payment) as total_due,purchase_tbl.status,purchase_tbl.created_by",
					"where": "md5(profiletbl.id)='#refid#' AND purchase_tbl.customer_id=profiletbl.id AND purchase_tbl.blocked='false'"
				},
				"width": 12,
				"hidden": true
			},
			"postbox": {
				"label": "Postbox",
				"type": "module",
				"src": "infoviewTable",
				"policy": "contact.view.access",
				"vmode": "view",
				"config": {
					"type": "sql",
					"uimode": "grid",
					"table": "reception_activities,profiletbl",
					"cols": "reception_activities.id,reception_activities.subject,reception_activities.comms_type as type,profiletbl.full_name as business,reception_activities.dated as date",
					"where": "reception_activities.profile_id= profiletbl.id AND md5(profiletbl.id)='#refid#'",
					"orderby": "reception_activities.edited_on DESC",
					"colkey": "reception_activities.profile_id",
					"form": {
						"source": {
							"type": "sql",
							"table": "reception_activities",
							"where": ["md5(id)"]
						},
						"forcefill": {
							"groupuid": "#SESS_GROUP_NAME#",
							"guid": "#SESS_GUID#",
							"dated": "CURDATE()"
						},
						"fields": {
							"comms_type": {
								"label": "Post Box Type",
								"group": "Info",
								"type": "dataSelector",
								"groupid": "reception_postbox_type",
								"no-option": "Select Post Box Type"
							},
							"subject": {
								"label": "Subject",
								"group": "Info"
							},
							"profile_id": {
								"label": "Sender",
								"group": "Info",
								"type": "dataSelectorFromTable",
								"table": "profiletbl",
								"columns": "full_name as title,id as value",
								"where": {
									"profiletbl.type <> 'employee'": "RAW",
									"company_id": "#COMP_ID#"
								},
								"no-option": "Select Sender",
								"ajaxchain": {
									"target": "task_id",
									"src": {
										"table": "task_tbl",
										"columns": "name as title,id as value",
										"where": {
											"blocked": "false",
											"profile_id": "#refid#"
										}
									}
								}
							},
							"staff_userid": {
								"label": "Receiver",
								"group": "Info",
								"type": "dataSelectorFromTable",
								"table": "profiletbl",
								"columns": "full_name as title,id as value",
								"where": {
									"profiletbl.type": "employee",
									"company_id": "#COMP_ID#"
								},
								"no-option": "Select Receiver"
							},
							"task_id": {
								"label": "Select Task (ID)",
								"group": "Info",
								"type": "select",
								"no-option": "Select Task"
							},
							"type": {
								"label": "Type of Attachment",
								"group": "Info",
								"type": "dataSelector",
								"groupid": "reception_attachment_type"
							}

						}
					}
				},
				"width": 12,
				"noshow": true
			},
			"onsite": {
				"label": "Onsite Visit",
				"type": "module",
				"src": "infoviewTable",
				"policy": "contact.view.access",
				"vmode": "edit",
				"config": {
					"type": "sql",
					"uimode": "grid",
					"DEBUG": false,
					"policy_create": "contact.create.access",
					"policy_view": "contact.view.access",
					"policy_delete": "contact.delete.access",
					"policy_update": "contact.update.access",
					"table": "reception_onsite,profiletbl,staff_tbl",
					"cols": "reception_onsite.id,staff_tbl.full_name as staff,reception_onsite.subject,reception_onsite.Category,reception_onsite.time_in,reception_onsite.time_out,reception_onsite.projected_income",
					"where": "md5(reception_onsite.cust_id)='#refid#' and profiletbl.id=reception_onsite.cust_id and reception_onsite.staff_id=staff_tbl.loginid",
					"form": {
						"source": {
							"type": "sql",
							"table": "reception_onsite",
							"where": ["md5(id)"]
						},
						"forcefill": {
							"groupuid": "#SESS_GROUP_NAME#",
							"guid": "#SESS_GUID#",
							"cust_id": "#REFID#"
						},
						"fields": {
							"staff_id": {
								"label": "Staff",
								"group": "Info",
								"type": "dataSelectorFromTable",
								"table": "staff_tbl",
								"columns": "full_name as title,loginid as value",
								"where": {
									"blocked": "false",
									"status in ('active','under_notice','probationary')": "RAW",
									"company_id": "#COMP_ID#"
								},
								"no-option": "Select Staff",
								"required": true
							},
							"subject": {
								"label": "Subject",
								"group": "Info",
								"required": true,
								"autocomplete": "off"
							},
							"category": {
								"label": "Category",
								"group": "Info",
								"type": "dataSelector",
								"groupid": "site_visit_category",
								"no-option": "Select Category"
							},
							"time_in": {
								"label": "Time In",
								"group": "Info",
								"type": "time",
								"required": true
							},
							"time_out": {
								"label": "Time Out",
								"group": "Info",
								"type": "time",
								"required": true,
								"vmode": "edit"
							},
							"projected_income": {
								"label": "Projected Income",
								"group": "Info",
								"type": "number",
								"required": true
							}


						}
					}
				},

				"width": 12,
				"hidden": true
			},
			"emails": {
				"label": "Emails",
				"type": "module",
				"src": "emails.inbox",
				"policy": "common.allow.access",
				"rule": "profile,#refid#",
				"width": 12,
				"hidden": true
			},
			"accounts": {
				"label": "Accounts",
				"type": "module",
				"src": "accounts.ledger",
				"config": {
					"ref_id": "#refid#",
					"type": "party"
				},
				"width": 12
			},
			"files": {
				"label": "Files",
				"type": "module",
				"src": "docman.docs",
				"policy": "common.allow.access",
				"vmode": "edit",
				"config": {
					"ref_rule": "md5(profile_id)='#refid#'",
					"ref_col": "md5(profile_id)",
					"ref_id": "#refid#",
					"ref_src": "profile"
				},
				"rule": "profile,#refid#",
				"width": 12
			},
			"comments": {
				"label": "Comments",
				"type": "module",
				"src": "userComments.comments",
				"policy": "common.allow.access",
				"vmode": "edit",
				"config": {
					"ref_id": "#refid#",
					"ref_src": "profile"
				},
				"width": 12
			},
			"notes": {
				"label": "Notes",
				"type": "module",
				"src": "notesBoard.notes",
				"policy": "common.allow.access",
				"rule": "profile,#refid#",
				"vmode": "edit",
				"width": 12,
				"hidden": true
			},
			"logs": {
				"label": "Logs",
				"type": "module",
				"src": "bizlogger.logs",
				"rule": "profile,#refid#",
				"vmode": "view",
				"width": 12,
				"policy": "common.allow.access",
				"config": {
					"ref_id": "#refid#",
					"ref_src": "profile"
				},
				"hidden": true
			},
			"extras": {
				"label": "Extra",
				"type": "widget",
				"src": "biz_infoview_xtras",
				"policy": "common.allow.access",
				"vmode": "view",
				"width": 12,
				"hidden": true
			}
		}
	}
}