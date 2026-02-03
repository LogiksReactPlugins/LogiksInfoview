

export const example8 = {
    "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IjNkdkFLMklCd1BUZ01KaU1wS0dvYUk4WDNpYlBhQWtlY0QrYkIyVFZaYmpKM2VVNjFONUFkWTNGc0tVRTNuTnZTOWRXM1Y1cHhUejBOeFM4M2M0OXJTLy9yODZmcVhKSVVteTRIWDErMkplbHpYZlZCek9ncUhXeUpSNEF5WENsVkwwMm42K25JNHUxbGRpeHhaWEdQRzhZTUJWYjlXRzJFbXZuOUFrbFVFLzkxUzUxV1U5dXVsdDBDQjJsYWxzdUU5bGxJQ0RwVnN5Y0xtalJWMHdoZDZ3MGlTdHE0T0hvMThxd2doU1M0UWFlL2dCY2c4cVQxYStHbk4vcWt1SFZOMG1WZVhldmo2MW53enhFQkkyZ05pUDRVUGZNYm9LWGk0bFdMQT09IiwiaWF0IjoxNzY4NTY4NzgwLCJleHAiOjE3Njg1NzIzODAsImp0aSI6ImFjYzoxOjE3Njg1Njg3ODA3NTY6d2ViIn0.coX6jtfGkp7uOufGdPyejgZ7csxsLEm6X3eNLhO3-nU",
        "dbopsGetHash": "/api/dbops",
        "dbopsGetRefId": "/api/dbops/save",
        "dbopsCreate": "/api/dbops/create",
        "dbopsUpdate": "/api/dbops/update",
        "dbopsFetch": "/api/dbops/fetch",
        "registerQuery": "/api/query/save",
        "runQuery": "/api/query/run"
    },

    "hooks": {},
    "source": {
        "type": "sql",
        "dbopsid": "vbknS04SbS0I",
        refid: "1",
        where: {
            id: "#refid#"
        }
    },
    "forcefill": {
        "groupuid": "#SESS_GROUP_NAME#",
        "guid": "#SESS_GUID#",
        "last_status": "open",
        "company_id": "#SESS_COMP_ID#"
    },
    "fields": {
        "code": {
            "label": "Code",
            "group": "Info",
            "required": true,
            "width": 6,
            "type": "text"
        },
        "title": {
            "label": "Title",
            "group": "Info",
            "required": true,
            "width": 6,
            "type": "text"
        },
        "location_id": {
            "label": "Location",
            "group": "Info",
            "required": true,
            "width": 6,
            "type": "select",
            "valueKey": "id",
            "labelKey": "title",
            "queryid": "jlO3fzj9Oozo"
        },
        "blocked": {
            "label": "Blocked",
            "group": "Info",
            "type": "dataSelector",
            "groupid": "boolean",
            "vmode": "edit",
            "required": true
        },
        "description": {
            "label": "Description",
            "group": "Info",
            "width": 12,
            "type": "textarea"
        }
    },
    "module_refid": "category.main",
    "module_type": "forms"

}

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


