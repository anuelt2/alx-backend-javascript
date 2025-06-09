process.stdout.write('Welcome to ALX, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', function(data) {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing\n');
})
