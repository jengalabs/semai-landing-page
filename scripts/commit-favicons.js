#!/usr/bin/env node

import { execSync } from 'child_process';
import process from 'process';

try {
  const cwd = '/vercel/share/v0-project';
  
  console.log('[v0] Checking git status...');
  const status = execSync('git status --short', { cwd, encoding: 'utf-8' });
  console.log('[v0] Git status:', status);
  
  console.log('[v0] Adding favicon files to git...');
  execSync('git add public/icon-light-32x32.png public/icon-dark-32x32.png public/apple-icon.png public/favicon.ico public/icon.svg', { cwd, stdio: 'inherit' });
  
  console.log('[v0] Verifying files staged...');
  const staged = execSync('git diff --cached --name-only', { cwd, encoding: 'utf-8' });
  console.log('[v0] Staged files:', staged);
  
  console.log('[v0] Committing favicon files...');
  execSync('git commit -m "Add favicon files for Semai landing page"', { cwd, stdio: 'inherit' });
  
  console.log('[v0] Pushing changes to remote...');
  execSync('git push origin HEAD', { cwd, stdio: 'inherit' });
  
  console.log('[v0] Successfully committed and pushed favicon files!');
  process.exit(0);
} catch (error) {
  console.error('[v0] Error:', error.message);
  if (error.stderr) console.error('[v0] stderr:', error.stderr.toString());
  if (error.stdout) console.error('[v0] stdout:', error.stdout.toString());
  process.exit(1);
}
