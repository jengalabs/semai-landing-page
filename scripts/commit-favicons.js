import { execSync } from 'child_process';

try {
  console.log('Adding favicon files to git...');
  execSync('git add public/icon-light-32x32.png public/icon-dark-32x32.png public/apple-icon.png public/favicon.ico public/icon.svg', { cwd: '/vercel/share/v0-project' });
  
  console.log('Committing favicon files...');
  execSync('git commit -m "Add favicon files for Semai landing page"', { cwd: '/vercel/share/v0-project' });
  
  console.log('Pushing changes...');
  execSync('git push', { cwd: '/vercel/share/v0-project' });
  
  console.log('Successfully committed and pushed favicon files!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
