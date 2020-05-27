<h1 align="center">
	<img
		width="300"
		alt="The Lounge"
		src="https://raw.githubusercontent.com/willie-cadete/onebitexchange/master/app/assets/images/logo.png">
    
</h1>

<h3 align="center">
	A simple web application to convert currencies of several countries
</h3>

<p align="center">
	<strong>
		<a href="https://wcl-onebitexchange.herokuapp.com/">Demo</a>
	</strong>
</p>
<p align="center">
	<a href="https://app.codeship.com/projects/e718a080-7aab-0138-51b3-6211caa06eb9"><img
		alt="Build Status"
		src="https://app.codeship.com/projects/e718a080-7aab-0138-51b3-6211caa06eb9/status?branch=master"></a>
</p>

<p align="center">
	<img src="https://raw.githubusercontent.com/willie-cadete/onebitexchange/public/screenshot.png" width="550">
</p>

## Overview

You can select the currencies and invert the selection to convert

## Prerequisites

Bundler and Ruby 2.6 installed.

## Installation and usage

To get started with the app, first clone the repo and `cd` into the directory:

```sh
$ git clone https://github.com/willie-cadete/onebitexchange
$ cd onebitexchange
```

Then install the needed packages

```sh
$ bundle install 
$ yarn
```

Next, migrate the database:

```
$ bundle exec rails db:migrate
```

Finally, run the test suite to verify that everything is working correctly:

```
$ bundle exec rails spec
```

If the test suite passes, you’ll be ready to run the app in a local server:

```sh
$ rails server
```