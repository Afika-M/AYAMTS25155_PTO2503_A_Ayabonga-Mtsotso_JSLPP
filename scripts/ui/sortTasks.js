/**
 * Simple function to sort tasks by priority (High > Medium > Low)
 */
export function sortTasksByPriority(tasks) {
  // Make a copy of the tasks array to avoid changing the original
  const tasksCopy = [...tasks];
  
  // Sort tasks: High first, then Medium, then Low
  return tasksCopy.sort((taskA, taskB) => {
    // Give each priority a number value
    const priorityValue = {
      high: 3,
      medium: 2,
      low: 1
    };
    
    // Compare the priority values
    return priorityValue[taskB.priority] - priorityValue[taskA.priority];
  });
}
