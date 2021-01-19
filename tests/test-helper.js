import Application from 'emb-lib-finder/app';
import config from 'emb-lib-finder/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
