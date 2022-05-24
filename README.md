# Tutorial: Hosting a site on Dark Web (Tor Hidden Service)

[![Run On Replit](https://replit.com/badge/github/arnav-kr/tor-tutorial)](https://replit.com/github/arnav-kr/tor-tutorial)

## Introduction

Before starting, lets clear some questions that might come up in your mind:

1. What dark web really is 🤔?
2. How it is different from the normal web that we use 🤔?
3. How will I access the Dark web 🤔?
4. Is it safe to use Dark Web 🤔?
5. Is it legal to use Dark Web 🤔?
6. Is it legal to host stuff on Dark Web 🤔?
7. Do I have to buy domains for Dark Web as we do in normal web 🤔?
8. Will it cost money to deploy 🤔?

**If you already know these stuff and ready to go then you can directly skip to [Procedure 🧪](#procedure)**

### Answers

1. The dark web is the World Wide Web content that exists on darknets: overlay networks that use the Internet but require specific software, configurations, or authorization to access. Through the dark web, private computer networks can communicate and conduct business anonymously without divulging identifying information, such as a user's location. The dark web forms a small part of the deep web, the part of the Web not indexed by web search engines, although sometimes the term deep web is mistakenly used to refer specifically to the dark web. [[WikiPedia]](https://en.wikipedia.org/wiki/Dark_web#:~:text=The%20dark%20web,7%5D%5B2%5D%5B8%5D) (Probably Wikipedia was one of the best places for quick reliable intro 🙃)

2. Dark Web is part or division of the Deep web. Usually, the ordinary web is visible to search engines etc. But the deep web is the one that isn't visible to them. And in Dark Web All the data is encrypted and you need to use special software like [tor](https://www.torproject.org/) to access the Dark Web. Dark Web Highly Focus on the user **Anonymity**.

3. To access Dark Web, as I already stated you need to use special Software, and one of the famous ones is [tor](https://www.torproject.org/) that I am going to cover in this tutorial. Tor Browser is available for **Windows**, **Linux**, **macOS** and **Android**. You can download it from the official [Download Page](https://www.torproject.org/download/)

4. Accessing the content on the Dark web is relatively safe. Same as using a regular browser. Just like in the regular web, don't open links or download files from unknown sources and you would be pretty safe!

5. Using Tor or visiting the Dark Web is not unlawful in itself. It is of course illegal to carry out illegal acts anonymously, such as accessing child abuse images, promoting terrorism, or selling illegal items such as weapons. So make sure you don't go into them and it will be totally legal.

6. As using Dark Web itself isn't illegal until you don't do bad stuff. You can host your website on the dark Web.

7. No, you don't have to buy a domain for Dark Web and most don't want an identifiable domain name either because it's made for Anonymity. You will get a randomly generated 56 digit domain with `.onion` at the end to host your website.

8. No, it doesn't cost any money to host a Dark Web site on tor.

## Procedure 🧪

Lets first summarize what we will be doing here:

* Create Replit Account (if you don't have one)
* Fork My Template for deploying Node.js project to Dark Web
* Put Your Own Code in
* And you would have a Dark Web site up and running 🚀

To deploy our Node.js App we will be using [Replit](https://replit.com). It is a simple yet powerful online IDE. You can do a bunch of stuff in it.

And I have Already Created a [template](https://replit.com/@arnavkr/tor) in [Replit](https://replit.com) that you will be using to host your Node.js App.

First things first if you don't have a [Replit](https://replit.com) Account just go to https://replit.com and create one. Just log in with your GitHub and it will not take more than a few seconds.

Now that you have a [Replit](https://replit.com) Account, you can fork the following repl: [https://replit.com/@arnavkr/tor](https://replit.com/@arnavkr/tor) or use this repo as template.

[![Run On Replit](https://replit.com/badge/github/arnav-kr/tor-tutorial)](https://replit.com/github/arnav-kr/tor-tutorial)

On Opening the Fork you will find many files here's the directory structure:
```
./
├── domain.sh
├── index.js
├── .torrc
├── .replit
├── node_modules
├── package.json
├── package-lock.json
├── public
│   └── index.html
├── README.md
├── replit.nix
├── run.sh
└── tor
    └── hidden_service
        ├── authorized_clients
        ├── hostname
        ├── hs_ed25519_public_key
        └── hs_ed25519_secret_key
```

You will notice that there is already a Node.js Hello World Project setup. You just need to replace the `Node.js` Specific Files with your own code, Hit the `Run` Button and it will be deployed to the Tor. And you can access your website on `Tor Browser`.

But Before you close this article, you would be wondering "I have deployed it. But how to access it?".

To get the domain on which you can access your deployed site, you just have to run the `domain.sh` script 
```sh
bash domain.sh
```

or if you don't want to do so, just head on to `/tor/hidden_service/hostname` file and you will see an onion domain. Just visit that domain in Tor Browser to View your site.

### Understanding Files
#### `index.js`

This file doesn't need an introduction. You all know what it is for i.e. the entry point for the nodejs project

#### `node_modules/`

This is well known! and well blamed for eating storage too.

#### `package.json`

Config File for nodejs project

#### `package-lock.json`

This is automatically created when you install packages.

#### `public/`

This is being setup as the static hosting directory for express.js

#### `README.md`

Contains Some further explanations about the project

#### `run.sh`

This is the `bash` script that runs on clicking the `Run Button` on top. this script setups all things so you don't have to do much. Still if needed you can modify it accordingly.

#### `domain.sh`

The bash script to print the `.onion` domain on which the site can be accessed.

#### `.torrc`

The configuration file for Tor you can modify it accordingly if you want

#### `tor`

This directory contains all the files related to the tor

> **IMPORTATNT NOTE:**
> 
> When you run the code for the first time a directory named `hidden_service` will be created in the `/tor` directory that contains metadata about your hosted site.
> 
> There are 3 files named `hostname`, `hs_ed25519_public_key`, `hs_ed25519_secret_key` that you will find in the `/tor/hidden_service` directory.
> 
> `hostname` contains the domain on which your site is hosted.
> 
> `hs_ed25519_public_key` is the public key that the browser use internally.
> 
> **And MOST IMPORTANT `hs_ed25519_secret_key`!**
> 
> **Never Expose this file to public as the name suggests its your secret key it is not to be shared to others.**
> 
> **In case someone gets your private key then they can host their own content on your domain and they would have control over it. You have to then delete the contents of your `hidden_service` file and rerun the code but then your site will be at different domain and the previous domain will still be in control of the attacker**
> 
> **so never ever expose that to public**

#### `.replit`

Configuration file for replit usually used to configure the behaviour of the run button

#### `replit.nix`

This is the `nix` config file in replit. Used to manage packages. [More Info](https://docs.replit.com/programming-ide/getting-started-nix)

### Live Example

I have hosted the same template on replit.
And here's the link to the working example: http://l63qzrvtgmie6msklerp32oiazya3lzxaev3v54cl5nl3ob4nayeu4ad.onion/

> Note: You can't open this is normal browser, you have to use Tor Browser to open this


### End Notes

> By default repls in replit sleeps when there is not much traffic on site. to let it not sleep you can either buy a hacker plan to use "always on" or use UptimeRobot to keep pinging your repl to keep it online

Hope you got it working. 

Check the [STRUCTURE.md](https://github.com./arnav-kr/tor-tutorial/blob/main/STRUCTURE.md) for more details about files

If you come up with any issues, just open an issue at this repo.

## Author

[arnav-kr](https://github.com/arnav-kr)
