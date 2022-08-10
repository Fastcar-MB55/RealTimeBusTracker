<h2 align="center">Repository: Real time Bus Tracker</h2>

### Project Title: Real time Bus Tracker

### Description of Project 
##### This project demonstrates how asynchronous functions operate. The goal of the project is to track the location of a bus on Boston’s MBTA route 1 in real-time. The project required the use of two APIs. The first one integrates JavaScript with the MapBox library to display a map. The second API also integrates JavaScript with the MBTA v3 API to pull the schema for vehicles and plot the location of each active bus on the map. Launch the application and the buses' location will update every 15 seconds.

### How to run this project.
##### You can fork this repo to your GitHub account. You can copy and download the repo to your PC by clicking on the green code button and selecting Download ZIP or you can run the project from the landing or project page.

### Roadmap of future improvements: 
##### Instead of hard coding the bus number into the MBTA API, I'd like to add a validated input field to select the bus number. Also, I would like to add a popup for each buses icon and add attributes about the bus that are available in the API. See a part of the schema below.

######        "attributes": {
######            "bearing": 0,
######            "current_status": "IN_TRANSIT_TO",
######            "current_stop_sequence": 57,
######            "direction_id": 0,
######            "label": "1438",
######            "latitude": 42.50245678,
######            "longitude": -70.85587941,
######            "occupancy_status": "MANY_SEATS_AVAILABLE",
######            "speed": null,
######            "updated_at": "2022-08-06T15:36:27-04:00"
######        },
######        "id": "y1438",
######        "links": {
######            "self": "/vehicles/y1438"
######        },
######        "relationships": {
######            "route": {
######                "data": {
######                    "id": "441",
######                    "type": "route"
######                }
######            },
######            "stop": {
######                "data": {
######                    "id": "4801",
######                    "type": "stop"
######                }
######            },
######            "trip": {
######                "data": {
######                    "id": "52043110",
######                    "type": "trip"
######                }
######            }
######        },
######        "type": "vehicle"
######    },

#####
#####
#####
###### License information: MIT License
###### Copyright (c) 2022 Tony Luce

###### Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

###### The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

###### THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


