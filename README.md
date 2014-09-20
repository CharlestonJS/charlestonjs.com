INSTALLATION:

1. Fork the repo
  - cd into the directory you want to install into
  EG: cd ~/Dev/Projects
  - Clone project into that folder.
2. install the dependencies (or just make sure they're installed)
  - `npm install -g express`
  - `npm install -g express-generator`
  - `npm install -g yo`
  - `npm install -g generator-angular`
  - `npm install -g bower`
  - `npm install -g nodemon`

  MAKE SURE MONGODB is installed on your system.

2. Set up client
  - cd into client folder
  EG: `cd client`
  - check to see if you have installed correctly
    : run the following:
      * `grunt`
      (when you run grunt, it just makes sure everything is installed correctly. if anything is missing, INSTALL IT)
      * `grunt serve`
3. Set up server
  - check to see if you have installed correctly
    : in another terminal window, navigate to your 'server' folder in your charleston_js, then run the following:
      * `npm test`
4. Connect database
  - make your mongodb directory folder
    `mkdir -p data/db && mkdir data/logs`
  - hide the mongodb directory from git
    `touch .gitignore && echo "data/" >> .gitignore`
  - everytime you want to start your mongo server, run the following:
    `mongod --dbpath data/db/ --logpath data/logs/mongodb.log --logappend`

  This tells mongo that the database is in the data/db directory instead of the default one. The --logappend method means that mongo will keep the same log file, and not overwrite it.

5. Run App
  - go to localhost:3000 in your browser


WHEN YOU WANT TO RUN PRODUCTION
  This will build the app so it will run in production. It will optimize/jshint/minify your client side code, and put it in your server/dist directory
  - run the following in the client tab
    : `grunt --force`
  - run the following in the server directory:
    : `npm start`

IF YOU HAVE ERRORS:

- (if you have bower and npm already) First clear your caches
This usually clears up any issues. Run the following:
  : `bower cache clean`
  : `npm cache clean`

reinstall npm to operate without sudo

Run the following code:

`echo export PATH=$HOME/local/bin:$PATH' >> ~/.bashrc
. ~/.bashrc
mkdir ~/local
mkdir ~/node-latest-install
cd ~/node-latest-install
curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1
./configure --prefix=~/local
make install`
`curl https://www.npmjs.org/install.sh | sh`

----------Make sure that you can run npm without typing sudo-------
Run the following:

**NOTE** run the command `whoami` surrounded by the tick mark underneath the ~ key

`sudo chown -R `whoami` ~/.npm`

`sudo chown -R `whoami` /usr/local/lib/node_modules`


If you have any problems understanding how to add new stuff to this setup, check out the excellent article written by J. Cole Morrison, found here:
http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/