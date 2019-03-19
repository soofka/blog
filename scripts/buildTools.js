const fs = require('fs');
const spawn = require('child_process').spawn;

if (!(fs.existsSync('scripts/tools') && fs.existsSync('scripts/common'))) {
  const windowsEnvironment = process.platform === 'win32';
  const command = windowsEnvironment ? 'npm.cmd' : 'npm';
  const build = spawn(
    command,
    ['run', 'build:tools:force'],
    {shell: true, stdio: 'inherit'},
  );

  build.on('error', (error) => {
    console.error(error);
    process.exit(1);
  });
}
