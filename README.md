# Costs Simulator

## Problem

In a University, a classroom can contain different types of materials, and we want to manage and to calculate the total cost of them. In this case we only take **fluorescent tubes** as example.

## Solution

Developed a web-based application with a backend written in Ruby (using Sinatra) and a frontend using React. The backend simulates the lifespan of fluorescent tubes in a classroom environment, calculating the number of tubes that need replacement and the total cost over a specified period. The frontend provides a user interface for inputting parameters and displays the calculated results.

## Scope

### Requirements

- Simulation algorithm. Calculates the number of fluorescent tubes that need to be replaced in a classroom and the associated costs over a specified period of time.
- Customizable parameters: A user can customize various parameters like daily usage hours, days per week, weeks per month, number of units and tubes per unit, and tube cost.
- Web interface: Provides a user-friendly web interface to input these parameters and view the calculated results.
- Deployment on Cloud: The application is containerized using Docker and deployed to Render cloud performer.

### Constraints

- Single Classroom Scope: The current scope is limited to calculations for a single classroom at a time. It does not support multiple classrooms or an entire university's inventory simultaneously.
- Fixed Lifespan Range: The lifespan of the fluorescent tubes is simulated based on a predefined range (e.g., 100 to 200 hours). Real-world variations and factors affecting tube lifespan are not considered.
- No Real-Time Data Integration: The application does not integrate with real-time data or IoT devices for actual usage tracking.
- No User Account Management: There's no functionality for user accounts or saving past simulations.

### Assumptions

- Uniform Usage: It's assumed that all tubes in a unit are used uniformly and have the same operating hours.
- Random Lifespan within Range: The lifespan of each tube is randomly determined within a specified range and follows the same distribution across all tubes.
- Immediate Replacement: Once two tubes in a unit fail, all four tubes in that unit are immediately replaced.
- Steady Costs: The cost of fluorescent tubes is considered constant during the simulation period.
- Consistent Classroom Usage: Classroom usage in terms of hours per day, days per week, and weeks per month is consistent throughout the simulated period.

## Stack

- Ruby
- Typescript
- Sinatra
- React
- React Hook Form
- Axios
- Tailwind CSS
- Vite
- Docker
- Docker Compose
- Render

## Run Locally

### Prerequisites

- Ruby
- Node.js and npm
- Docker (if using Docker for local development)

## Install

### Using Docker

If you're using Docker for local development, make sure Docker is installed and running on your machine.

1. Build the containers:

```bash
docker-compose build
```

2. Run the containers:

```bash
docker-compose up
```

## Author

- René Monroy <rene.monroy@gmail.com>

## License

This project is licensed under the MIT License.
