

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
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6Ii9jVjFtRktDbXo1d0QvVjRHL1pTMGJyTTkxQnhBcHRpdG15TFZXVkVTUmNpNUtkVnpaLzBOSTk3Qkx4YUFvQmhkMGc5VU5CWmpwZU45ZkNCOEV5LzBlcURQVzhZNmZPa3doYjVmMXlieEVsMlRiRGlBNHR3R29iSWJIZ004Nnd0VXFTaEhjenE5WUV6RU9IbFZxQTNkSkJmenhIeUlxWG14SlRqNm5FcVRacHQ1TllzQ3cvdS9ldlBzd0FhVkxWajBHWXRRUjBaSW1KVFBYN2QwZi9kWHA3TkZXbFZ3aWVkclBadjFKQ1gxcFd5OXVtaDRDVkFsc2pmYjJEOXJRMFZCNkxpU1BCS2kwbFZIaXU5UmNHWmwyRTcwLzZ3bTRXdFU4WDRxaWNpIiwiaWF0IjoxNzcwNzg3NzQ0LCJleHAiOjE3NzA3OTEzNDQsImp0aSI6ImFjYzoxOjE3NzA3ODc3NDQ3NjI6d2ViIn0.cQuoiGHGTz6V7EH82NfFXb0uks-RjE6sRK2yJG3Xlog",
        "dbopsGetHash": "/api/dbops",
        "dbopsGetRefId": "/api/dbops/save",
        "dbopsCreate": "/api/dbops/create",
        "dbopsUpdate": "/api/dbops/update",
        "dbopsFetch": "/api/dbops/fetch",
        "registerQuery": "/api/query/save",
        "runQuery": "/api/query/run"
    },
    "forcefill": {
        "groupuid": "#SESS_GROUP_NAME#",
        "guid": "#SESS_GUID#"
    },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40termsandcondition_1.main%401"
    },
    "fields": {
        "title": {
            "label": "Title",
            "group": "Info",
            "required": true
        },
        "category": {
            "label": "Category",
            "group": "Info",
            "type": "select",
            "groupid": "accounts_terms",
            "required": true,
            "options": [
                {
                    "title": "purchase_payment_terms",
                    "value": "purchase_payment_terms",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "Purchase Terms",
                    "value": "purchase_terms",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "Quotation Terms",
                    "value": "quotations_terms",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "Payment Terms",
                    "value": "payment_terms",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "Invoices Terms",
                    "value": "invoices_terms",
                    "class": "",
                    "privilege": "*"
                }
            ]
        },
        "terms": {
            "label": "Terms",
            "group": "Info",
            "type": "richtextarea",
            "required": true
        },
        "blocked": {
            "label": "Blocked",
            "group": "Info",
            "type": "select",
            "groupid": "boolean",
            "vmode": "edit",
            "required": true,
            "options": [
                {
                    "title": "False",
                    "value": "false",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "True",
                    "value": "true",
                    "class": "",
                    "privilege": "*"
                },
                {
                    "title": "True",
                    "value": null,
                    "class": null,
                    "privilege": "*"
                }
            ]
        }
    },
    "module_refid": "termsandcondition_1.main",
    "module_type": "forms"
}