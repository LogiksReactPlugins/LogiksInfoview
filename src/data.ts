



export const example9 = {
    "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImZ1a2ZRazBIVnkrRUVBdmU3bytyeWVCQ05Tb3N6L1dQQnJGcTV4SmhwMW1kbUg3Ri84Z3dzMUx5WlFLMHZMTGZnQWtJWEk5RTZNNHBPSURIc09LbTNrQm5abEUwa3Y1eFVmcnNySjkxZERLdEdQeDZXb2ZiR0owUnRDOW5DS21Wa2x2R1pSNFdzUlJUR3ZoS3dObXBjNnFIKzBPdmNYQTIrSmdsdGJsNFZob282ZDNhSS9ac0NXZGowekFJdFYzQ04vY2ZxMjlvTWl1UWVYVTVEc2d0Q0h0WEU5U0d0YjVJZVNHMmtTWFY2aFVnRy8reWZxUjk2N2o1KzJTdDVuQ1Q0eTcwOFlMNFFLQWl1d2ZZWVBWRkR5Z292cS9sajlIVDJsOURucEU9IiwiaWF0IjoxNzY4ODI1NDA5LCJleHAiOjE3Njg4MjkwMDksImp0aSI6ImFjYzoxOjE3Njg4MjU0MDk2OTg6d2ViIn0.G2YpMrZvCeYy81E2_3CUKB6QcsIQfLAxg5DJCLnUQyA",
        "dbopsGetHash": "/api/dbops",
        "dbopsGetRefId": "/api/dbops/save",
        "dbopsCreate": "/api/dbops/create",
        "dbopsUpdate": "/api/dbops/update",
        "dbopsFetch": "/api/dbops/fetch",
        "registerQuery": "/api/query/save",
        "runQuery": "/api/query/run"
    },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40hse.external_observations%403"
    },
    "forcefill": {
        "groupuid": "#SESS_GROUP_NAME#",
        "guid": "#SESS_GUID#"
    },
    "fields": {
        "company_code_id": {
            "label": "Company",
            "type": "select",
            "required": true,
            "width": 4,
            "ajaxchain": [
                {
                    "target": "spv_id",
                    "src": {
                        "type": "sql",
                        "queryid": "forms%40hse.external_observations%40fields.company_code_id.ajaxchain.0"
                    }
                },
                {
                    "target": "sector_id",
                    "src": {
                        "type": "sql",
                        "queryid": "forms%40hse.external_observations%40fields.company_code_id.ajaxchain.1"
                    }
                }
            ],
            "options": [
                {
                    "title": "WEL",
                    "value": 1
                },
                {
                    "title": "WMEL",
                    "value": 2
                }
            ]
        },
        "spv_id": {
            "label": "SPV",
            "type": "select",
            "required": true,
            "width": 4,
            "options": []
        },
        "sector_id": {
            "label": "Sector",
            "type": "select",
            "required": true,
            "width": 4,
            "ajaxchain": {
                "target": "project_function_id",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40hse.external_observations%40fields.sector_id.ajaxchain.0"
                }
            },
            "options": []
        },
        "project_function_id": {
            "label": "Project Function ",
            "type": "select",
            "required": true,
            "width": 4,
            "ajaxchain": {
                "target": "location_id",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40hse.external_observations%40fields.project_function_id.ajaxchain.0"
                }
            },
            "options": []
        },
        "location_id": {
            "label": "Location",
            "type": "select",
            "required": true,
            "width": 4,
            "options": []
        },
        "month": {
            "label": "Month",
            "type": "select",
            "groupid": "month_name",
            "required": true,
            "width": 4,
            "options": [
                {
                    "title": "January",
                    "value": "1",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "February",
                    "value": "2",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "March",
                    "value": "3",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "April",
                    "value": "4",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "May",
                    "value": "5",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "June",
                    "value": "6",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "July",
                    "value": "7",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "August",
                    "value": "8",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "September",
                    "value": "9",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "October",
                    "value": "10",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "November",
                    "value": "11",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "December",
                    "value": "12",
                    "class": null,
                    "privilege": "*"
                }
            ]
        },
        "letter_no": {
            "label": "Letter No",
            "type": "text",
            "required": true,
            "width": 4
        },
        "issued_by": {
            "label": "Issued By",
            "type": "text",
            "required": true,
            "width": 4
        },
        "observation_issued_count": {
            "label": "No. of observation issued",
            "type": "number",
            "required": true,
            "width": 4
        },
        "observation_report_file": {
            "label": "Observation Report (Max. Sizes:15MB)",
            "type": "file",
            "width": 4
        },
        "compliance_report_file": {
            "label": "Compliance Report (Max. Sizes:15MB)",
            "type": "file",
            "width": 4
        },
        "subject": {
            "label": "Subject",
            "type": "textarea",
            "required": true,
            "width": 12
        }
    },
    "infoview": {

        "groups": {
            "category_observation": {
                "label": "Category Observation",
                "type": "module",
                "src": "infoviewTable",
                "vmode": "edit",
                "config": {
                    "type": "sql",
                    "uimode": "grid",
                    "uiswitcher": false,
                    "policy_create": "hse.create.access",
                    "policy_view": "hse.view.access",
                    "policy_delete": "hse.delete.access",
                    "policy_update": "hse.update.access",
                    "toolbar": {
                        "search": true,
                        "print": false,
                        "export": false,
                        "email": false
                    },
                    "orderby": "hse_observations_external_details.edited_on DESC",
                    "colkey": "hse_observations_external_id",
                    "popup.form": {
                        "source": {
                            "type": "sql",
                            "dbopsid": "forms%40hse.external_observations%40"
                        },
                        "forcefill": {
                            "guid": "#SESS_GUID#",
                            "created_by": "#SESS_USER_ID#",
                            "hse_observations_external_id": "#refid#"
                        },
                        "fields": {
                            "type": {
                                "label": "Type",
                                "type": "dataSelector",
                                "required": true,
                                "groupid": "hse_observations_external_type",
                                "width": 4
                            },
                            "type_issued": {
                                "label": " Issued Count",
                                "type": "number",
                                "width": 4
                            },
                            "type_closed": {
                                "label": "Closed Count",
                                "type": "number",
                                "width": 4
                            },
                            "type_wip": {
                                "label": "Work In Progress Count",
                                "type": "number",
                                "width": 4
                            },
                            "type_not_applicable": {
                                "label": "Not Applicable Count",
                                "type": "number",
                                "width": 4
                            },
                            "type_open": {
                                "label": "Open Count",
                                "type": "number",
                                "width": 4
                            }
                        }
                    },
                    "datagrid": {
                        "id": {
                            "label": "ID",
                            "searchable": true
                        },
                        "type": {
                            "label": "Type",
                            "searchable": true,
                            "sortable": true,
                            "formatter": "pretty"
                        },
                        "type_issued": {
                            "label": " Issued Count",
                            "searchable": true,
                            "sortable": true
                        },
                        "type_closed": {
                            "label": "Closed Count",
                            "searchable": true,
                            "sortable": true
                        },
                        "type_wip": {
                            "label": "Work In Progress Count",
                            "searchable": true,
                            "sortable": true
                        },
                        "type_not_applicable": {
                            "label": "Not Applicable Count",
                            "searchable": true,
                            "sortable": true
                        },
                        "type_open": {
                            "label": "Open Count",
                            "searchable": true,
                            "sortable": true
                        }
                    },
                    "actions1": {
                        "addInfoRecord": {
                            "label": "Add Record"
                        }
                    },
                    "buttons": {
                        "editRecord": {
                            "label": "Edit Record",
                            "icon": "fa fa-pen"
                        },
                        "deleteRecord": {
                            "label": "Delete Record",
                            "icon": "fa fa-trash text-red-500"
                        }
                    },
                    "queryid": "forms%40hse.external_observations%40infoview.groups.category_observation"
                },
                "width": 12
            }
        }
    },
    "module_refid": "hse.external_observations",
    "module_type": "forms"
}


