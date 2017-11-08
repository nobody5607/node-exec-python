var PythonShell = require('python-shell');

var options = {
    mode: 'text',
    //pythonPath: 'path/to/python',
    // pythonOptions: ['-u'],
    //scriptPath: 'path/to/my/scripts',
    args: ['value1', 'value2', 'value3']
};

PythonShell.run('demo2.py', options, function(err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
});