

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
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzIiwicGF5bG9hZCI6IlBVcVVGNVh1RHZEQ3JDMXdQS2JTclZ2aGVLQ1ZYVmpuQ2Y4bmNFOXJyTEg2c3E1ODAvdVExOTlHU2MySlVSRG8yOUkwTUNsZ3NYUU1QRmlSTi9mMGRxNHlmRDZ0dUcranVKejRrRTFmbUswMnUxeDRPYjl1cVJoQjJhNEZ5MVJNVmFWb0ZENGkrenZyNTBZa2lSbTdyTWVHZmovQTJDK3ByeTFKWHRyUU1Ha0pUNkZkMlNTYjFXbHJHMEZqZ0Y2Zmhpb3BBSUxMK3FZai9KbmRMMFZDTWJ6MllES1kzNll1a2loK28zUnUzVi9RMDdVLy93RmYxRmFOQVFyOUVZdW43TUt0LzJQQTRTYWpLclgzWjc3cEsreUJsaTVqVjVGM3VmaGJhQlZEN2EvV2F5Z045SDNyS2pPSDN0ZHRXWUNPWSszYjhKSmNvWVU0V3p1SmlRTmZURUVyQlhVVGRUSUxmaUNBZFgreVlUUnI0L25qT2lRQ2wwOGdBek44bzI1UldHa2t4VUhwUzJuRGRwUjR5LzhqUjhRNVhjbUlUK0JaSGc4OUo3RHRGQnFKTmxTbTg2QmtqSXk3TjBzVGhxdEdmb0x1NkZWSDJJd2xNQy9oVEg0RyswdmxDeklGZzRXa1EraGEydUZCandqR0MxNFA5OFBtYkhHNFBBTitWeFMwQWtCNTRQZHVaMXZXTHRtNWg3Y0VRV2RBSkR3bkwxYnVEVWlmWG14YkJqSkJ2bUlMUk5wVmxNOUNpY0Jwd0VzYUJub2RDWmRUNmdjSUZFdGQ3eURjMXBiejlrcjNiTWRxM0xjUkk4RWtHMGhta3JMY2xBM3dmTU5paENsVk5Say83MDBQNE13N2ltTmpjMXVIQW1XbVNEWU13Y29ranhqKzU4M0JYSGw5WTNHa1lzaksxQUl1aU5KaTVidDN2d3N4dkdlbG8zSUM2MW5QcEZ3UzZzUWtuRXJ5Ync9PSIsImlhdCI6MTc4MTUxNDk1MiwiZXhwIjoxNzgxNTE4NTUyLCJqdGkiOiJhY2M6MToxNzgxNTE0OTUyMzc2OndlYiJ9.mpchhjucaj8u-rwFXF6SCbgPa_I2SjbhrFasdGSOf4g",
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
            "precastTracking.work_package_serial_no"
        ],
        "postsubmit": [
            "precastTracking.storeDetails"
        ]
    },
    "source": {
        "type": "sql",
        "dbopsid": "forms%40precastTracking.designprecast%4016"
    },
    "forcefill": {
        "guid": "#SESS_GUID#"
    },
    "gotolink": "infoview/precastTracking.designprecast/{hashid}",
    "fields": {
        "id": {
            "lable": "",
            "hidden": true
        },
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
                    "target": "project_id",
                    "src": {
                        "type": "api",
                        "method": "post",
                        "endpoint": "/api/services/eofficeGlobal/get_project_function?type=project&module=precastTracking"
                    }
                }
            ],
            "required": true,
            "width": 4,
            "options": []
        },
        "project_id": {
            "label": "Project",
            "type": "select",
            "required": true,
            "width": 4,
            "no-option": "Select Project",
            "options": []
        }
    },
    "infoview": {
        "template": "cards",
        "groups": {
            "design_details": {
                "label": "Design Details",
                "type": "module",
                "src": "infoviewTable",
                "config": {
                    "type": "sql",
                    "uimode": "grid",
                    "uiswitcher": false,
                    "policy_create": "design.create.access",
                    "policy_view": "design.view.access",
                    "policy_delete": "design.delete.access",
                    "policy_update": "design.update.access",
                    "toolbar": {
                        "search": true,
                        "print": false,
                        "export": false,
                        "email": false
                    },
                    "colkey": "design_id",
                    "popup.form": {
                        "hooks": {
                            "postsubmit": [
                                "precastTracking.categoryAdd"
                            ]
                        },
                        "source": {
                            "type": "sql",
                            "dbopsid": "forms%40precastTracking.designprecast.infoview_popup.design_details%40"
                        },
                        "forcefill": {
                            "guid": "#SESS_GUID#"
                        },
                        "fields": {
                            "id": {
                                "label": "",
                                "hidden": true
                            },
                            "design_id": {
                                "label": "",
                                "type": "text",
                                "hidden": true,
                                "default": "16"
                            },
                            "detail_key": {
                                "label": "Key",
                                "type": "autocomplete",
                                "required": true,
                                "width": 6,
                                "queryid": "forms%40precastTracking.designprecast%40undefined"
                            },
                            "detail_value": {
                                "label": "Value",
                                "type": "autocomplete",
                                "required": true,
                                "width": 3,
                                "queryid": "forms%40precastTracking.designprecast%40undefined"
                            },
                            "uom": {
                                "label": "Unit Of Measure",
                                "type": "select",
                                "groupid": "design_uom",
                                "required": false,
                                "search": false,
                                "width": 3,
                                "options": [
                                    {
                                        "title": "Meter",
                                        "value": "meter",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Kilometer",
                                        "value": "kilometer",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Gram",
                                        "value": "gram",
                                        "class": null,
                                        "privilege": "*"
                                    },
                                    {
                                        "title": "Cubic Meter",
                                        "value": "cubic_meter",
                                        "class": null,
                                        "privilege": "*"
                                    }
                                ]
                            },
                            "availableboq": {
                                "label": "Available For BOQ",
                                "type": "select",
                                "source": {
                                    "type": "api",
                                    "method": "post",
                                    "endpoint": "/api/services/precastTracking/getBoqDropdown"
                                },
                                "no-option": "Select BOQ",
                                "required": false,
                                "width": 6,
                                "options": []
                            },
                            "short_desc": {
                                "label": "Short Description",
                                "type": "text",
                                "disabled": true,
                                "required": false,
                                "width": 6
                            }
                        }
                    },
                    "datagrid": {
                        "detail_key": {
                            "label": "Key",
                            "searchable": true
                        },
                        "detail_value": {
                            "label": "Value",
                            "searchable": true
                        },
                        "uom": {
                            "label": "unit of measure",
                            "searchable": true,
                            "formatter": "pretty"
                        },
                        "availableboq": {
                            "label": "Available For BOQ",
                            "searchable": true
                        },
                        "short_desc": {
                            "label": "Short Description",
                            "searchable": true
                        }
                    },
                    "rules": {
                        "row_class": {
                            "detail_key": {
                                "Concrete": "hide-delete-btn",
                                "Reinforcement": "hide-delete-btn",
                                "HT Wire": "hide-delete-btn"
                            }
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
                        "api@precastTracking.deleteRecord": {
                            "label": "Delete Record",
                            "icon": "fa fa-trash text-red-500",
                            "class": "[tr.hide-delete-btn_&]:hidden",
                            "lgksConfirm": "Are you sure you want to delete this record?",
                            "payload": {
                                "table": "design_details"
                            }
                        },
                        "popup@activity_logs.popup_activity_logs/{id}": {
                            "label": "History",
                            "params": {
                                "ref_src": "forms@precastTracking.designprecast.infoview_popup.design_details"
                            },
                            "icon": "fa-solid fa-clock-rotate-left"
                        }
                    },
                    "queryid": "forms%40precastTracking.designprecast.infoviewTable.design_details%40infoview.groups.design_details"
                },
                "width": 12
            }
        }
    },
    "script": "ZnVuY3Rpb24gb25sb2FkKCkgewogICAgc2V0VGltZW91dCgoKSA9PiB7CgogICAgICAgIGRvY3VtZW50CiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPSJ3b3JrX3BhY2thZ2UiXScpCiAgICAgICAgICAgIC5mb3JFYWNoKHJhZGlvID0+IHsKCiAgICAgICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCJjaGFuZ2UiLCBmdW5jdGlvbiAoKSB7CgogICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcmlhbEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIndvcmtfcGFja2FnZV9zZXJpYWxfbm8iKTsKICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNpZ25DYXRlZ29yeUZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImRlc2lnbl9jYXRlZ29yeV9uYW1lIik7CgogICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzRXhpc3RpbmdXUCA9IHRoaXMudmFsdWUgPT09ICJleGlzdGluZyBfd29ya3BhY2thZ2UiOwoKICAgICAgICAgICAgICAgICAgICBbc2VyaWFsRmllbGQsIGRlc2lnbkNhdGVnb3J5RmllbGRdLmZvckVhY2goZmllbGQgPT4gewogICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkKSByZXR1cm47CgogICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXNhYmxlZCA9ICFpc0V4aXN0aW5nV1A7CiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnJlcXVpcmVkID0gaXNFeGlzdGluZ1dQOwoKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRXhpc3RpbmdXUCkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICJhdXRvIjsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnN0eWxlLmN1cnNvciA9ICJwb2ludGVyIjsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnN0eWxlLm9wYWNpdHkgPSAiMSI7CiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gIm5vbmUiOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuc3R5bGUuY3Vyc29yID0gIm5vdC1hbGxvd2VkIjsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnN0eWxlLm9wYWNpdHkgPSAiMC42IjsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgfSk7CgogICAgfSwgNTAwKTsKfQ==",
    "module_refid": "precastTracking.designprecast",
    "module_type": "forms"
}