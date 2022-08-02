# Simple Geoip Server

A docker image running a NodeJS/Express application to easily convert ip to country.

## Installation

* clone the repository into your working dir
* change into directory _qrcode_
* build your docker image with ```docker build -t <imagename> .```
* run the container with ```docker run -it -p 4000:4000 <imagename>```

## Usage

Simply access your nodejs server under ```http://localhost:4000/ip/<ipaddress>```

