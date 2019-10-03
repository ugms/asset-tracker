#!/usr/bin/env python3
import subprocess

try:
    subprocess.Popen(['pg_ctl', '-D', '/usr/local/var/postgres', 'start'])
except Exception as e:
    print(f'Error starting PostgreSQL: {e}')
    raise Exception(e)
