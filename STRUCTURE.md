## Important Files

### `.torrc` 
Your all general configurations for the tor (Same as `/etc/tor/torrc` in other linux platforms)

### `run.sh`

The Bash Script That Runs everything i.e. Tor Service and the Node.js server

### `tor` Folder

The Folder That is the Container for the Hidden Service. (Same as `/var/lib/tor/` in other linux platforms)

### `.replit`
The Replit Config File. Configs things like the `run` button etc.

### `.replit.nix`
The nix file that contains the packages to includes

## Services Installed

* `Node.js` - `v16.x.x`
* `npm` - `v8.x.x`
* `tor` - `v0.4.6.9`

## Get The Domian

Tor Automatically generates a `.onion` domain for you and it is a random `56` character long string. Though you can customize it but thats another story.

The Domain Name is stored in the `tor/hidden-service/hostname` file. You can `cat` it to get the domain.

Or just run the `domian.sh` script. i.e.:
```bash
bash domain.sh
```

## Notes

If there is no `package.json` file then at first initialize the node project and install the dependicies
```bash
npm init -y
npm i express dotenv body-parser
```
and add the start script in the `package.json`
```json
{
  "start": "node index.js"
}
```
