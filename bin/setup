#!/usr/bin/env python3
import subprocess

def install_postgres():
    print("Installing PostgreSQL...")
    try:
        subprocess.Popen(['brew', 'update'])
        subprocess.Popen(['brew', 'install', 'postgresql'])
    except Exception as e:
        print(f'Error during installation: {e}')
        raise Exception(e)
    print("Initiating database")
    try:
        subprocess.Popen(['initdb', '/usr/local/var/postgres'])
    except Exception as e:
        print(f'Error during database initiation: {e}')
        raise Exception(e)
    print("Starting PostgreSQL and creating database 'ugms'")
    try:
        subprocess.Popen(['pg_ctl', '-D', '/usr/local/var/postgres', 'start'])
    except Exception as e:
        print(f'Error starting PostgreSQL: {e}')
        raise Exception(e)
    try:
        subprocess.Popen(['createdb', 'ugms'])
    except Exception as e:
        print(f'Error creating database ugms: {e}')
        raise Exception(e)
    return


def setup():
    # check if Homebrew is installed
    print("Checking if Homebrew is installed...")
    try:
        brew_status = subprocess.Popen(['brew', '--version'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    except OSError as err:
        print(f'OS Error: {err}')
        print("Check to make sure Homebrew is installed properly. Get Homebrew at https://brew.sh/")
        return
    stdout, stderr = brew_status.communicate()
    print(stdout.decode('UTF-8'))
    
    # check if PostgreSQL is installed
    print("Checking PostgreSQL installation...")
    try:
        psql_install = subprocess.Popen(['postgres', '--version'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    except OSError: # no installation found
        print("No PostgreSQL installation found.")
        install_postgres()
    stdout, stderr = psql_install.communicate()
    print(stdout.decode('UTF-8'))
    
    # install NPM packages
    print("Checking NPM packages...")
    try:
        npm_install = subprocess.Popen(['npm', 'install'], stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    except OSError as err:
        print(f'OS Error: {err}')
        print("Check to make sure NPM is installed properly. Get NPM and Node at https://nodejs.org/")
        return
    stdout, stderr = npm_install.communicate()
    print(stdout.decode('UTF-8'))

if __name__ == '__main__':
    setup()