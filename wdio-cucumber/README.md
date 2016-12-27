#steps to configure project

git init
npm init
npm install webdriverio --save-dev
.\node_modules\.bin\wdio config
  on my local machine
  cucumber
  Yes install fw adapter (wdio-cucumber-framework)
  Yes to the feature path folder
  yes to def_step folder path
  select reporter Junit
  select to add services: selenium-standalone & phantomJS
  select verbose
  select default screen-shot folder

create /feature/documentacion.feature



#devDependencies
npm install  --save-dev cucumber@1.3.1
npm install  --save-dev selenium-webdriver

#important
- firefox dont work use: phantomJS or Chrome


#To run your tests, execute:
  $ .\node_modules\.bin\wdio wdio.conf.js
