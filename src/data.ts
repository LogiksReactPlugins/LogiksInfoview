

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


export const example10 = {
     "endPoints": {
        "baseURL": "http://192.168.0.20:9999",
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6ImYrM1JTZzV4a2hvR2p3NkVBdE5lRkxXOVA1dVdhaEdLRytnenExUGlnZlhYdXhqcnFUbDhmTiszdFIzL0Y5M2huTDhIQXAxSXQwOU85OFU1Z1Y5ejd1TmYweEhNTWZpSFR0YjdoMVFBSllkeHJOTzFHS2d6M0kxU0dhZHZjbncxV0lwNktZT2RSYWpqY0NFVnQvaFlvRHNldUJCYzJpOEhtMnVxd0lxNVJIbFBmczk0U3d2MGdMbVN3TWM5QUpFQ0srVTg2VVJTVHA0NG5XZEZmcVRRNjI4Q1R3STlrQlJoaFRvRnJKQlBCa2lHdDVHcEVYWkJRZnBBZGJXZStESDBNbVFTditMYU9EZUliQWZFa3NsdkY5UlFMODhzQXdLQytEbzBCNWpWIiwiaWF0IjoxNzcyMTY5ODEzLCJleHAiOjE3NzIxNjk5MzMsImp0aSI6ImFjYzoxOjE3NzIxNjk4MTM0MzQ6d2ViIn0.9i7Ob9lz63eTHzW2u4TW2i7tsuvUr2aF6AdJethqBKs",
        "dbopsGetHash": "/api/dbops",
        "dbopsGetRefId": "/api/dbops/save",
        "dbopsCreate": "/api/dbops/create",
        "dbopsUpdate": "/api/dbops/update",
        "dbopsFetch": "/api/dbops/fetch",
        "registerQuery": "/api/query/save",
        "runQuery": "/api/query/run"
    },
    "hooks": {
        "postsubmit": [
            "quality.generateMPRNo"
        ]
    },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40quality.quality_mpr%4016"
    },
    "forcefill": {
        "guid": "#SESS_GUID#"
    },
    "gotolink": "infoview/quality.quality_mpr/{hashid}",
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
                        "endpoint": "/api/services/eofficeGlobal/get_project_function"
                    }
                }
            ],
            "required": true,
            "width": 4,
            "options": []
        },
        "project_function_id": {
            "label": "Project Function ",
            "type": "select",
            "required": true,
            "width": 4,
            "no-option": "Select Project Function",
            "options": []
        },
        "mpr_month": {
            "label": "MPR Month",
            "type": "date",
            "required": true,
            "width": 4
        },
        "mpr_id": {
            "label": "MPR",
            "type": "select",
            "groupby": "mpr_name",
            "required": true,
            "width": 4,
            "ajaxchain": {
                "target": "sub_header",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40quality.quality_mpr%40fields.mpr_id.ajaxchain.0"
                }
            },
            "options": [
                {
                    "title": "Tests",
                    "value": 1
                },
                {
                    "title": "Test ",
                    "value": 2
                }
            ]
        },
        "sub_header": {
            "label": "Sub Header",
            "type": "select",
            "required": false,
            "nodb": true,
            "width": 4,
            "autocomplete": {
                "target": "weightage,is_code_refrence,frequency",
                "src": {
                    "type": "sql",
                    "queryid": "forms%40quality.quality_mpr%40fields.sub_header.autocomplete.0"
                }
            },
            "options": []
        },
        "weightage": {
            "label": "Weightage",
            "type": "number",
            "disabled": true,
            "nodb": true,
            "required": false,
            "width": 4
        },
        "is_code_refrence": {
            "label": "Is Code Reference",
            "type": "text",
            "disabled": true,
            "nodb": true,
            "required": false,
            "width": 4
        },
        "frequency": {
            "label": "Frequency",
            "type": "text",
            "disabled": true,
            "nodb": true,
            "required": false,
            "width": 4
        },
        "section": {
            "label": "Section",
            "type": "select",
            "groupid": "section_master",
            "required": false,
            "width": 4,
            "options": [
                {
                    "title": "KIYAAN",
                    "value": "kiyaan",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "RSDCPL",
                    "value": "rsdcpl",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "SPL",
                    "value": "spl",
                    "class": null,
                    "privilege": "*"
                },
                {
                    "title": "TEJAS",
                    "value": "tejas",
                    "class": null,
                    "privilege": "*"
                }
            ]
        },
        "conducted": {
            "label": "Conducted",
            "type": "number",
            "required": false,
            "width": 4
        },
        "passed": {
            "label": "Passed",
            "type": "number",
            "required": false,
            "width": 4
        },
        "failed": {
            "label": "Failed",
            "type": "number",
            "required": false,
            "width": 4
        }
    },
    "infoview": {
        "template": "cards",
        "groups": {
            "test_master_details": {
                "label": "Test Master Details",
                "type": "module",
                "src": "infoviewTable",
                "vmode": "edit",
                "config": {
                    "type": "sql",
                    "uimode": "grid",
                    "uiswitcher": false,
                    "policy_create": "quality.create.access",
                    "policy_view": "quality.view.access",
                    "policy_delete": "quality.delete.access",
                    "policy_update": "quality.update.access",
                    "join": [
                        {
                            "type": "left",
                            "query": "data_test_master_tbl",
                            "condition": "quality_mpr_tbl.mpr_id=data_test_master_tbl.id"
                        }
                    ],
                    "toolbar": {
                        "search": true,
                        "print": false,
                        "export": false,
                        "email": false
                    },
                    "colkey": "quality_mpr_tbl.id",
                    "datagrid": {
                        "data_test_master_tbl.mpr_sub_header": {
                            "label": "MPR Sub Header",
                            "searchable": true,
                            "sortable": true
                        },
                        "data_test_master_tbl.frequency": {
                            "label": "Frequency",
                            "searchable": true,
                            "sortable": true
                        },
                        "data_test_master_tbl.weightage": {
                            "label": "Weightage",
                            "searchable": true
                        },
                        "data_test_master_tbl.is_code_refrence": {
                            "label": "Is Code Reference",
                            "searchable": true
                        }
                    },
                    "queryid": "forms%40quality.quality_mpr.infoviewTable.test_master_details%40infoview.groups.test_master_details"
                },
                "width": 12
            }
        }
    },
    "module_refid": "quality.quality_mpr",
    "module_type": "forms"
}