export const example10 = {
      "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IlgxTktFTm9BUmpOTGVTRVBzajVzNVFVYmtsSjNuQzlzWHhNN1dBTEppQ3NBK2hRek9Kb2pZU1k1RGNCN05aQkt2aVVGU3M0ejdkSXE1aWlyMG1ZM1hvL0tId3EzaEtJUnlpSFdwNFd3NDhCZXRUNDNxRzQ2ZnRaSE55OGhKa2FkOG13OVk5dlZQM2NscDlqZzlGeFZBZ3VRRkpiUFRFZzl0TjAxU2x3Y0pwTjlhUElCTDNaUy9rRHU1MXo5TzZUR2htclF3QTR4OGUrUDZGUjJvY2xneVVmcTVwbURvWU9IR091OEJVWFBZZGRtQXcyZllZcVc3V2Myd3FPVTM0aE9vVVI5NWRVZXhQalk1dys4Yi9ZOU5Uczl1VUZCSjRxQ0dSeGFFMmJvN1JLVUxXVEo4aG1NWFZuTk13ZkRuMDU0Mlh4eW8wNEhyc1JHU0pWeUhyL2w0cnZWZ3I1eUNLc1kyMVNiOGZHUHFPQ0k4clFXVlZ4dmc4SWRvVk1oeW5kRkpZSU9WS0hSc2JQSVRlQVJHOTFDWTNaMWRmQUd3ZVNFTmF1OE9hZndhMWNmSVpMd2U4YnJnWG5JcWZUNTMzY05pQTl5S2V3b1Z2QndCT1RIbTd0UWtkTG1YenlPVDNhRzRPRjJKc1ZGaEluZEd3PT0iLCJpYXQiOjE3Nzg4NDc3OTcsImV4cCI6MTc3ODg1MTM5NywianRpIjoiYWNjOjE6MTc3ODg0Nzc5NzE2ODp3ZWIifQ.5uTk2OpgD_ZkERTdn-utLbQEAOj7zdkWQUxb5HtZbnE",
        "dbopsGetHash": "/api/dbops",
        "dbopsGetRefId": "/api/dbops/save",
        "dbopsCreate": "/api/dbops/create",
        "dbopsUpdate": "/api/dbops/update",
        "dbopsFetch": "/api/dbops/fetch",
        "registerQuery": "/api/query/save",
        "runQuery": "/api/query/run"
    },
    "hooks": {
        "presubmit": [
            "hse.avoidSpecialCharacters"
        ]
    },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40hse.induction%4064"
    },
    "forcefill": {
        "guid": "#SESS_GUID#"
    },
    "gotolink": "infoview/hse.induction/{hashid}",
    "fields": {
        "company_code_id": {
            "label": "Company/ SPV",
            "type": "select",
            "parameter": "company_id",
            "required": true,
            "source": {
                "type": "api",
                "method": "post",
                "endpoint": "/api/services/eofficeGlobal/get_company"
            },
            "ajaxchain": [
                {
                    "target": "sector_id",
                    "src": {
                        "type": "api",
                        "method": "post",
                        "endpoint": "/api/services/eofficeGlobal/get_sector"
                    }
                }
            ],
            "no-option": "Select Company/ SPV",
            "width": 4,
            "options": []
        },
        "sector_id": {
            "label": "Sector",
            "no-option": "Select Sector",
            "type": "select",
            "parameter": {
                "sector_id": "sector_id",
                "company_id": "company_code_id"
            },
            "ajaxchain": [
                {
                    "target": "project_function_id",
                    "src": {
                        "type": "api",
                        "method": "post",
                        "endpoint": "/api/services/eofficeGlobal/get_project_function?module=hse&type=project"
                    }
                }
            ],
            "required": true,
            "width": 4,
            "options": []
        },
        "project_function_id": {
            "label": "Project Function",
            "type": "select",
            "required": true,
            "width": 4,
            "no-option": "Select Project Function",
            "options": []
        },
        "date": {
            "label": "Induction Date",
            "type": "date",
            "required": true,
            "max": "today",
            "width": 4
        },
        "location_id": {
            "label": "Location",
            "type": "text",
            "required": true,
            "width": 4
        },
        "photo_attendance": {
            "label": "Induction Photo/Attendance (Max. Sizes:10MB)",
            "type": "camera2",
            "multiple": true,
            "width": 4
        },
        "conducted_by_department": {
            "label": "Conducted By Department",
            "type": "select",
            "groupid": "hse_conducted_by_department",
            "required": true,
            "width": 4,
            "options": [
                {
                    "title": "WEL HSE",
                    "value": "wel_hse",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Contractor",
                    "value": "contractor",
                    "class": null,
                    "privilege": "*"
                }
            ]
        },
        "conducted_by_name": {
            "label": "Conducted By (Name)",
            "type": "select",
            "width": 4,
            "search": true,
            "options": [
                {
                    "title": "Admin",
                    "value": "admin"
                },
                {
                    "title": "Shivraj",
                    "value": "shivraj"
                },
                {
                    "title": "Pramod",
                    "value": "pramod"
                },
                {
                    "title": "Manthan M",
                    "value": "manthan"
                },
                {
                    "title": "susamyas",
                    "value": "susamya_ghosh@welspun.com"
                },
                {
                    "title": "Aniket Birje",
                    "value": "aniket.birje"
                },
                {
                    "title": "silk-updated",
                    "value": "100"
                },
                {
                    "title": "Yesh",
                    "value": "Yesh"
                },
                {
                    "title": "Dharmendra Kushwaha",
                    "value": "Dharmendra_Kushwaha@welspun.com"
                },
                {
                    "title": "sushant",
                    "value": "sushant"
                },
                {
                    "title": "pragati",
                    "value": "pragati"
                },
                {
                    "title": "dipti",
                    "value": "dipti"
                },
                {
                    "title": "testing",
                    "value": "test"
                },
                {
                    "title": "indulekha.singh",
                    "value": "indulekha.singh"
                },
                {
                    "title": "Initial Test",
                    "value": "initialtest"
                },
                {
                    "title": "User WELS",
                    "value": "user"
                },
                {
                    "title": "Business",
                    "value": "business1"
                },
                {
                    "title": "Manager 1",
                    "value": "manager1"
                },
                {
                    "title": "indulekha",
                    "value": "indulekha"
                },
                {
                    "title": "wel user",
                    "value": "wel_user"
                },
                {
                    "title": "Vikas Yadav",
                    "value": "Vikas_Yadav1@welspun.com"
                },
                {
                    "title": "Suyog Sakhare",
                    "value": "Suyog_Sakhare@welspun.com"
                },
                {
                    "title": "shital",
                    "value": "shital"
                },
                {
                    "title": "shitu",
                    "value": "shitu"
                },
                {
                    "title": "tester1",
                    "value": "tester1"
                },
                {
                    "title": "tester2",
                    "value": "tester2"
                },
                {
                    "title": "Manasi Gosavi",
                    "value": "manasi"
                },
                {
                    "title": "tester3",
                    "value": "tester3"
                },
                {
                    "title": "Dev Akif",
                    "value": "akif"
                },
                {
                    "title": "Vaibhav Mahale",
                    "value": "Vaibhav"
                },
                {
                    "title": "Saurabh Patil",
                    "value": "saurabh patil"
                },
                {
                    "title": "Manas G",
                    "value": "manas"
                },
                {
                    "title": "Amit Shah",
                    "value": "amit.shah@welspun.com"
                },
                {
                    "title": "Priya Mehta",
                    "value": "priya.mehta@welspun.com"
                },
                {
                    "title": "Rahul Patel",
                    "value": "rahul.patel@welspun.com"
                },
                {
                    "title": "Sneha Joshi",
                    "value": "sneha.joshi@welspun.com"
                },
                {
                    "title": "Vikram Singh",
                    "value": "vikram.singh@welspun.com"
                },
                {
                    "title": "Neha Verma",
                    "value": "neha.verma@welspun.com"
                },
                {
                    "title": "Karan Desai",
                    "value": "karan.desai@welspun.com"
                },
                {
                    "title": "Pooja Nair",
                    "value": "pooja.nair@welspun.com"
                },
                {
                    "title": "Rohan Kulkarni",
                    "value": "rohan.kulkarni@welspun.com"
                },
                {
                    "title": "Isha Trivedi",
                    "value": "isha.trivedi@welspun.com"
                },
                {
                    "title": "Arjun Malhotra",
                    "value": "arjun.malhotra@welspun.com"
                },
                {
                    "title": "Kavya Iyer",
                    "value": "kavya.iyer@welspun.com"
                },
                {
                    "title": "Nitin Chawla",
                    "value": "nitin.chawla@welspun.com"
                },
                {
                    "title": "Meera Soni",
                    "value": "meera.soni@welspun.com"
                },
                {
                    "title": "Yash Thakkar",
                    "value": "yash.thakkar@welspun.com"
                },
                {
                    "title": "Test User",
                    "value": "testuser@welspun.com"
                },
                {
                    "title": "Test User",
                    "value": "testuser1@welspun.com"
                },
                {
                    "title": "Riyan Ali",
                    "value": "riyan"
                },
                {
                    "title": "shitu2",
                    "value": "shitu2"
                },
                {
                    "title": "Test User2",
                    "value": "testuser2@welspun.com"
                },
                {
                    "title": "oliva",
                    "value": "oliva"
                },
                {
                    "title": "Rajesh Subramanian",
                    "value": "raasubramanian@deloitte.com"
                }
            ]
        },
        "participant_count": {
            "label": "Participant Count",
            "type": "number",
            "required": true,
            "min": 1,
            "width": 4
        }
    },
    "infoview": {
        "template": "cards",
        "groups": {
            "participant_details": {
                "label": "Participant Details",
                "type": "module",
                "src": "infoviewTable",
                "vmode": "edit",
                "config": {
                    "type": "sql",
                    "uimode": "grid",
                    "uiswitcher": false,
                    "policy_create": "hse.create.access",
                    "policy_view": "hse.view.access",
                    "policy_delete": "hse.delete.access",
                    "policy_update": "hse.update.access",
                    "toolbar": {
                        "search": true,
                        "print": false,
                        "export": false,
                        "email": false
                    },
                    "colkey": "hse_induction_id",
                    "popup.form": {
                        "hooks": {
                            "presubmit": [
                                "hse.validateInductionParticipantCount"
                            ],
                            "postsubmit": [
                                "hse.updateParticipantCount"
                            ]
                        },
                        "source": {
                            "type": "sql",
                            "dbopsid": "forms%40hse.induction.infoview_popup.participant_details%40"
                        },
                        "forcefill": {
                            "guid": "#SESS_GUID#"
                        },
                        "fields": {
                            "id": {
                                "label": "ID",
                                "type": "number",
                                "required": false,
                                "disabled": true,
                                "hidden": true
                            },
                            "hse_induction_id": {
                                "label": "",
                                "type": "hidden",
                                "default": "64"
                            },
                            "gender": {
                                "label": "Gender",
                                "type": "select",
                                "required": true,
                                "groupid": "user_gender",
                                "width": 4,
                                "formatter": "pretty",
                                "options": [
                                    {
                                        "title": "Female",
                                        "value": "female",
                                        "class": "",
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Male",
                                        "value": "male",
                                        "class": "",
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Other",
                                        "value": "other",
                                        "class": null,
                                        "privilege": "*"
                                    }
                                ]
                            },
                            "count": {
                                "label": "Count",
                                "type": "number",
                                "required": true,
                                "min": 1,
                                "default": 1,
                                "width": 4
                            },
                            "company": {
                                "label": "Company",
                                "type": "select",
                                "onChange": "company_required",
                                "groupid": "company_type",
                                "required": true,
                                "width": 4,
                                "options": [
                                    {
                                        "title": "Wel",
                                        "value": "wel",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Contractor Staff",
                                        "value": "contractor_staff",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Contractor Workers",
                                        "value": "contractor_workers",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Visitor",
                                        "value": "visitor",
                                        "class": null,
                                        "privilege": "*"
                                    }
                                ]
                            },
                            "company_name": {
                                "label": "Company Name",
                                "disabled": true,
                                "type": "text",
                                "width": 4
                            },
                            "photograph": {
                                "label": "Photograph",
                                "type": "file",
                                "multiple": true,
                                "width": 6
                            }
                        }
                    },
                    "datagrid": {
                        "gender": {
                            "label": "Gender",
                            "searchable": true,
                            "sortable": true,
                            "formatter": "pretty"
                        },
                        "count": {
                            "label": "Count",
                            "searchable": true,
                            "sortable": true
                        },
                        "company": {
                            "label": "Company",
                            "formatter": "pretty",
                            "searchable": true
                        },
                        "company_name": {
                            "label": "Company Name",
                            "searchable": true
                        },
                        "photograph": {
                            "label": "Photograph",
                            "searchable": true,
                            "formatter": "attachment"
                        }
                    },
                    "actions1": {
                        "addInfoRecord": {
                            "label": "Add Record"
                        }
                    },
                    "buttons": {
                        "editRecord": {
                            "label": "Edit Record",
                            "icon": "fa fa-pen"
                        },
                        "api@hse.deleteRecord": {
                            "label": "Delete Record",
                            "icon": "fa fa-trash text-red-500",
                            "lgksConfirm": "Are you sure you want to delete this record?",
                            "payload": {
                                "table": "hse_induction_details"
                            }
                        },
                        "popup@activity_logs.popup_activity_logs/{id}": {
                            "label": "History",
                            "params": {
                                "ref_src": "forms@hse.induction.infoview_popup.participant_details"
                            },
                            "icon": "fa-solid fa-clock-rotate-left"
                        }
                    },
                    "queryid": "forms%40hse.induction.infoviewTable.participant_details%40infoview.groups.participant_details"
                },
                "width": 12
            }
        }
    },
    "script": "ZnVuY3Rpb24gb25sb2FkKGN0eCkgewogIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJkYXRlIik7CiAgY29uc3QgZGF0ZSA9IGRhdGVJbnB1dD8udmFsdWU7CiAgY29uc3Qgc2Vzc2lvblVzZXIgPSBjdHg/LnVzZXI/LnVzZXI7CgogIGlmICghc2Vzc2lvblVzZXIpIHsKICAgIGNvbnNvbGUud2FybigiU2Vzc2lvbiB1c2VyIG5vdCBmb3VuZCBpbiBjdHgiKTsKICAgIHJldHVybjsKICB9CgogIGNvbnN0IHNlc3Npb25Vc2VySWQgPSBzZXNzaW9uVXNlci51c2VySWQ7CiAgY29uc3Qgc2Vzc2lvbk5hbWUgPSBzZXNzaW9uVXNlci5uYW1lOwoKICBjb25zb2xlLmxvZygic2Vzc2lvblVzZXJJZCIsIHNlc3Npb25Vc2VySWQpOwogIGNvbnNvbGUubG9nKCJzZXNzaW9uTmFtZSIsIHNlc3Npb25OYW1lKTsKCiAgLy8gLS0tLSBjb25kdWN0ZWRfYnkgaGFuZGxpbmcgLS0tLQogIHNldFRpbWVvdXQoKCkgPT4gewogICAgaWYgKHR5cGVvZiB3aW5kb3cuc2V0RmllbGRWYWx1ZSAhPT0gImZ1bmN0aW9uIikgewogICAgICBjb25zb2xlLmVycm9yKCJzZXRGaWVsZFZhbHVlIGlzIG5vdCBhdmFpbGFibGUiKTsKICAgICAgcmV0dXJuOwogICAgfQoKICAgIHdpbmRvdy5zZXRGaWVsZFZhbHVlKCJjb25kdWN0ZWRfYnlfbmFtZSIsIHNlc3Npb25Vc2VySWQpOwogIH0sIDUwMCk7CgogIC8vIC0tLS0gZGF0ZSBoYW5kbGluZyAtLS0tCiAgaWYgKCFkYXRlSW5wdXQpIHsKICAgIGNvbnNvbGUuZXJyb3IoInRidF9kYXRlIGVsZW1lbnQgbm90IGZvdW5kIik7CiAgfSBlbHNlIGlmICghZGF0ZSkgewogICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpOwogICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoIlQiKVswXTsKICAgIHNldE5hdGl2ZUlucHV0VmFsdWUoZGF0ZUlucHV0LCBmb3JtYXR0ZWREYXRlKTsKICB9IGVsc2UgewogICAgY29uc29sZS5sb2coIkVkaXQgZm9ybSDigJQgZGF0ZSBhbHJlYWR5IGV4aXN0czoiLCBkYXRlKTsKICB9Cn0KCmZ1bmN0aW9uIHNldEZpZWxkVmFsdWUoZWxlbWVudCwgdmFsdWUpIHsKICBpZiAoIWVsZW1lbnQpIHJldHVybiBmYWxzZTsKCiAgY29uc3QgdGFnID0gZWxlbWVudC50YWdOYW1lOwoKICBpZiAodGFnID09PSAiU0VMRUNUIikgewogICAgY29uc3Qgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigKICAgICAgd2luZG93LkhUTUxTZWxlY3RFbGVtZW50LnByb3RvdHlwZSwKICAgICAgInZhbHVlIgogICAgKT8uc2V0OwogICAgaWYgKHNldHRlcikgc2V0dGVyLmNhbGwoZWxlbWVudCwgdmFsdWUpOwogICAgZWxzZSBlbGVtZW50LnZhbHVlID0gdmFsdWU7CiAgfSBlbHNlIGlmICh0YWcgPT09ICJURVhUQVJFQSIpIHsKICAgIGNvbnN0IHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoCiAgICAgIHdpbmRvdy5IVE1MVGV4dEFyZWFFbGVtZW50LnByb3RvdHlwZSwKICAgICAgInZhbHVlIgogICAgKT8uc2V0OwogICAgaWYgKHNldHRlcikgc2V0dGVyLmNhbGwoZWxlbWVudCwgdmFsdWUpOwogICAgZWxzZSBlbGVtZW50LnZhbHVlID0gdmFsdWU7CiAgfSBlbHNlIHsKICAgIGNvbnN0IHNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoCiAgICAgIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwKICAgICAgInZhbHVlIgogICAgKT8uc2V0OwogICAgaWYgKHNldHRlcikgc2V0dGVyLmNhbGwoZWxlbWVudCwgdmFsdWUpOwogICAgZWxzZSBlbGVtZW50LnZhbHVlID0gdmFsdWU7CiAgfQoKICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCJpbnB1dCIsIHsgYnViYmxlczogdHJ1ZSB9KSk7CiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgiY2hhbmdlIiwgeyBidWJibGVzOiB0cnVlIH0pKTsKICByZXR1cm4gdHJ1ZTsKfQoKZnVuY3Rpb24gZmluZENvbmR1Y3RlZEJ5TmFtZUZpZWxkKCkgewogIHJldHVybiAoCiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT0iY29uZHVjdGVkX2J5X25hbWUiXScpIHx8CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY29uZHVjdGVkX2J5X25hbWUiKQogICk7Cn0KCmZ1bmN0aW9uIHdhaXRBbmRTZXRDb25kdWN0ZWRCeU5hbWUoc2Vzc2lvblVzZXJJZCwgYXR0ZW1wdCkgewogIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7CiAgY29uc3QgZGVsYXkgPSAzMDA7CgogIGNvbnN0IGZpZWxkID0gZmluZENvbmR1Y3RlZEJ5TmFtZUZpZWxkKCk7CgogIGlmICghZmllbGQpIHsKICAgIGlmIChhdHRlbXB0IDwgbWF4QXR0ZW1wdHMpIHsKICAgICAgc2V0VGltZW91dCgoKSA9PiB3YWl0QW5kU2V0Q29uZHVjdGVkQnlOYW1lKHNlc3Npb25Vc2VySWQsIGF0dGVtcHQgKyAxKSwgZGVsYXkpOwogICAgfSBlbHNlIHsKICAgICAgY29uc29sZS53YXJuKCJjb25kdWN0ZWRfYnlfbmFtZSBmaWVsZCBub3QgZm91bmQgYWZ0ZXIgcmV0cmllcyIpOwogICAgfQogICAgcmV0dXJuOwogIH0KCiAgLy8gSWYgYWxyZWFkeSBzZXQsIGRvIG5vdGhpbmcKICBpZiAoZmllbGQudmFsdWUpIHsKICAgIGNvbnNvbGUubG9nKCJjb25kdWN0ZWRfYnlfbmFtZSBhbHJlYWR5IHNlbGVjdGVkOiIsIGZpZWxkLnZhbHVlKTsKICAgIHJldHVybjsKICB9CgogIC8vIE5hdGl2ZSBzZWxlY3QgY2FzZQogIGlmIChmaWVsZC50YWdOYW1lID09PSAiU0VMRUNUIikgewogICAgY29uc3QgaGFzT3B0aW9uID0gQXJyYXkuZnJvbShmaWVsZC5vcHRpb25zKS5zb21lKAogICAgICAob3B0KSA9PiBvcHQudmFsdWUgPT09IHNlc3Npb25Vc2VySWQKICAgICk7CgogICAgaWYgKCFoYXNPcHRpb24pIHsKICAgICAgaWYgKGF0dGVtcHQgPCBtYXhBdHRlbXB0cykgewogICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2FpdEFuZFNldENvbmR1Y3RlZEJ5TmFtZShzZXNzaW9uVXNlcklkLCBhdHRlbXB0ICsgMSksIGRlbGF5KTsKICAgICAgfSBlbHNlIHsKICAgICAgICBjb25zb2xlLndhcm4oIk5vIG1hdGNoaW5nIG9wdGlvbiBmb3VuZCBmb3IgdXNlcklkOiIsIHNlc3Npb25Vc2VySWQpOwogICAgICB9CiAgICAgIHJldHVybjsKICAgIH0KCiAgICBzZXRGaWVsZFZhbHVlKGZpZWxkLCBzZXNzaW9uVXNlcklkKTsKICAgIGNvbnNvbGUubG9nKCJBdXRvLXNlbGVjdGVkIHVzZXI6Iiwgc2Vzc2lvblVzZXJJZCk7CiAgICByZXR1cm47CiAgfQoKICAvLyBDdXN0b20gZGF0YVNlbGVjdG9yRnJvbVRhYmxlIGNhc2U6CiAgLy8gdHJ5IHRvIGZpbmQgYW4gaW50ZXJuYWwgaW5wdXQvc2VsZWN0IGluc2lkZSB0aGUgc2FtZSB3cmFwcGVyCiAgY29uc3Qgd3JhcHBlciA9CiAgICBmaWVsZC5jbG9zZXN0KCdbaWRePSJ3cmFwcGVyLSJdJykgfHwKICAgIGZpZWxkLnBhcmVudEVsZW1lbnQgfHwKICAgIGRvY3VtZW50OwoKICBjb25zdCBpbm5lckNvbnRyb2wgPQogICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT0iY29uZHVjdGVkX2J5X25hbWUiXScpIHx8CiAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9ImNvbmR1Y3RlZF9ieV9uYW1lIl0nKSB8fAogICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD0iY29uZHVjdGVkX2J5X25hbWUiXScpIHx8CiAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtpZD0iY29uZHVjdGVkX2J5X25hbWUiXScpOwoKICBpZiAoaW5uZXJDb250cm9sKSB7CiAgICBpZiAoIWlubmVyQ29udHJvbC52YWx1ZSkgewogICAgICBzZXRGaWVsZFZhbHVlKGlubmVyQ29udHJvbCwgc2Vzc2lvblVzZXJJZCk7CiAgICAgIGNvbnNvbGUubG9nKCJBdXRvLXNlbGVjdGVkIHVzZXIgaW4gY3VzdG9tIGNvbnRyb2w6Iiwgc2Vzc2lvblVzZXJJZCk7CiAgICB9CiAgICByZXR1cm47CiAgfQoKICBpZiAoYXR0ZW1wdCA8IG1heEF0dGVtcHRzKSB7CiAgICBzZXRUaW1lb3V0KCgpID0+IHdhaXRBbmRTZXRDb25kdWN0ZWRCeU5hbWUoc2Vzc2lvblVzZXJJZCwgYXR0ZW1wdCArIDEpLCBkZWxheSk7CiAgfSBlbHNlIHsKICAgIGNvbnNvbGUud2FybigiQ291bGQgbm90IHNldCBjb25kdWN0ZWRfYnlfbmFtZSBhZnRlciByZXRyaWVzIik7CiAgfQp9CgpmdW5jdGlvbiBzZXROYXRpdmVJbnB1dFZhbHVlKGVsZW1lbnQsIHZhbHVlKSB7CiAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKSB7CiAgICBjb25zb2xlLmVycm9yKCJJbnZhbGlkIGVsZW1lbnQ6IiwgZWxlbWVudCk7CiAgICByZXR1cm47CiAgfQoKICBjb25zdCBzZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKAogICAgSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsCiAgICAidmFsdWUiCiAgKS5zZXQ7CgogIHNldHRlci5jYWxsKGVsZW1lbnQsIHZhbHVlKTsKICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCJpbnB1dCIsIHsgYnViYmxlczogdHJ1ZSB9KSk7CiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgiY2hhbmdlIiwgeyBidWJibGVzOiB0cnVlIH0pKTsKfQoKZnVuY3Rpb24gY29tcGFueV9yZXF1aXJlZChkYXRhKSB7CiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhKTsKICBjb25zdCB2YWx1ZSA9IGZpZWxkPy52YWx1ZTsKCiAgY29uc3QgcmV3b3JrRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY29tcGFueV9uYW1lIik7CgogIGlmICghcmV3b3JrRmllbGQpIHsKICAgIGNvbnNvbGUud2FybigiY29tcGFueV9uYW1lIGZpZWxkIG5vdCBmb3VuZCIpOwogICAgcmV0dXJuOwogIH0KCiAgaWYgKCF2YWx1ZSkgewogICAgcmV3b3JrRmllbGQuZGlzYWJsZWQgPSB0cnVlOwogICAgcmV3b3JrRmllbGQuY2xhc3NMaXN0LmFkZCgiY3Vyc29yLW5vdC1hbGxvd2VkIiwgImJnLWdyYXktMTAwIik7CiAgfSBlbHNlIHsKICAgIHJld29ya0ZpZWxkLmRpc2FibGVkID0gZmFsc2U7CiAgICByZXdvcmtGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCJjdXJzb3Itbm90LWFsbG93ZWQiLCAiYmctZ3JheS0xMDAiKTsKICB9Cn0=",
    "module_refid": "hse.induction",
    "module_type": "forms"
}