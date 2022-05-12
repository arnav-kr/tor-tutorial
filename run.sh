# Function definations

function startTor(){
  # tor folder is necessary if not then create one else directly run 
  if ![ -d "./tor" ]
  then
    mkdir ./tor 2> /dev/null
  fi
  # Run The Tor Hidden Service with the `.torrc` file as config
  tor -f ./.torrc
}

function server(){

  # If package.json not available then create done
  if ![ -d "./package.json" ]
  then
    npm install
  fi

  # TODO: Add any of you necessary scripts here
  # # Run npm Build
  # npm run build
  # Run npm start
  npm start
}

function run(){
  # Run Server and Tor in parallel
  server & 
  startTor
}

# Run The Script
run
