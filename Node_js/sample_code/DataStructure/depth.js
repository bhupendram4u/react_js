const orgData = {
    "company": "Tech Corp",
    "CEO": {
      "name": "Alice",
      "age": 50,
      "directReports": [
        {
          "name": "Bob",
          "age": 40,
          "directReports": [
            {
              "name": "Charlie",
              "age": 30
            },
            {
              "name": "David",
              "age": 35
            }
          ]
        },
        {
          "name": "Eve",
          "age": 45,
          "directReports": [
            {
              "name": "Frank",
              "age": 38
            }
          ]
        }
      ]
    }
  };
  
  function updateEmployeeAge(node, name, newAge) {
    if (node.name === name) {
      node.age = newAge;
      return true; // Indicate that the update was successful
    }
  
    if (node.directReports && node.directReports.length > 0) {
      for (let report of node.directReports) {
        const result = updateEmployeeAge(report, name, newAge);
        if (result) {
          return true; // If update was successful in any of the direct reports, return true
        }
      }
    }
  
    return false; // Indicate that the update was not successful
  }
  
  const employeeUpdated = updateEmployeeAge(orgData.CEO, "Charlie", 15);
  if (employeeUpdated) {
    console.log(`Employee age updated: ${JSON.stringify(orgData, null, 2)}`);
    // console.log(orgData)
  } else {
    console.log("Employee not found.");
  }
  