export const example10 ={
     "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImhrcU9ndmQ3Wk9MWmU2bVBUcXFzcnhCY3FyUUFOK2tGQmFPenpXTEpSL0xMRHhnQTRrTEdjZE9TbW81UUNTVWd0Ym12WUdCbGs5d0Npaks2eEk4cUxndUdSK1YzOGtBM0YzclU0SjFLeUxlUTJVeTQrdzZvUXQxSUNVcUVEd2k2cTRUTGdiRkJJc1NxWWkyVHhDRk5qMXBYa1MwaE1mbHlhSUFZRE1LMFJuOVNoYmQrcjdyMGxicWdQamgvVzJKVHE5dFFoV3IyVForbXhRYXAydG9oSHF0WGdISG03eFVrcGFDb24vQzc4OWV5OCs4dk1mTEduV2RyMkw3NW1KUGVsTXZncmwrdm9hQkE5NW85bnFKVlp1MFB3NjdDalZFS3hQQy9qdGM9IiwiaWF0IjoxNzcwMTAwMDk4LCJleHAiOjE3NzAxMDM2OTgsImp0aSI6ImFjYzoxOjE3NzAxMDAwOTg4MDE6d2ViIn0.wwg6A7k9LG6fr8inJqLmFdO5H0QLBjcozT3jd2SMS2k",
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
        "dbopsid": "forms%40hse.training%401"
    },
    "forcefill": {
        "groupuid": "#SESS_GROUP_NAME#",
        "guid": "#SESS_GUID#"
    },
    "gotolink": "infoview/hse.training/{hashid}",
    "fields": {
        "company_code_id": {
            "label": "Company",
            "type": "select",
            "required": true,
            "no-option": "Select Company",
            "width": 4,
            "ajaxchain": [
                {
                    "target": "sector_id",
                    "src": {
                        "type": "sql",
                        "queryid": "forms%40hse.training%40fields.company_code_id.ajaxchain.0"
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
        "sector_id": {
            "label": "Sector",
            "type": "select",
            "required": true,
            "no-option": "Select Sector",
            "width": 4,
            "ajaxchain": {
                "target": "project_function_id",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40hse.training%40fields.sector_id.ajaxchain.0"
                }
            },
            "options": []
        },
        "project_function_id": {
            "label": "Project Function ",
            "type": "select",
            "required": true,
            "no-option": "Select Project Function",
            "width": 4,
            "ajaxchain": {
                "target": "location_id",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40hse.training%40fields.project_function_id.ajaxchain.0"
                }
            },
            "options": []
        },
        "location_id": {
            "label": "Location",
            "type": "select",
            "required": true,
            "no-option": "Select Location",
            "width": 4,
            "options": []
        },
        "date": {
            "label": "Training Date",
            "type": "date",
            "required": true,
            "width": 4
        },
        "duration_min": {
            "label": "Training Duration (Min)",
            "onChange": "calculateManHours",
            "type": "number",
            "required": true,
            "width": 4
        },
        "participant_count": {
            "label": "Participant Count",
            "onChange": "calculateManHours",
            "type": "number",
            "required": true,
            "width": 4
        },
        "man_hours": {
            "label": "Training Man Hours",
            "disabled": true,
            "type": "text",
            "width": 4
        },
        "conducted_by": {
            "label": "Training Conducted By",
            "type": "autocomplete",
            "required": true,
            "width": 4,
            "queryid": "forms%40hse.training%40undefined"
        },
        "trainer": {
            "label": "Trainer",
            "type": "select",
            "groupid": "hse_training",
            "required": true,
            "search": true,
            "width": 4,
            "options": [
                {
                    "title": "Internal",
                    "value": "internal",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "External",
                    "value": "external",
                    "class": null,
                    "privilege": "*"
                }
            ]
        },
        "category": {
            "label": "Category",
            "type": "select",
            "groupid": "hse_category",
            "required": true,
            "search": true,
            "width": 4,
            "options": [
                {
                    "title": "On Site",
                    "value": "on_site",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "On Site",
                    "value": "on_site",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Class Room",
                    "value": "class_room",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Class Room",
                    "value": "class_room",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Mock Drill",
                    "value": "mock_drill",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "Mock Drill",
                    "value": "mock_drill",
                    "class": null,
                    "privilege": "*"
                }
            ]
        },
        "photograph": {
            "label": "Training Photograph (Max. Sizes:10MB)",
            "type": "file",
            "multiple": true,
            "width": 4
        },
        "attendance_scan": {
            "label": "Training Attendance Scan (Max. Sizes:10MB)",
            "type": "file",
            "multiple": true,
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
                    "colkey": "hse_training_id",
                    "popup.form": {
                        "source": {
                            "type": "sql",
                            "dbopsid": "forms%40hse.training.infoview_popup.participant_details%40"
                        },
                        "forcefill": {
                            "guid": "#SESS_GUID#",
                            "created_by": "#SESS_USER_ID#",
                            "hse_training_id": "#refid#"
                        },
                        "fields": {
                            "topic": {
                                "label": "Topic",
                                "type": "select",
                                "onChange": "changeTopic",
                                "groupid": "training_topic",
                                "required": true,
                                "width": 4,
                                "options": [
                                    {
                                        "title": "Height Work Safety",
                                        "value": "height_work_safety",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Environment Related",
                                        "value": "environment_related",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Confined Space",
                                        "value": "confined_space",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "PPEs",
                                        "value": "ppes",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Fire Fighting",
                                        "value": "fire_fighting",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "CPR",
                                        "value": "cpr",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Road Safety",
                                        "value": "road_safety",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "ESG",
                                        "value": "esg",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Mock Drill",
                                        "value": "mock_drill",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Emergency Preparedness",
                                        "value": "emergency_preparedness",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Behaviour Based Safety",
                                        "value": "behaviour_based_safety",
                                        "class": null,
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
                            "gender": {
                                "label": "Gender",
                                "type": "select",
                                "required": true,
                                "groupid": "user_gender",
                                "width": 4,
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
                                "width": 4
                            },
                            "company_name": {
                                "label": "Company Name",
                                "type": "text",
                                "required": true,
                                "width": 4
                            },
                            "company": {
                                "label": "Company",
                                "type": "select",
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
                            "participant_photograph": {
                                "label": "Participant Photograph",
                                "type": "file",
                                "width": 4
                            },
                            "other_topic_text": {
                                "label": "Other Topic",
                                "type": "textarea",
                                "disabled": true,
                                "width": 12
                            }
                        }
                    },
                    "datagrid": {
                        "id": {
                            "label": "ID",
                            "searchable": true
                        },
                        "topic": {
                            "label": "Topic",
                            "searchable": true,
                            "sortable": true,
                            "formatter": "pretty"
                        },
                        "gender": {
                            "label": "Gender",
                            "searchable": true,
                            "sortable": true,
                            "formatter": "pretty"
                        },
                        "count": {
                            "label": "Count",
                            "searchable": true
                        },
                        "company_name": {
                            "label": "Company Name",
                            "searchable": true
                        },
                        "company": {
                            "label": "Company",
                            "searchable": true,
                            "formatter": "pretty"
                        },
                        "participant_photograph": {
                            "label": "Participant Photograph",
                            "searchable": true,
                            "formatter": "url"
                        },
                        "other_topic_text": {
                            "label": "Other Topic",
                            "searchable": true
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
                    "queryid": "forms%40hse.training.infoviewTable.participant_details%40infoview.groups.participant_details"
                },
                "width": 12
            }
        }
    },
    "script": "ZnVuY3Rpb24gc2V0TmF0aXZlVmFsdWUoZWxlbWVudCwgdmFsdWUpIHsKICBjb25zdCB2YWx1ZVNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoCiAgICB3aW5kb3cuSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsCiAgICAidmFsdWUiCiAgKS5zZXQ7CgogIHZhbHVlU2V0dGVyLmNhbGwoZWxlbWVudCwgdmFsdWUpOwoKICBlbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCJpbnB1dCIsIHsgYnViYmxlczogdHJ1ZSB9KSk7Cn0KCmZ1bmN0aW9uIGNhbGN1bGF0ZU1hbkhvdXJzKCkgewogIGNvbnN0IGR1cmF0aW9uID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJkdXJhdGlvbl9taW4iKT8udmFsdWUpIHx8IDA7CiAgY29uc3QgcGFydGljaXBhbnQgPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInBhcnRpY2lwYW50X2NvdW50Iik/LnZhbHVlKSB8fCAwOwoKICBjb25zdCBtYW5Ib3VycyA9IGR1cmF0aW9uICogcGFydGljaXBhbnQ7CiAKICBjb25zdCBtYW5Ib3Vyc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIm1hbl9ob3VycyIpOwogIGlmIChtYW5Ib3Vyc0lucHV0KSB7CiAgICBzZXROYXRpdmVWYWx1ZShtYW5Ib3Vyc0lucHV0LCBtYW5Ib3Vycyk7CiAgfQp9CgpmdW5jdGlvbiBjaGFuZ2VUb3BpYyhzZWxlY3RJZCkgewogIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0SWQpPy52YWx1ZTsKICBjb25zdCByZXdvcmtGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJvdGhlcl90b3BpY190ZXh0Iik7CgogIGlmICghcmV3b3JrRmllbGQpIHJldHVybjsKCiAgaWYgKHZhbHVlID09PSAib3RoZXIiKSB7CiAgICByZXdvcmtGaWVsZC5kaXNhYmxlZCA9IGZhbHNlOwogIH0gZWxzZSB7CiAgICByZXdvcmtGaWVsZC5kaXNhYmxlZCA9IHRydWU7ICAgCiAgfQp9CgoK",
    "module_refid": "hse.training",
    "module_type": "forms"
}