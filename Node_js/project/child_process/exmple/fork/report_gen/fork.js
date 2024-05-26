const generateReport = () => {
    // Simulate a time-consuming data processing task
    const report = {
      title: 'Annual Report',
      data: []
    };
  
    for (let i = 0; i < 1e6; i++) {
      report.data.push({ id: i, value: Math.random() });
    }
  
    return report;
  };
  
  process.on('message', (message) => {
    if (message.task === 'generateReport') {
      const report = generateReport();
      process.send(report);
    }
  });
  